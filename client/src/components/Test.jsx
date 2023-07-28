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
    </div>
  );
}

export default Test;
hjdj