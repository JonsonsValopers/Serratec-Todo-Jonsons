import React,{ useState, useEffect, useMemo, useCallback } from 'react';
import { Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Tarefa from '../../components/Tarefa'

const Tarefas = () => {
    const { signOut } = useAuth();
    const [usuario, setUsuario] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);

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
                buscarUsuario();
            } catch(error){
                console.log(error);
            }
        }, [], 
    )

    const buscarUsuario = useCallback (
        async () => {
            try {
                const resposta = await api.get(`usuarios/${usuario.id}?_embed=tarefas`);
                console.log(resposta.data.tarefas);
                setTarefas(resposta.data.tarefas);
            } catch (error) {
                console.log(error);
            }
        }, [],
    )

    useEffect(
        () => {
            pegarUsuario(); 
            TodosUsuarios();
        }, [pegarUsuario], 
    )
    

    return(
        <>
            {
                tarefas.map(tarefa => {
                    return(
                    <Tarefa tarefa={tarefa} usuarios={listaUsuarios} />
                    )
                })
            }
            <Button title="Logout" onPress={() => signOut()}/>
        </>
    )
}

export default Tarefas;