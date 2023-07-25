import React, { useEffect } from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs';

function Card({ theme, person }) {
  const { name, position, profilePic, banner, email, linkedIn, github } =
    person;
  // console.log(email);

  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative mx-auto m-5 flex h-full w-full max-h-[300px] max-w-[300px] flex-col items-center  bg-clip-border`}
    >
      <div
        className='relative  flex h-32 w-full justify-center rounded-t-xl'
        style={{
          backgroundImage: 'url(' + banner.image + ')',
          backgroundRepeat: banner.repeat,
          backgroundSize: banner.size,
        }}
      >
        {/* //Profile picture (separate div for future positioning) */}
        <div className='absolute -bottom-12 flex h-[95px] w-[95px] items-center justify-center rounded-full border-[4px] border-white'>
          <img className='h-full w-full rounded-full' src={profilePic} alt='' />
        </div>
      </div>

      {/* //General info */}
      <div className='mt-16 flex flex-col items-center'>
        <h4 className='text-skin-base text-xl lg:text-2xl font-bold'>{name}</h4>
        <p className='text-denim italic lg:text-xl'>{position}</p>
      </div>

      <div className='mt-6 mb-3 w-full flex justify-around p-2'>
        <div className='flex flex-col items-center justify-center text-3xl hover:scale-125 duration-300'>
          <a href={`mailto:${email}?subject= Das ist ein Betreff`}>
            <BsFillEnvelopeFill />
          </a>
        </div>
        <div className='flex flex-col items-center justify-center text-3xl text-blue-700 hover:scale-125 duration-300'>
          <a href={`${linkedIn}`}>
            <BsLinkedin />
          </a>
        </div>
        <div className='flex flex-col items-center justify-center text-3xl hover:scale-125 duration-300'>
          <a href={`${github}`}>
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
