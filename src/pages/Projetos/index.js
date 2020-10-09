import React, { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native';

// import ProjetosDetalhes from '../ProjetosDetalhes';
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

import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import Modal_ from '../../components/Modal';

import api from '../../services/api';


const Projetos = () => {
    const navigation = useNavigation();
   

    const [ projects, setProjects ] = useState([]);
    const [ newProjects, setNewProjects ] = useState("");
    const [ errorMessage, setErroMessage ] = useState("");
    const [visivel, setVisivel ] = useState(false);

    const loadProjects = useCallback(
        async () => {
            const response = await api.get(`/projetos`);
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
                const response = await api.post(`/projetos`, params)
                console.log("Adcionando projeto",response)
                loadProjects();
                setNewProjects("");

            } catch (error) {
                console.log("Error na parte de criar um novo projeto", error);

                setErroMessage("erro ao criar um novo projeto");
            }
        },[loadProjects, newProjects],   
    )


    const handleProjects = useCallback(
        async (project) => {
            const params = {
                ...project,
                descricao: newProjects
            }

            const response = await api.put(`projetos/${project.id}`, params);

            console.log("As Tarefas foram concluidas",response);

            loadProjects();
        },[loadProjects],
    );

    const removeProjects = useCallback (
        async (project) => {
            const response = await api.delete(`projetos/${project.id}`);

            console.log("Eu exclui o projeto familia!",response);

            loadProjects();
        },[loadProjects],
    )
    
    
    return (

        <Container>
           
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

                { projects.map(project => (
                    <Project key={project.id}>
                        <ProjectText
                        onPress={() => navigation.navigate(ProjetosDetalhes)}>{/* Gaby aqui e que vai entrar o modale*/}
                            {project.descricao}
                        </ProjectText> 

                        <ProjectAction>
                           <AntDesign 
                           name="edit" 
                           size={22} 
                           color="#69b6ff"
                           onPress={()=> setVisivel(true)}
                           />
                           <MaterialCommunityIcons 
                           name="delete-outline"
                           color="#69b6ff"
                           size={22}
                           onPress={()=> removeProjects(project)}
                           />
                        </ProjectAction>
                    </Project>
                ))}
                
            </ContainerProjeto>

            <Modal_ visivel = {visivel} setVisivel= {setVisivel}/>

        </Container>

    )
}
export default Projetos;