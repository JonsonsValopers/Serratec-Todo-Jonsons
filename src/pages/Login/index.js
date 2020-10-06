import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';

import logo from '../../assets/Logo.png';

import { Container, InputLogin, ButtonSubmit, ButtonSignup, ButtonText, Imagem } from './styles';

const Login = () => {
    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);


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
                        <ButtonText>Cadastre-se</ButtonText>
                    )}
            </ButtonSignup>

        </Container>
    )
}

export default Login;