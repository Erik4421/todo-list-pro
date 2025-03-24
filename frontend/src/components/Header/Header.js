import { useState } from "react";
import { useLocation } from "react-router-dom";

import Title from "./Title";

import "./../../static/header/header.css";
import "./../../static/header/link.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  // Mapeia os títulos das páginas com base na rota
  const pageTitles = {
    "/": "Home",
    "/config": "Configurações",
    "/login": "Login",
    "/login/register": "Register",
    "/login/registered": "Registered",
  };

  const pageTitle = pageTitles[location.pathname] || "Not Found";

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  
  return (
    <header className='header'>
        <nav>
          <Title page={pageTitle} />

          <div className='mobile-menu' onClick={handleToggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <ul className={`nav-list ${isActive ? "active" : ""}`}>
              <li className={`nav-list-link ${isActive ? "active" : ""}`}><a href="/">Home</a></li>
              <li className={`nav-list-link ${isActive ? "active" : ""}`}><a href="/config">Configurações</a></li>
              <li className={`nav-list-link ${isActive ? "active" : ""}`}><a href="/login">Login</a></li>
          </ul>

        </nav>
    </header>
  )
}
