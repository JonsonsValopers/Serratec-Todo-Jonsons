import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background-color: #B4B9BD;
    align-items: center;
   
`;

export const Image = styled.Image` 
    width: 300px;
    height: 200px;
`;

export const Title = styled.Text`
    margin-top: 40px;
    font-size: 30px;
    font-weight: bold;
    color: #3a3a3a;
    margin-bottom: 20%;
    
`;

export const Input = styled.TextInput`
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    height: 40px;
    background-color: #fff;
    color: #3a3a3a;
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    width: 60%;
    height: 40px;
    margin-top: 10%;
    background-color: #279FFC;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;

`;

export const Link = styled.Text`    
    margin-top: 20px;
    font-size: 20px;
    font-weight: 200;
    color: blue;
`;

export const TextErro = styled.Text`
    color: rgba(196, 28, 0, .7);
    font-weight: bold;
    font-size: 13;
    margin-top:7px;
`;