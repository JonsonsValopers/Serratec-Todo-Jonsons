import React, { useState } from 'react';

import  {Picker } from '@react-native-community/picker';

import { Tarefa as Container, TituloTarefa, NomeProjeto, BotaoExcluir, BotaoTexto, Botoes  } from './styles';
import BotaoConcluido from '../../components/BotaoConcluido';
import api from '../../services/api'

const Tarefa = (props) => {
    const { tarefa, usuarios, projeto } = props;
    const [usuario, setUsuario] = useState({});
    const [projeto, setProjeto] = useState({});

    const atualizarUsuario = async (usuario) => {
        tarefa.usuarioId = usuario.id;
        try {
            await api.put(`tarefas/${tarefa.id}`, tarefa);
            console.log(tarefa);
        } catch (error) {
            console.log(error);
        }
    }

    const pegarProjeto = async (usuario) => {
        tarefa.usuarioId = usuario.id;
        try {
            const resposta = await api.get(`projetos/${tarefa.projetoId}`);
            setProjeto(resposta.data);
            console.log(projeto.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(
        () => {
            pegarProjeto();
        }, [pegarProjeto]
    )
    
    

    return(
        <Container>

            <TituloTarefa>{tarefa.descricao}</TituloTarefa>

            <NomeProjeto>{projeto.nome}</NomeProjeto>

        <Botoes>
            <BotaoConcluido tarefa={tarefa} />

            <Picker
                selectedValue={usuario}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) => {
                    setUsuario(itemValue);
                    atualizarUsuario(itemValue);
                }
                }>
                {
                    usuarios.map(usuario => (
                        <Picker.Item label={usuario.email} value={usuario} />
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