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
    flex: 2;
    padding: 10px;
    margin-top: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    width: 150px;
    height: 50px;
    background-color: #d3d3d3;
    color: rgb(74, 71, 71);
    font-size: 18px;
    font-weight: bold;
`;

export const BotaoAdicionar = styled.TouchableOpacity`
    flex: 1;
    background-color: #69b6ff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: 20px;

    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
    align-items: center;
    justify-content: center;
    
`;

export const ContainerProjetos = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TextoProjeto = styled.Text`
    font-size: 20px;
    font-weight: bold;
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
