import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { useNavigation } from '@react-navigation/native';
import Cadastro from '../Cadastro'

import logo from '../../assets/Logo.png';

import { Container, InputLogin, ButtonSubmit, ButtonSignup, ButtonText, Imagem } from './styles';

const Login = () => {
    const { signIn } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);

    const login = async () => {
        try {
            signIn({ email: email, password: password });
            // console.log("Login: ", email + password);
        } catch (error) {
            console.log("login: ", error)
        }
    }
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

            <ButtonSubmit
                onPress={() => login()}
            >
                {carregando ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                        <ButtonText>Entrar</ButtonText>
                    )}
            </ButtonSubmit>


            <ButtonSignup
                onPress={() => navigation.navigate(Cadastro)}
            >
                {carregando ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                        <ButtonText>Cadastre-se</ButtonText>
                    )}
            </ButtonSignup>

        </Container>
    )
}

export default Login;