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
    width: 150px;
    height: 50px;
    background-color: #d3d3d3;
    padding: 0 20px;
    border-radius: 5px;
    color: #ffff;
    font-size: 18px;
`;
export const Button = styled.TouchableOpacity`
    width: 70px;
    height: 50px;
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
    background-color: rgba(105,182,255, .9);
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px 20px;
    justify-content: space-between;
    flex-direction: row;
   
`;
export const ProjectText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;

`;
export const ProjectAction = styled.View`
     flex-direction: row;
     
`;

export const ErroMessage = styled.Text``;
export const TarefaText = styled.Text`
  
    background-color: rgba(19, 20, 25, .58);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    text-transform: uppercase;
    color: white;
    margin: auto;
    margin-bottom: -20px;
    font-size: 19px;
    padding: 12px;
    padding-top: 80px;
  
`;

export const TouchableHighlight = styled.TouchableHighlight`
    padding: 9px;
    background-color: rgba(105,182,255, .9);
    margin-top: -3.3px;
    color: white;
`;
export const Text = styled.Text`
    color: white;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`;
export const Header = styled.Text`
    color: white;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    margin-top: 29px;
    margin-bottom: -100px;
    padding-bottom: 20px;
    background-color: rgba(105,182,255, .9);
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