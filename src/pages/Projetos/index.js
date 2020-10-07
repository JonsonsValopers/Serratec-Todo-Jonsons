import React, { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import
 {
    Container,
    Title,
    FormAddNewProject,
    Input,
    Button,
    ButtonText,
    ErroMessage,
    ContainerProjeto,
    Project,
    ProjectText,
    ProjectAction
} from './styles';

import api from '../../services/api';


const Projetos = () => {
    const [ projects, setProjects ] = useState([]);
    const [ newProjects, setNewProjects ] = useState("");
    const [ errorMessage, setErroMessage ] = useState("");

    const loadProjects = useCallback(
        async () => {
            const response = await api.get('');
            setProjects(response.data);
            console.log(response.data);
        }, [],
    );

    useEffect(()=> {
        loadProjects();
    },[])

    const handleAddProjects = useCallback(
        async () => {
            if(newProjects === "") {
                setErroMessage("Digite o Projeto que queira adicionar !")
                return;
            }

            setErroMessage("");

            const params = {
                descricao: newProjects
            };

            try {
                const response = await api.post(``, params)
                console.log("Adcionando projeto",response)
                loadProjects();
                setNewProjects();

            } catch (error) {
                console.log("Error na parte de criar um novo projeto", error);

                setErroMessage("erro ao criar um novo projeto");
            }
        },[loadProjects, newProjects],   
    )


    const handleProjects = useCallback(
        async (task) => {
            const params = {
                ...task,
                concluido: !task.concluido
            }

            const response = await api.put(`tarefas/${task.id}`, params);

            console.log("As Tarefas foram concluidas");

            loadProjects();
        },[loadProjects],
    );

    const removeProjects = useCallback (
        async (project) => {
            const response = await api.delete(`/${project.id}`);

            console.log("Eu exclui o projeto familia!",response);

            loadProjects();
        },[loadProjects],
    )

    return (
        <Container>
            <Title>Lista de Projetos</Title>

            <FormAddNewProject>
                <Input
                value={newProjects}
                onChangeText={text => setNewProjects(text)}
                placeholder="Digite a nome do novo Projeto"
                />

                <Button onPress={() => handleAddProjects()}>
                <ButtonText>
                    Criar
                </ButtonText>
                </Button>
            </FormAddNewProject>

            {!!errorMessage && (
                <ErroMessage>{errorMessage}</ErroMessage>
            )}

            <ContainerProjeto>
                {/* { projects.map(project => (
                    <Project key={project.id}>
                        <ProjectText>{project.descricao}</ProjectText>

                        <ProjectAction>
                           <MaterialCommunityIcons 
                           name="delete-outline"
                           color="#3a3a3a"
                           size={22}
                           onPress={()=> removeProjects(project)}
                           />
                        </ProjectAction>
                    </Project>
                ))} */}
            </ContainerProjeto>
        </Container>
    )
}
export default Projetos;