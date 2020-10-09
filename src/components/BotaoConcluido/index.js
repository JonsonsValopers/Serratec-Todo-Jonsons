import React,{ useState } from 'react';

import api from '../../services/api';

import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BotaoConcluido = (props) => {
    const { tarefa, funcaoTarefas, usuarioLogado } = props;
    const [concluido, setConcluido] = useState(true);
    
    const atualizarTarefa = async () => {
        tarefa.concluido = !tarefa.concluido;

        try {
            await api.put(`tarefas/${tarefa.id}`, tarefa);
            console.log(tarefa);
            setConcluido(tarefa.concluido);
            funcaoTarefas(usuarioLogado);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        {
            tarefa.concluido ? (
                <MaterialCommunityIcons 
                    name="check-circle-outline"
                    color="#3a3a3a"
                    size={22}
                    onPress={() => atualizarTarefa()}
                  />
            ) : (
                <MaterialCommunityIcons 
                    name="circle-outline"
                    color="#3a3a3a"
                    size={22}
                    onPress={() => atualizarTarefa()}
                  />
            )
        }
        </>
    )
}

export default BotaoConcluido;