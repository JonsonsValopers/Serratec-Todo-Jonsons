import React, { useState, useCallback, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import  { Picker } from '@react-native-community/picker';

import { 
    Tarefa as Container, 
    TituloTarefa, 
    NomeProjeto, 
    BotaoExcluir,
    ContainerUsuario,
    InfoTexto,
    Botoes,
    ContainerTexto
} from './styles';

import BotaoConcluido from '../../components/BotaoConcluido';
import api from '../../services/api'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tarefa = (props) => {
    const { tarefa, usuarios, projetos, usuarioLogado, funcaoTarefas } = props;
    const [usuario, setUsuario] = useState({});
    const [projeto, setProjeto] = useState({});
    const [load, setLoad] = useState(false);


    const atualizarUsuario = 
        async (id) => {
            setUsuario(id);
            tarefa.usuarioId = id;
            
            try {
                await api.put(`tarefas/${tarefa.id}`, tarefa);
                console.log(tarefa);
                funcaoTarefas(usuarioLogado);
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

    const excluirTarefa = async(id) => {
        
        try {
            
            await api.delete(`tarefas/${id}`);
            Alert.alert("Sucesso!", "Tarefa deletada com sucesso.", [{
                text: "ok"
            }])
            funcaoTarefas(usuarioLogado);

        } catch (erro) {
            
            Alert.alert("Erro!", "Tarefa nao excluida.", [{
                text: "ok"
            }])

            console.log("Erro: ", erro);

        }
    }

    useEffect(
        () => {
            setLoad(true)
            buscarProjeto();
            setUsuario(usuarioLogado);
            setLoad(false);
        }, [buscarProjeto]
    )
    
    return(
        <Container key={tarefa.id}>
            {
                load ? (
                    <TituloTarefa>Carregando...</TituloTarefa>
                ) : (
                    <>
                    </>
                )
            }
             <ContainerTexto>
                <TituloTarefa>Tarefa: {tarefa.descricao}</TituloTarefa>

                <NomeProjeto>Projeto: {projeto.descricao}</NomeProjeto>
             </ContainerTexto>
             <ContainerUsuario>
             <InfoTexto>Usuario:</InfoTexto>
             <Picker
                 selectedValue={usuario.id}
                 style={{height: 50, width: 220}}
                 onValueChange={(itemValue, itemIndex) => {
                    atualizarUsuario(itemValue);
                 }
                 }>
                 {
                     usuarios.map(user => (
                         <Picker.Item label={user.email} value={user.id} />
                     ))
                 }
             </Picker>
             </ContainerUsuario>
            

         <Botoes>
            <InfoTexto>Status:</InfoTexto>
            <BotaoConcluido tarefa={tarefa} funcaoTarefas={funcaoTarefas} usuarioLogado={usuarioLogado}/>
            

             {
                tarefa.concluido ? (
                <BotaoExcluir onPress={() => excluirTarefa(tarefa.id)}>
                         <MaterialCommunityIcons name="delete-outline" size={25} color="red" />
                     </BotaoExcluir>                
            ) : (
                <> 
                </>
            )
        }
         </Botoes>
        </Container>
       
    )
}

export default Tarefa;