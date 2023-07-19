import Hero2 from "./components/Hero2";
import Navbar from "./components/navbar";
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
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero2 />} />
        <Route path="/articles" element={<h1>Articles</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
