import React, { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

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
    ProjectAction,
    TarefaText,
    TouchableHighlight,
    Text,
    Header,
    TextTarefa,
    ViewMap,
    TarefaTextAtualizar ,
    ViewAtualizar,
    TouchableHighlightAtualizar,
    TextAtualizar,
    HeaderAtualizar,
    TextAtualizarProjeto  
} from './styles';

import {
    View, 
    Modal,
    ScrollView,
    StyleSheet
} from 'react-native';

import api from '../../services/api';


const Projetos = () => {
    const navigation = useNavigation();
   
    const [ projects, setProjects ] = useState([]);
    const [ projetoId, setProjetoId ] = useState('');
    const [ newProjects, setNewProjects ] = useState("");
    // const [ novoProjeto, setNovoProjeto ] = useState("");
    const [projetoAtualizado, setProjetoAtualizado] = useState("");
    const [ errorMessage, setErroMessage ] = useState("");
    const [ visivel, setVisivel ] = useState(false);
    const [ visivelProjeto, setVisivelProjeto ] = useState(false);
    const [ tarefas, setTarefas ] = useState([]);

    const loadProjects = useCallback(
        async () => {
            const response = await api.get(`/projetos`);
            setProjects(response.data);
            console.log(response.data);
        }, [],
    );
      
    const mostraProjetoID = useCallback(
        async (idProjeto) => {
            try {
                const resposta = await api.get(`/projetos/${idProjeto}`);
                setProjetoId(resposta.data);
                setVisivel(true);
                console.log("resposta", resposta);
                tarefas_(idProjeto);
                
            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", error);
                setErroMessage("ERRO teste");
            }    
        },[]
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
        async (id, descricao) => {
            
            try {
                console.log(projetoAtualizado);
                const params = {
                    id: id,
                    descricao: descricao
                }
            const response = await api.put(`projetos/${id}`, params);

            console.log("Atualizad",response);
            console.log("Novo projeto ", descricao);
            console.log("Id",id)
           
            loadProjects();
           } catch (error) {
               console.log("Safe familia", error);
           } finally{
            setProjetoAtualizado("");
           }
        },[],
    );

    const removeProjects = useCallback (
        async (project) => {
            const response = await api.delete(`projetos/${project.id}`);

            console.log("Eu exclui o projeto familia!",response);

            loadProjects();
        },[loadProjects],
    )

    const tarefas_ = useCallback (
        async (projeto) => {
        
            try {
                const resposta = await api.get(`projetos/${projeto}?_embed=tarefas`);
                console.log("Projeto / tarefas",resposta.data.tarefas);
                setTarefas(resposta.data.tarefas);
                console.log("terfas aqui menosada",tarefas)
            } catch (error) {
                console.log(error);
            } 
        }, [],
    )
    
    
    return (
        
        <Container>
        <ScrollView>   
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
                        onPress={() => {
                            mostraProjetoID(project.id);          
                            }}>
                            {project.descricao}
                            
                        </ProjectText> 

                        <ProjectAction>
                           <FontAwesome5 
                           name="edit" 
                           size={27} 
                           color="#fff"
                           onPress={()=> {
                               setVisivelProjeto(true);
                               setProjetoId(project.id); 
                            }}
                           />
                           <MaterialCommunityIcons 
                           name="delete-outline"
                           color="#fff"
                           size={29}
                           onPress={()=> removeProjects(project)}
                           />
                        </ProjectAction>
                    </Project>

                    
                ))}
           
            </ContainerProjeto>
{/* //----------------------------------------------------------------------------------------------------- */}
            <Modal
            coverScreen={true} 
                animationType="slide"
                transparent={true}
                visible={visivel}
                onRequestClose={() => {
                setVisivel(false)
                }}
            >     
            <View key={projetoId.id}>
            <Header>{projetoId.descricao}</Header> 
            <TarefaText> 
                
                <ScrollView>
            <ViewMap>
            {tarefas.map(tarefa => (
                   <TextTarefa>{tarefa.descricao}</TextTarefa>   
                   
                   ))}
            </ViewMap>    
                   </ScrollView>
            </TarefaText>
            </View>
            <TouchableHighlight
                onPress={() => {
                setVisivel(!visivel);  
            }}>
                <Text> Fechar </Text>
                </TouchableHighlight>
               
            </Modal>
{/* ------------------------------------Meu ta aqui em baixo gaby----------------------------------------------------- */}
            <Modal
                coverScreen={true} 
                    animationType="slide"
                    transparent={true}
                    visible={visivelProjeto}
                    onRequestClose={() => {
                    setVisivel(false)
                    }}
                >     
                <ViewAtualizar>
                
                <HeaderAtualizar>Atualizando Projeto</HeaderAtualizar>
                <TarefaTextAtualizar>   
                <ViewMap>
                    <FormAddNewProject>
                        <Input
                        value={projetoAtualizado}
                        onChangeText={text => setProjetoAtualizado(text)}
                        placeholder="Atualizar Projeto"
                        />
                        <Button onPress={() => handleProjects(projetoId, projetoAtualizado)}>
                        <ButtonText>
                            Atualizar
                        </ButtonText>
                        </Button>
                    </FormAddNewProject>
                </ViewMap>

                <TouchableHighlightAtualizar
                        onPress={() => {
                        setVisivelProjeto(!visivelProjeto);  
                    }}>
                        <TextAtualizarProjeto> Fechar </TextAtualizarProjeto>
                        </TouchableHighlightAtualizar>    
                </TarefaTextAtualizar>

                </ViewAtualizar>
               
            </Modal>
           
        </ScrollView>        
        </Container>

    )
}

export default Projetos;