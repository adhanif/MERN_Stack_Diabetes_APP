
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Hero from './components/Hero';
import Test from './components/Test';


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

      {/* <h1 className='text-4xl font-bold underline '>Hello world!</h1>
      <Hero />
      <Test theme='theme-secondary' />
      <Test theme='theme-3' />
      <Test theme='theme-4' /> */}

    </>
  );
}

export default App;
