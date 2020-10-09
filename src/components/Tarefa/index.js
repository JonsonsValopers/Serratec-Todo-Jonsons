import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';

import  { Picker } from '@react-native-community/picker';

import { 
    Tarefa as Container, 
    TituloTarefa, 
    NomeProjeto, 
    BotaoExcluir,
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
    const [load, setLoad] = useState(false)


    const atualizarUsuario = 
        async (usuario) => {
            setUsuario(usuario);
            tarefa.usuarioId = usuario.id;
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


    useEffect(
        () => {
            setUsuario(usuarioLogado);
            buscarProjeto();
        }, [buscarProjeto]
    )
    

    const excluirTarefa = async(id) => {
        
        try {
            
            const response = await api.delete(`tarefas/${id}`);
            Alert.alert("Sucesso!", "Tarefa deletada com sucesso.", [{
                text: "ok"
            }])
            funcaoTarefas(usuarioLogado);
            console.log(response)

        } catch (erro) {
            
            Alert.alert("Erro!", "Tarefa nao excluida.", [{
                text: "ok"
            }])

            console.log("Erro: ", erro);

        }
    }
    
    return(
        <Container>

             

             <ContainerTexto>
                <TituloTarefa>{tarefa.descricao}</TituloTarefa>

                <NomeProjeto>Projeto: {projeto.descricao}</NomeProjeto>
             </ContainerTexto>

            

         <Botoes>
         
             <BotaoConcluido tarefa={tarefa} funcaoTarefas={funcaoTarefas} usuarioLogado={usuarioLogado}/>
            <Picker
                 selectedValue={usuario}
                 style={{height: 50, width: 100}}
                 onValueChange={(itemValue, itemIndex) => {
                    atualizarUsuario(itemValue);
                 }
                 }>
                 {
                     usuarios.map(user => (
                         <Picker.Item label={user.email} value={user} />
                     ))
                 }
             </Picker>

             {
                tarefa.concluido ? (
                <BotaoExcluir onPress={() => excluirTarefa(tarefa.id)}>
                         <MaterialCommunityIcons name="delete-outline" size={25} color="blue" />
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