import { useEffect, useState } from "react";
import Header from "./../../components/Header/Header"
import axios from 'axios';

import "../../static/home/text.css"

export default function Home() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect para buscar as tarefas quando o componente for montado
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/task') // URL do backend Spring Boot
      .then((response) => {
        console.log(response.data)
        setTasks(response.data); // Atualiza o estado com os dados das tarefas
        setLoading(false); // Define o loading como false quando as tarefas foram carregadas
      })
      .catch((error) => {
        setError('Erro ao carregar as tarefas');
        setLoading(false);
      });
  }, []); // O array vazio [] significa que o efeito será executado uma vez quando o componente for montado

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <h1 style={{ color: "black" }}>Lista de Tarefas</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p className="text-task">{task.description}</p>
              <p className="text-task">Status: {task.status}</p>
              <p className="text-task">Criado em: {new Date(task.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}
