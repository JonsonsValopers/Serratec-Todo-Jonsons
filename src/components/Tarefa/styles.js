import styled from 'styled-components/native';

export const Tarefa = styled.View`
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 5px;
`;

export const ContainerTexto = styled.View`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const TituloTarefa = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const NomeProjeto = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;


export const Botoes = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    

`;

export const InfoTexto = styled.Text`
    color: #3a3a3a;
    font-size: 15px;
    font-weight: 400;
`;

export const ContainerUsuario = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BotaoExcluir = styled.TouchableOpacity`
    height: 40px;
    margin-left: 15px;
`;

