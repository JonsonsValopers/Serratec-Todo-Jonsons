import React,{ useState, useEffect, useMemo, useCallback } from 'react';
import { Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Tarefas = () => {
    const { signOut } = useAuth();
    const [usuario, setUsuario] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);

    const verAsync = async () => {
        try {
            const response = await AsyncStorage.getItem('@JONSONS:user');
            console.log(response);
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
                setUsuario(user);
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
                
            }
        }, [],
    )

    useEffect(
        () => {
            pegarUsuario(); 
            buscarUsuario();
            verAsync();
        }, [pegarUsuario, buscarUsuario], 
    )

    return(
        <>
            {
                tarefas.map(tarefa => (
                <Text>{tarefa.descricao}</Text>
                ))
            }
            <Button title="Logout" onPress={() => signOut()}/>
        </>
    )
}

export default Tarefas;