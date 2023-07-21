import React from 'react';
import Card from './Card';
import { anne, adnan, elvis } from '../data/about';

function AboutUs({ theme }) {
  return (
    <section className={`${theme} fluid bg-skin-fill text-left pt-5`}>
      <h2 className='text-5xl text-center font-extrabold '>About us</h2>
      <p className='px-32 text-xl text-center mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        corrupti assumenda aliquid a ratione, quis cumque. Inventore dolorem
        iusto, ea beatae, eaque minus doloribus maxime sint ab, ipsum minima
        quasi?
      </p>
      <div
        className={`${theme} w-2/3 flex mx-auto flex-wrap bg-skin-fill pb-10`}
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
