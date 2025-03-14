import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Config from "./pages/config/Config";
import Login from "./pages/login/Login";

import "./static/body.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/config" element={<Config/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<h1 style={{ color: "black", fontSize: "60px"}}>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
