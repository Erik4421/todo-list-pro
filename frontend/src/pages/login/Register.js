import { useNavigate } from "react-router-dom";

import Header from "./../../components/Header/Header";
import Card from "./../../components/Card/Card";

/* Static */
import "./../../static/login/login.css";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div>
    <Header />
    <main className="main-login">
      <Card className="card">
      
        <form action="">
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
          <input type="password" placeholder="Repetir Senha"/>
          <button type="submit" onClick={() => navigate("/login")}>Cadastrar</button>
        </form>

      
      </Card>
    </main>
    </div>
  )
}
