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
import AllEvents from './components/AllEvents';
import NewSignUp from './components/NewSignUp';
import Impressum from './components/Impressum';
import ArticlesAll from './components/ArticlesAll';
import ArticleDetail from './components/ArticleDetail';
import Profile from './components/Profile';
import EventDetailCard from './components/EventDetailCard';

function App() {
  return (
    <>
      <Navbar />
      {/* <EventDetailCard theme="theme-pink" /> */}
      <Routes>
        <Route path='/' element={<Hero2 />} />
        <Route path='/articles' element={<ArticlesAll theme='theme-pink' />} />
        <Route path='/events' element={<EventForm theme='theme-pink' />} />
        <Route path='/about' element={<AboutUs theme='theme-pink' />} />
        <Route path='/login' element={<Login theme='theme-pink' />} />
        <Route path='/signUp' element={<NewSignUp theme='theme-pink' />} />
        <Route path='/profile' element={<Profile theme='theme-pink' />} />
        <Route
          path='/article/:id'
          element={<ArticleDetail theme='theme-pink' />}
        />
        <Route path='/impressum' element={<Impressum />} />
        <Route
          path='/eventDetail/:id'
          element={<EventDetailCard theme='theme-pink' />}
        />
      </Routes>

      {/* <AllEvents theme="theme-pink" /> */}
      {/* <AboutUs theme="theme-pink" />
      <ContactUs theme="theme-pink" /> */}

      <Footer />
    </>
  );
}

export default App;
