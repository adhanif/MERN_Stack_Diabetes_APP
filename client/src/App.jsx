import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Test from './components/Test';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <h1 className='text-4xl font-bold underline '>Hello world!</h1>
      <Navbar />
      <Hero />
      <Test theme='theme-secondary' />
      <Test theme='theme-3' />
      <Test theme='theme-4' />
    </>
  );
}

export default App;
