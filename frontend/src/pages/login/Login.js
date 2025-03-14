import { useNavigate } from "react-router-dom";

import Header from "./../../components/Header/Header";
import Card from "./../../components/Card/Card";

/* Static */
import "./../../static/login/login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
    <Header />
    <main className="main-login">
      <Card className="card">
      
        <form action="">
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Login</button>
        </form>

        <button type="submit" className="button-register" onClick={() => navigate("/login/register")}>Criar Conta</button>
      
      </Card>
    </main>
    </div>
  )
}
