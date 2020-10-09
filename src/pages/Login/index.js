import React, { useState, useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Alert } from 'react-native';
import logo from '../../assets/Logo.png';
import api from '../../services/api';
import Cadastro from '../Cadastro'

import { Container, InputLogin, ButtonSubmit, ButtonSignup, ButtonText, Imagem, TextErro } from './styles';

const Login = () => {
    const { signIn } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [emailErrado, setEmailErrado] = useState('');
    const [senhaErrada, setSenhaErrada] = useState('');

    const login = async () => {

        if(!email) {
            setEmailErrado("Preencha esse campo")
            return;
        }

        if(!password) {
            setSenhaErrada("Preencha esse campo");
            return;
        }

        try {
<<<<<<< HEAD
            
            await signIn({ email: email, password: password });
=======
            signIn({ email: email, password: password });

            Alert.alert('Sucesso!', 'Login realizado com sucesso!', [{
                text: 'ok'}])

>>>>>>> 5f14e8cf38a621f43d2fe9185e77c08d6450d641
            console.log("Login: ", email + password);

            Alert.alert('Sucesso!', 'Login realizado com sucesso!', [{
                text: 'ok'}])
        } catch (error) {
<<<<<<< HEAD
            Alert.alert('Erro!', 'Houve um erro no seu login tente novamente!', [{
                text: 'ok'}])
=======
<<<<<<< HEAD
            
            Alert.alert('Erro!', 'Houve um erro no seu login tente novamente!', [{
                text: 'ok'}])
=======
            // Alert.alert('Erro!', 'Houve um erro no seu login tente novamente!', [{
            //     text: 'ok'}])
>>>>>>> 0afa79b5302b7e1694b82f87860ed9af4c9a00d1
>>>>>>> 5f14e8cf38a621f43d2fe9185e77c08d6450d641

            console.log("login: ", Error.message)
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

            { !!emailErrado ? <TextErro>{emailErrado}</TextErro> : <></> } 

            <InputLogin
                value={password}
                onChangeText={textPassword => setPassword(textPassword)}
                placeholder="Senha"
                secureTextEntry={true}
            />

            { !!senhaErrada ? <TextErro>{senhaErrada}</TextErro> : <></> } 

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