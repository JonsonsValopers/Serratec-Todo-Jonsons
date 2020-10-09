import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/Logo.png';
import Login from '../Login'

import { Container, Title, Input, Button, ButtonText, Link, Image, TextErro } from './styles';

const Cadastro = () => {
    const { signUp } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrado, setEmailErrado] = useState('');
    const [senhaErrada, setSenhaErrada] = useState('');

    const cadastro = async () => { 

        if(!email) {
            setEmailErrado("Preencha esse campo")
            return;
        }

        if(!password) {
            setSenhaErrada("Preencha esse campo");
            return;
        }

        let regexEmail = /^([\w\d^\s]{3,})[@][a-z0-9]{2,10}[.][a-z]{2,6}$/g;

        if(!regexEmail.test(email)) {
            setEmailErrada("Email não informado corretamente");
            return;
        }

        let regexpassword = /^[a-z0-9\w\d^\s]{8,20}$/g;

        if(!regexpassword.test(password)) {
            setSenhaErrada("Sua senha precisa ter mais caracteres!");
            return;
        }   

      try {

        console.log("submit", email, password);
        signUp({ email: email, password: password });

        console.log('cadastro sucess');

        Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!', [{
        text: 'ok'}])

        setEmail('');
        setPassword('');

      } catch (error) {

        Alert.alert('Erro!', 'Houve um erro no seu cadastro tente novamente!', [{
          text: 'ok'}])

          console.log('cadastro: ', error);
      }
    }

    return(
        <Container>
            <Image source={logoImg} resizeMethod="resize"/>
            <Title> Cadastro </Title>

            <Input 
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="E-mail"
            />
            
            { !!emailErrado ? <TextErro>{emailErrado}</TextErro> : <></> } 

            <Input
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="password"
                secureTextEntry={true}
            />

            { !!senhaErrada ? <TextErro>{senhaErrada}</TextErro> : <></> } 
            
             <Button
                onPress={() => cadastro()}
            >
                <ButtonText>Cadastrar</ButtonText>
            </Button>
            
            {/* <Link
                onPress={() => navigation.navigate(Login)}
            >Faça o seu Login</Link> */}
        </Container>

       
    )
}

export default Cadastro;