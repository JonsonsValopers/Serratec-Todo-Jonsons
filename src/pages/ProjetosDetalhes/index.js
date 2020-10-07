import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Tarefas from '../Tarefas';

import{
  Container,
  Tarefas,
  Tarefa,
  TarefaDescricao
} from './styles';

const ProjetosDatalhes = () => {
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
      pegarTarefasId();
    },[pegarTarefas, pegarTarefasId]);

    return(
      <Container>
        <Tarefas>
          {tarefas.map(task => (
            <Tarefa key={tarefa.id}>
              <TarefaDescricao>{tarefa.descricao}</TarefaDescricao>
            </Tarefa>
          ))
          }
        </Tarefas>
      </Container>
    )
}

export default ProjetosDatalhes;