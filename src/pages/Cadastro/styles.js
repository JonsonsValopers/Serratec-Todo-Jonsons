import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image` 
    margin-top: 30px;
    width: 300px;
    height: 300px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #3a3a3a;
    
`;

export const Input = styled.TextInput`
    width: 300px;
    height: 40px;
    background-color: #fff;
    color: #3a3a3a;
    border-radius: 5px;

`;

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    background-color: #3a5b3a;
    border-radius: 5px;
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