import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
