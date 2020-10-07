import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Tarefas from '../Tarefas';

import BotaoConcluido from '../../components/BotaoConcluido'

import{
  Container,
  Tarefas_,
  Tarefa,
  TarefaText
} from './styles';

const ProjetosDetalhes = () => {
  const [tarefas, setTarefas] = useState([]);

    
    const pegarTarefas= useCallback(
        async () => {
          const response = await api.get(`tarefas`);
          setTarefas(response.data);
        },[],
      );

    const pegarTarefasId= useCallback(
      async (tarefa) => {
        const response = await api.get(`tarefas/${tarefa.id}`);
        setTarefas(response.data);
      },[],
    );  

    const removerTarefas = useCallback(
      async () => {
        await api.delete(`tarefas`);
      }
    )

    useEffect(() => {
      pegarTarefas();
      // pegarTarefasId();
    },[pegarTarefas]);

    return(
      <Container>
        <Tarefas_>
          {tarefas.map(tarefa => (
            <Tarefa key={tarefa.id}>
              <TarefaText>{tarefa.descricao}</TarefaText>
            </Tarefa>
          ))
          }
        </Tarefas_>
      </Container>
    )
}

export default ProjetosDetalhes;