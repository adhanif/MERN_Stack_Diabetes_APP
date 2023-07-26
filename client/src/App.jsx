import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Hero from './components/Hero';
import Test from './components/Test';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import EventsMap from './components/EventsMap';
import Card from './components/Card';
import AboutUs from './components/AboutUs';
import EventForm from './components/EventForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero2 />} />
        <Route path='/articles' element={<h1>Articles</h1>} />

        <Route path='/events' element={<EventForm theme='theme-pink' />} />

        <Route path='/about' element={<AboutUs theme='theme-secondary' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <AboutUs theme='theme-pink' />
      <ContactUs theme='theme-pink' />

      <Footer />
      {/* <EventsMap /> */}
    </>
  );
}

export default App;
