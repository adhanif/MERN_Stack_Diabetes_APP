import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
//import Login from
import Test from './Test';
import TypeOneLogo from '../images/TypeOne_white_noBG.png';
import SecondaryBtn from './buttons/SecondaryBtn';

export default function Navbar() {
  return (
    <div>
      <nav className="relative container mx-auto bg-blue-600 p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={TypeOneLogo} alt="logo" className="w-36"></img>
          </div>
          <div className='hidden md:flex space-x-6'>
            <NavLink to="/" className={'hover:text-blue-900'}>Home</NavLink>
            <NavLink to="/articles" className={'hover:text-blue-900'}>Articles</NavLink>
            <NavLink to="/events" className={'hover:text-blue-900'}>Events</NavLink>
            <NavLink to="/about" className={'hover:text-blue-900'}>About Us</NavLink>
          </div>
          <div>
            <NavLink to="login" className={'hidden p-3 px-6 pt-2 text-white bg-red-600 rounded-full baseline hover:bg-red-300 md:block'}>Login</NavLink>
          </div>
          
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/articles" element={<h1>Articles</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/login" element={<Test />} />
      </Routes>
    </div>
  );
}
