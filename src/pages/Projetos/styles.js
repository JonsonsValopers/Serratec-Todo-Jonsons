import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   padding: 20px;
`;
export const Title = styled.Text`
    font-size: 35px;
    color: #1b87e5;
    text-align: center;
    margin-bottom: 20px;
`;
export const FormAddNewProject = styled.View`
   flex-direction: row;
   margin-top: 30px;
`;
export const Input = styled.TextInput`
    flex: 1;
    width: 100px;
    height: 40px;
    background-color: #d3d3d3;
    padding: 0 20px;
    border-radius: 5px;
`;
export const Button = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: #69b6ff;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;
export const ContainerProjeto = styled.View`
    flex: 1;
    margin-top: 40px;
`;
export const Project = styled.View`
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px 20px;
    justify-content: space-between;
    flex-direction: row;
   
`;
export const ProjectText = styled.Text``;
export const ProjectAction = styled.View`
     flex-direction: row;
`;

export const ErroMessage = styled.Text``;
export const TarefaText = styled.Text``;

export const TouchableHighlight = styled.TouchableHighlight`
    border: 1px solid rgba(0,22,150,.2);
    margin: auto;
    padding: 100px;
    background-color: white;
   
`;

// export const Task = styled.View`
//   background-color: #fff;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   padding: 10px 20px;
//   justify-content: space-between;
//   flex-direction: row;
// `;

// export const TaskText = styled.Text`
//   font-size: 16px;
//   color: #3a3a3a;
// `;

// export const TaskAction = styled.View`
//   flex-direction: row;
// `;

// export const ErroMessage = styled.Text`
//   color: #c53030;
//   font-size: 14px;
//   margin-top: 5px;
// `;