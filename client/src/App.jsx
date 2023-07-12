import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Test from './components/Test';

function App() {
  return (
    <>
      <h1 className='text-4xl font-bold underline '>Hello world!</h1>
      <Hero />
      <Test theme='theme-secondary' />
      <Test theme='theme-3rd' />
    </>
  );
}

export default App;
