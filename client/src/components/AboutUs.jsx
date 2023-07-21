import React from 'react';
import Card from './Card';
import { anne, adnan, elvis, paragraph } from '../aboutus/about';

function AboutUs({ theme }) {
  return (
    <section className={`${theme} fluid bg-skin-fill text-left pt-5`}>
      <h2 className='text-7xl text-center font-extrabold my-4'>About us</h2>
      <p className='px-32 lg:px-52 text-xl text-center my-6'>{paragraph}</p>
      <div
        className={`${theme} w-2/3 flex mx-auto flex-wrap bg-skin-fill mt-5 pb-10`}
        S
      >
        <Card theme='theme-4' person={anne} />
        <Card theme='theme-4' person={adnan} />
        <Card theme='theme-4' person={elvis} />
      </div>
    </section>
  );
}

export default AboutUs;
