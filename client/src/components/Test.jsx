import React from 'react';
import PrimaryBtn from './buttons/PrimaryBtn';
import SecondaryBtn from './buttons/SecondaryBtn';
import OutlineBtn from './buttons/OutlineBtn';
import TestBtn from './buttons/TestBtn';

function Test({ theme }) {
  return (
    <div className={`${theme} bg-skin-fill h-52`}>
      <h2 className='text-6xl text-skin-base'>Make Diabetes Your Buddy</h2>
      <PrimaryBtn text='Primary' />
      <SecondaryBtn text='Secondary' />
      <OutlineBtn text='Hallo' />
      <div className='flex flex-col theme-hero bg-skin-fill'>
      <h1 className='xl:text-9xl sm:text-2xl text-skin-base'>HERO TypeONE</h1>
      <h2 className='text-6xl text-skin-base'>Make Diabetes Your Buddy</h2>
      <div>
        <PrimaryBtn text='Hallo' />
        <SecondaryBtn text='Secondary' />
        <OutlineBtn text='Hallo' />
      </div>
    </div>
    </div>
  );
}

export default Test;
