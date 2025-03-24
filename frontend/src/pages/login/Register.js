import { useNavigate } from "react-router-dom";

import Header from "./../../components/Header/Header";
import Card from "./../../components/Card/Card";

/* Static */
import "./../../static/login/login.css";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.text();
      if (response.ok) {
        setMessage(data); // Exibe a mensagem de sucesso
        setError(''); // Limpa o erro
      } else {
        setError(data); // Exibe a mensagem de erro
        setMessage(''); // Limpa a mensagem de sucesso
      }
    } catch (error) {
      setError('Erro ao conectar ao servidor');
      setMessage('');
    }
  };

  return (
    <div>
    <Header />
    <main className="main-login">
      <Card className="card">
      
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input type="password" placeholder="Repetir Senha"/>
          <button type="submit">Cadastrar</button>
        </form>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

      
      </Card>
    </main>
    </div>
  )
}
