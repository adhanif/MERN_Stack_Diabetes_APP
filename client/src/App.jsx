import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Test from './components/Test';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import EventForm from './components/EventForm';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/articles' element={<h1>Articles</h1>} />
        <Route path='/events' element={<h1>Events</h1>} />
        <Route path='/about' element={<h1>About Us</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <ContactUs theme='theme-4' />
      <EventForm />
    </>
  );
}

export default App;
