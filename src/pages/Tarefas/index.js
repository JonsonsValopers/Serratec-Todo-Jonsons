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
    const [projetos, setProjetos] = useState([]);
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
                console.log(lista.data)
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

    useEffect(
        () => {
            pegarUsuario(); 
            TodosUsuarios();
            listaProjetos();
        }, [pegarUsuario], 
    )
    

    return(
        <>
            {
                tarefas.map(tarefa => {
                    return(
                    <Tarefa tarefa={tarefa} usuarios={listaUsuarios} projetos={projetos}/>
                    )
                })
            }
            <Button title="Logout" onPress={() => signOut()}/>
        </>
    )
}

export default Tarefas;