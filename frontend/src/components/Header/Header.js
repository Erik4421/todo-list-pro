
import React, { useState } from "react";
import "./../../static/header/header.css";
import "./../../static/header/title.css";
import "./../../static/header/link.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    console.log("click");
    setIsActive(!isActive);
  };

  
  return (
    <header className='header'>
        <nav>
          <h1>TodoList</h1>

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
