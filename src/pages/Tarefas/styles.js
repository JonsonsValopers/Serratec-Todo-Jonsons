import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #3a3a3a;
`;

export const ContainerConta = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 10%;
`; 

export const TextoConta = styled.Text`
    color: #3a3a3a;
    font-size: 20px;
    font-weight: 400;

`;

export const FormTarefa = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Input_ = styled.TextInput`
    width: 70%;
    height: 40px;
    background-color: #fff;
    padding: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
    flex: 1;
    background-color: #69b6ff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    justify-content: center;
    align-items: center;
`;

export const InfoTexto = styled.Text`
    color: #3a3a3a;
    font-size: 20px;
    font-weight: 400;
`;

export const BotaoText = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
`;
