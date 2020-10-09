import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding:20px;
  background-color: #B4B9BD;
  justify-content: center;
  align-items: center;
`;

export const InputLogin = styled.TextInput`
  width: 250px;
  height: 40px;
  margin-top: 15px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  margin-top: 15px;
  background-color: #4169e1;
  border-radius: 5px;

`;
export const ButtonSignup = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  margin-top: 10px;
  background-color: #03bb85;
  border-radius: 5px;

`;


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Imagem = styled.Image`
    width: 300px;
    height: 200px;
`;

export const TextErro = styled.Text`
    font-size: 10px;
    color: red;
`;