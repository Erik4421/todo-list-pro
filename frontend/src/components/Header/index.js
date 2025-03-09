import React from 'react'
import "./../../static/header/header.css";
import "./../../static/header/title.css";
import "./../../static/header/link.css";

export default function index() {
  return (
    <header>
        <h1>TodoList</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Configurações</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}
