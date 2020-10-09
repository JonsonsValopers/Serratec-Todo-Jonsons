import React, { useState } from 'react';
import { Alert } from 'react-native';

import  { Picker } from '@react-native-community/picker';

import { 
    Tarefa as Container, 
    TituloTarefa, 
    NomeProjeto, 
    BotaoExcluir,
    Botoes,
    // FormTarefa,
    // Input_,
    // BotaoAdicionar,
    // BotaoText
} from './styles';

import BotaoConcluido from '../../components/BotaoConcluido';
import api from '../../services/api'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tarefa = (props) => {
    const { tarefa, usuarios, projetos } = props;
    const [usuario, setUsuario] = useState({});
    const [projeto, setProjeto] = useState({});

    const [novaTarefa, setNovaTarefa] = useState("");
    const [Idprojeto, setIdprojeto] = useState();
    const [Idusuario, setIdusuario] = useState();

    const atualizarUsuario = async (id) => {
        console.log(id);
        tarefa.usuarioId = parseInt(id);
        try {
            await api.put(`tarefas/${tarefa.id}`, tarefa);
            console.log(tarefa);
        } catch (error) {
            console.log(error);
        }
    }

    const buscarProjeto = useCallback(
        () => {
        let projetoAchado = projetos.find(projeto => projeto.id === tarefa.projetoId);
        setProjeto(projetoAchado);
        console.log(usuarioLogado.email);
       }, [],
    )


    useEffect(
        () => {
           buscarProjeto();
            setUsuario(usuarioLogado);
        }, [buscarProjeto]
    )
    


    // const adicionarTarefa = async () => {

    //     const params = {
    //         descricao: novaTarefa,
    //         concluido: false,
    //         projetoId: Idprojeto,
    //         usuarioId: Idusuario
    //     }

    //     try {

    //         const response = await api.post('tarefas', params);
    //         Alert.alert("Sucesso!", "Tarefa adicionada com sucesso.", [{
    //             text: "ok"
    //         }]);

    //         console.log(response)
            
    //     } catch (erro) {

    //         console.log("Erro adicionarTarefa: ", erro);
    //         Alert.alert("Erro!", "Tarefa nao adicionada.", [{
    //             text: "ok"
    //         }]);

    //     }
    // }

    // const excluirTarefa = async(id) => {
        
    //     try {
            
    //         const response = await api.delete(`tarefas/${id}`);
    //         Alert.alert("Sucesso!", "Tarefa deletada com sucesso.", [{
    //             text: "ok"
    //         }])

    //         console.log(response)

    //     } catch (erro) {
            
    //         Alert.alert("Erro!", "Tarefa nao excluida.", [{
    //             text: "ok"
    //         }])

    //         console.log("Erro: ", erro);

    //     }
    // }
    
    return(
        <Container>

             {/* <FormTarefa>
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
             </FormTarefa> */}

            <TituloTarefa>{tarefa.descricao}</TituloTarefa>

            <NomeProjeto>{projeto.descricao}</NomeProjeto>

         <Botoes>
             <BotaoConcluido tarefa={tarefa} />
            <Picker
                 selectedValue={usuario.id}
                 style={{height: 50, width: 100}}
                 onValueChange={(itemValue, itemPosition) => {
                     setUsuario(itemValue);
                     atualizarUsuario(itemValue);
                 }
                 }>
                 {
                     usuarios.map(usuario => (
                         <Picker.Item label={usuario.email} value={usuario.id} />
                     ))
                 }
             </Picker>
            {
                 tarefa.concluido ? 
                 ( 
                     <BotaoExcluir onPress={() => excluirTarefa(tarefa.id)}>
                         <MaterialCommunityIcons name="delete-outline" size={25} color="blue" />
                     </BotaoExcluir>
                ) : (
                    <BotaoExcluir disabled={true} >
                     </BotaoExcluir>
                 )
             }
         </Botoes>
        </Container>
       
    )
}

export default Tarefa;