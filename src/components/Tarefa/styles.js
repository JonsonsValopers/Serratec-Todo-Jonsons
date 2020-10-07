import styled from 'styled-components/native';

export const Tarefa = styled.View`
    padding: 20px;
    background-color: #fff;
`;

export const TituloTarefa = styled.Text`
    font-size: 20px;
    font-weight: 400;
`;

export const NomeProjeto = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;


export const Botoes = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`;

export const BotaoExcluir = styled.TouchableOpacity`
    background-color: red;
    width: 40px;
    height: 40px;
`;

export const BotaoTexto = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 400;
`;