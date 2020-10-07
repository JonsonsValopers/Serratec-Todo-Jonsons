import React, { useState } from 'react';

import  {Picker } from '@react-native-community/picker';

import { Tarefa as Container } from './styles';
import BotaoConcluido from '../../components/BotaoConcluido';


const Tarefa = (props) => {
    const { tarefa, usuarios } = props;
    const [usuario, setUsuario] = useState({});

    const atualizarUsuario = async (usuario) => {
        tarefa.usuarioId = usuario.id;
        try {
            await api.put('tarefas', tarefa);
            console.log(tarefa);
        } catch (error) {
            console.log(error);
        }
    }   

    return(
        <>

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

        <BotaoConcluido tarefa={tarefa} />
        </>
    )
}

export default Tarefa;