import React,{ useState, useEffect, useMemo, useCallback } from 'react';
import { Alert, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import  { Picker } from '@react-native-community/picker';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Tarefa from '../../components/Tarefa';

import { Container, Title,
        FormTarefa,
        Input_,
        BotaoAdicionar,
        BotaoText }  from './styles';

const Tarefas = () => {
    const { signOut } = useAuth();
    const [usuario, setUsuario] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [projetos, setProjetos] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [req, setReq] = useState(false);
    
    const [novaTarefa, setNovaTarefa] = useState("");
    const [Idprojeto, setIdprojeto] = useState(Number);

    const TodosUsuarios = async () => {
        try {
            const resposta = await api.get('usuarios');
            setListaUsuarios(resposta.data);
            console.log(resposta.data);
        } catch (error) {
            console.log(error);
        }   
    }

    const pegarUsuario = useCallback(
        async () => {
            try{
                const user = await AsyncStorage.getItem('@JONSONS:user');
                console.log(user);
                if(!user) return;
                setUsuario(JSON.parse(user));
                tarefasUsuario(JSON.parse(user));
            } catch(error){
                console.log(error);
            }
        }, [], 
    )

    const listaProjetos = useCallback(
        async () => {
            try {
                const lista = await api.get('projetos');
                setProjetos(lista.data);
                console.log(lista.data);
            } catch (error) {
                console.log(error);
            }
        }
    )

    const tarefasUsuario = useCallback (
        async (user) => {
            try {
                const resposta = await api.get(`usuarios/${user.id}?_embed=tarefas`);
                console.log(resposta.data.tarefas);
                setTarefas(resposta.data.tarefas);
            } catch (error) {
                console.log(error);
            }
        }, [],
    )

    const adicionarTarefa = async () => {

        const params = {
            descricao: novaTarefa,
            concluido: false,
            projetoId: Idprojeto,
            usuarioId: usuario.id
        }

        try {

            const response = await api.post('tarefas', params);
            Alert.alert("Sucesso!", "Tarefa adicionada com sucesso.", [{
                text: "ok"
            }]);

            console.log(response);

            tarefasUsuario(usuario);
            setNovaTarefa("");
        } catch (erro) {

            console.log("Erro adicionarTarefa: ", erro);
            Alert.alert("Erro!", "Tarefa nao adicionada.", [{
                text: "ok"
            }]);

        }
    }

    useEffect(
        () => {
            pegarUsuario(); 
            TodosUsuarios();
            listaProjetos();
        }, [pegarUsuario], 
    )
    

    return(
        <Container>
            
            <Title>Lista de tarefas</Title>

            <FormTarefa>
                 <Input_ 
                     value={novaTarefa} 
                     onChangeText={(tarefa) => setNovaTarefa(tarefa)}      
                     placeholder="Nova tarefa..."      
                 />
                <BotaoAdicionar onPress={() => adicionarTarefa()} >
                     <BotaoText>
                         Adicionar
                     </BotaoText>
                 </BotaoAdicionar>
             </FormTarefa>
             <Picker
                 selectedValue={Idprojeto}
                 style={{height: 50, width: 100}}
                 onValueChange={(itemValue, itemIndex) => {
                    setIdprojeto(itemValue);
                 }
                 }>
                 {
                     projetos.map(projeto => (
                         <Picker.Item label={projeto.descricao} value={projeto.id} />
                     ))
                 }
             </Picker>
             <ScrollView>
            {
                tarefas.map(tarefa => {
                    return(
                    <Tarefa tarefa={tarefa} usuarios={listaUsuarios} projetos={projetos} usuarioLogado={usuario} funcaoTarefas={tarefasUsuario}  />
                    )
                })
            } 
            </ScrollView>
            <Button title="Logout" onPress={() => signOut()}/>
        </Container>
    )
}

export default Tarefas;