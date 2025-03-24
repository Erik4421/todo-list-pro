import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";

import "./../../static/home/text.css"

export default function Registered() {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/user')
            .then((response) => {
                console.log(response.data)
                setUsers(response.data);
            })
    }, [])

    return (
        <div>
            <Header/>
            <main>
                <h1 style={{ color: "black" }}>Lista de Usuarios</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p className="text-user"><b>Email:</b> {user.email}</p>
                            <p className="text-user"><b>Criado em:</b> {new Date(user.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
