import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Alert } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/Logo.png';
import Login from '../Login'

import { AntDesign } from '@expo/vector-icons';

import { Container, Title, Input, Button, ButtonText, Link, Image } from './styles';

const Cadastro = () => {
    const { signUp } = useAuth();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    // const [erroCampo, setErroCampo] = useState('');

    const cadastro = async () => {
        try {
            console.log("submit", email, password);
            signUp({ email: email, password: password });
            console.log('cadastro sucess');
            setEmail('');
            setpassword('');
        } catch (error) {
            console.log('cadastro: ', error);
        }
    }

    // const validar = () =>  {

    //     let regexEmail = /^|([\w\d^\s]{2,}|)[@][a-z0-9]{2,10}[.][a-z]{3,6}$/g;

    //     let regexpassword = /^[a-z0-9\w\d^\s]{8,20}$/g;
        
    //     if(email == "" || password == "") {
    //         setErroCampo("Preencha todos os campos!");
    //     }

    //     if(!regexEmail.test(email) || !regexpassword.test(password)) {
    //         setErroCampo("Campo preenchido incorretamente!");
    //     }
        
    // }

    return(
        <Container>
            <Image source={logoImg} resizeMethod="resize"/>
            <Title> Cadastro </Title>
            <Input 
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="E-mail"
            />
            <Input
            value={password}
            onChangeText={text => setpassword(text)}
            placeholder="password"
            />
            <Button
                onPress={() => cadastro()}
            >
                <ButtonText>Cadastrar</ButtonText>
            </Button>
            <Link
                onPress={() => navigation.navigate(Login)}
            >Faça o seu Login</Link>
        </Container>
        
    
    )

    function alerta() {
        Alert.alert("Ae familia", "É hoje clã", [
            {text: "vamo time", onPress: () => console.log("ok tudo certo") }
        ])
    }
}

export default Cadastro;