import React, { useState, useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

// import { Alert } from 'react-native';
import logo from '../../assets/Logo.png';
import api from '../../services/api';
import Cadastro from '../Cadastro'

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
            console.log("Login: ", email + password);

            // Alert.alert('Sucesso!', 'Login realizado com sucesso!', [{
            //     text: 'ok'}])

        } catch (error) {
            // Alert.alert('Erro!', 'Houve um erro no seu login tente novamente!', [{
            //     text: 'ok'}])

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


            {/* <ButtonSignup>
                {carregando ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                        <ButtonText onPress={() => navigation.navigate(Cadastro)}>Cadastre-se</ButtonText>
                    )}
            </ButtonSignup> */}

        </Container>
    )
}

export default Login;