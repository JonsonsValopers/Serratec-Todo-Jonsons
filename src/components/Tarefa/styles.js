import styled from 'styled-components/native';

export const Tarefa = styled.View`
    padding: 20px;
    background-color: #fff;
    display: flex;
`;

export const ContainerTexto = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TituloTarefa = styled.Text`
    font-size: 16px;
    font-weight: 400;
`;

export const NomeProjeto = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;


export const Botoes = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`;

export const TextoBotao = styled.Text`
    
`;

export const BotaoExcluir = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

// export const FormTarefa = styled.View`
    
// `;

// export const Input_ = styled.TextInput`

// `;

// export const BotaoAdicionar = styled.TouchableOpacity`

// `;

// export const BotaoText = styled.Text`

// `;