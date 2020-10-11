import React,{ useState, useEffect, useMemo, useCallback } from 'react';
import { Alert, Button, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import  { Picker } from '@react-native-community/picker';


import api from '../../services/api';
import Tarefa from '../../components/Tarefa';
import Header from '../../components/Header';

import { Container, Title,
        FormTarefa,
        Input_,
        ContainerConta,
        TextoConta,
        BotaoAdicionar,
        ContainerProjetos,
        TextoProjeto,
        BotaoText }  from './styles';

const Tarefas = () => {
    const [usuario, setUsuario] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [projetos, setProjetos] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [load, setLoad] = useState(false);
    
    const [novaTarefa, setNovaTarefa] = useState("");
    const [erroTarefa, setErroTarefa] = useState("");
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
            setLoad(true);
            try{
                const user = await AsyncStorage.getItem('@JONSONS:user');
                console.log(user);
                if(!user) return;
                setUsuario(JSON.parse(user));
                tarefasUsuario(JSON.parse(user));
            } catch(error){
                console.log(error);
            } finally{
                setLoad(false);
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
            setLoad(true);
            try {
                const resposta = await api.get(`usuarios/${user.id}?_embed=tarefas`);
                console.log(resposta.data.tarefas);
                setTarefas(resposta.data.tarefas);
            } catch (error) {
                console.log(error);
            } finally{
                setLoad(false);
            }
        }, [],
    )

    const adicionarTarefa = async () => {
        if(!novaTarefa) {
            Alert.alert("Campo vazio", "O campo do nome da tarefa deve estar preenchido!", [{
                text: "ok"
            }])
            return;
        }
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

    const qtdConcluidas = useMemo(
        () => {
            const concluidas = tarefas.filter(tarefa => {
                return tarefa.concluido === true;
            })

            return concluidas.length;
        }, [tarefas],
     )

     const qtdTarefas = useMemo(() => tarefas.length, [tarefas]);

     const pendentes = useMemo(() => tarefas.length - qtdConcluidas);

    useEffect(
        () => {
            pegarUsuario();
            TodosUsuarios();
            listaProjetos();
        }, [pegarUsuario], 
    )
    

    return(
        <>
        <Header titulo="Suas tarefas" />
        <Container>

            {
                load ? (
                    <TextoConta>Carregando...</TextoConta>
                ) : (
                    <ContainerConta>
                        <TextoConta>Concluidas: {qtdConcluidas}</TextoConta>
                        <TextoConta>Total: {qtdTarefas}</TextoConta>
                        <TextoConta>Pendentes: {pendentes}</TextoConta>
                    </ContainerConta>
                )
            }
            <ContainerProjetos>
            <TextoProjeto>Projetos: </TextoProjeto>
            <Picker
                 selectedValue={Idprojeto}
                 style={{height: 50, width: 150, color: '#3a3a3a'}}
                 onValueChange={(itemValue, itemIndex) => {
                    setIdprojeto(itemValue);
                 }
                 }>
                 {
                     projetos.map(projeto => (
                         <Picker.Item label={projeto.descricao} value={projeto.id} key={projeto.id}/>
                     ))
                 }
             </Picker>    
                
            </ContainerProjetos>            
            
            <FormTarefa>
                 <Input_ 
                     value={novaTarefa} 
                     onChangeText={(tarefa) => setNovaTarefa(tarefa)}      
                     placeholder="Adicione sua nova tarefa..."      
                 />
                <BotaoAdicionar onPress={adicionarTarefa} >
                     <BotaoText>
                         Adicionar
                     </BotaoText>
                 </BotaoAdicionar>
             </FormTarefa>
           
             <ScrollView>
            {
                tarefas.map(tarefa => {
                    return(
                    <Tarefa tarefa={tarefa} usuarios={listaUsuarios} projetos={projetos} usuarioLogado={usuario} funcaoTarefas={tarefasUsuario}  />
                    )
                })
            } 
            </ScrollView>
        </Container>
        </>
    )
}

export default Tarefas;