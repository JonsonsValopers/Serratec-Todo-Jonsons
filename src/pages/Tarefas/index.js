import React from 'react';
import { Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Tarefas = () => {
    const { signOut } = useAuth();
    return(
        <>
            <Text>Olá Minhas tarefas</Text>
            <Button title="Logout" onPress={() => signOut()}/>
        </>
    )
}

export default Tarefas;