import { Route, Routes } from "react-router-dom";
import './App.css';
import Hero2 from './components/Hero2';
import Test from './components/Test';
import Navbar from './components/navbar';
//import Example from './components/Example';
//import Simple from './components/Simple';

function App() {
  return (
    <>
      {/* <h1 className='text-4xl font-bold underline '>Hello world!</h1> */}
      <Navbar />
      <Hero2 />
      {/* <Example /> */}
      {/* <Simple /> */}
      {/* <Test theme='theme-secondary' />
      <Test theme='theme-3' />
      <Test theme='theme-4' /> */}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/articles" element={<h1>Articles</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/login" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
