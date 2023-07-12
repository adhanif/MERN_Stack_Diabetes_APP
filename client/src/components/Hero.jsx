import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import SecondaryBtn from './buttons/SecondaryBtn';

function Hero() {
  return (
    <div className='flex flex-col theme-hero bg-skin-fill'>
      <h1 className='text-9xl text-skin-base'>HERO TypeONE</h1>
      <h2 className='text-6xl text-skin-base'>Make Diabetes Your Buddy</h2>
      <div>
        <PrimaryBtn />
        <SecondaryBtn />
        <OutlineBtn text='Hallo' />
      </div>
    </div>
  );
}

export default Hero;
