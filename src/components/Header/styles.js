import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
    height: 10%;
    justify-content: space-between;
    align-items: center;
`;

export const TituloTexto = styled.Text`
    font-size: 27px;
    font-weight: 700;
    color: #3a3a3a;
`;

export const BotaoSair = styled.TouchableOpacity`
    background-color: tomato;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100px;
    border-radius: 5px;
`;

export const BotaoSairTexto = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;