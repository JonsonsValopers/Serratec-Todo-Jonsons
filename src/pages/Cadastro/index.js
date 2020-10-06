import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/Logo.png';

// import swal from 'sweetalert';

import { Container, Title, Input, Button, ButtonText, Link, Image } from './styles';

const Cadastro = () => {
    const { signUp } = useAuth();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [erroCampo, setErroCampo] = useState('');

    const cadastro = async () => {
        try {
            signUp(email, senha);
            console.log('cadastro sucess');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.log('cadastro: ', error);
        }
    }

    // const validar = () =>  {

    //     let regexEmail = /^|([\w\d^\s]{2,}|)[@][a-z0-9]{2,10}[.][a-z]{3,6}$/g;

    //     let regexSenha = /^[a-z0-9\w\d^\s]{8,20}$/g;
        
    //     if(email == "" || senha == "") {
    //         setErroCampo("Preencha todos os campos!");
    //     }

    //     if(!regexEmail.test(email) || !regexSenha.test(senha)) {
    //         setErroCampo("Campo preenchido incorretamente!");
    //     }
        
    // }

    return(
        <Container>
            <Image source={logoImg} />
            <Title> Cadastro </Title>
            <Input 
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="E-mail"
            />
            <Input
            value={senha}
            onChangeText={text => setSenha(text)}
            placeholder="E-mail"
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
}

export default Cadastro;