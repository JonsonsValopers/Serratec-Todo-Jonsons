import React, { useState, useEffect, useCallback } from 'react';

import  {Picker } from '@react-native-community/picker';

import { Tarefa as Container, TituloTarefa, NomeProjeto, BotaoExcluir, BotaoTexto, Botoes  } from './styles';
import BotaoConcluido from '../../components/BotaoConcluido';
import api from '../../services/api'

const Tarefa = (props) => {
    const { tarefa, usuarios, projetos, usuarioLogado } = props;
    const [usuario, setUsuario] = useState({});
    const [projeto, setProjeto] = useState({});


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
    

    return(
        <Container>

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
                (<BotaoExcluir onPress={() => excluirTarefa()}>
                    <BotaoTexto>Excluir</BotaoTexto>
                    </BotaoExcluir>
                    ) : 
                    (<BotaoExcluir disabled={true} >
                        <BotaoTexto>Excluir</BotaoTexto>
                    </BotaoExcluir>
                    )
            }
        </Botoes>

        </Container>
    )
}

export default Tarefa;