import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/Logo.png';
import Login from '../Login'

// import { AntDesign } from '@expo/vector-icons';

import { Container, Title, Input, Button, ButtonText, Link, Image } from './styles';

const Cadastro = () => {
    const { signUp } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [erroCampo, setErroCampo] = useState('');

    const cadastro = async () => { 
        try {
            console.log("submit", email, password);
            signUp({ email: email, password: password });
            console.log('cadastro sucess');
            setEmail('');
            setPassword('');
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
                onChangeText={text => setPassword(text)}
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
}

/*
 const umaOpcap = () => {
    Alert.alert('Sucesso!', 'Login realizado com sucesso!', [{
        text: 'ok'}])
  }


  const duasOpcoes = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am two option alert. Do you want to cancel me ?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes Pressed')
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  const tresOpcoes = () => {
    //function to make three option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am three option alert. Do you want to cancel me ?',
      [
        {
          text: 'May be',
          onPress: () => console.log('May be Pressed')
        },
        {
          text: 'Yes', onPress: () => console.log('Yes Pressed')
        },
        {
          text: 'OK', onPress: () => console.log('OK Pressed')
        },
      ],
      {cancelable: true},
    );
  };


*/

export default Cadastro;