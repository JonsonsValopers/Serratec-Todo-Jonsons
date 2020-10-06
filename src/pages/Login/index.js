import React, { useState, useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';


import logo from '../../assets/Logo.png';
import api from '../../services/api';
import Cadastro from '../Cadastro'

import { Container, InputLogin, ButtonSubmit, ButtonSignup, ButtonText, Imagem } from './styles';

const Login = () => {
    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [buscaUsuarios, setBuscaUsuarios] = useState([]);
    const navigation = useNavigation();

    const loadUsuarios = useCallback(
        async () => {
            const resposta = await api.get('/usuarios');
            // console.log(resposta.data);
            setBuscaUsuarios(resposta.data);

        }, [],
    );
    useEffect(() => {
        loadUsuarios();
    }, [loadUsuarios]);



    return (
        <Container>
            <Imagem source={logo} />

            <InputLogin
                value={email}
                onChangeText={textEmail => setEmail(textEmail)}
                placeholder="E-mail"
            />

            <InputLogin
                value={password}
                onChangeText={textPassword => setPassword(textPassword)}
                placeholder="Senha"
                secureTextEntry={true}
            />

            <ButtonSubmit>
                {carregando ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                        <ButtonText>Entrar</ButtonText>
                    )}
            </ButtonSubmit>


            <ButtonSignup>
                {carregando ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                        <ButtonText onPress={() => navigation.navigate(Cadastro)}>Cadastre-se</ButtonText>
                    )}
            </ButtonSignup>

        </Container>
    )
}

export default Login;