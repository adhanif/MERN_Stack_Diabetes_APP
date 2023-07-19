import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Test from "./components/Test";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <nav className="container flex flex-row font-bold p-5  mx-auto space-x-20">
        <NavLink to="/">Home</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="signUp">Sign up</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      {/* <h1 className="text-4xl font-bold underline ">Hello world!</h1>
      <Hero />
      <Test theme="theme-secondary" />
      <Test theme="theme-3" />
      <Test theme="theme-4" /> */}

      {/* <ContactUs theme="theme-secondary" /> */}
    </>
  );
}

export default App;
