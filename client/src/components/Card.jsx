import React from 'react';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs';

function Card({ theme }) {
  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative mx-auto m-5 flex h-full w-full max-w-[350px] flex-col items-center  bg-clip-border`}
    >
      <div className='banner-anne-img relative  flex h-32 w-full justify-center rounded-xl'>
        {/* //Profile picture (separate div for future positioning) */}
        <div className='absolute -bottom-12 flex h-[95px] w-[95px] items-center justify-center rounded-full border-[4px] border-white'>
          <img
            className='h-full w-full rounded-full'
            src='https://media.licdn.com/dms/image/D4E03AQEzDBqwufCEXA/profile-displayphoto-shrink_800_800/0/1687971813661?e=1695254400&v=beta&t=bE9bLuqsH_eOXpTVOW6NBRbqUR05JfPHgERvYUqJFBE'
            alt=''
          />
        </div>
      </div>

      {/* //General info */}
      <div className='mt-16 flex flex-col items-center'>
        <h4 className='text-skin-base text-sm md:text-base lg:text-2xl font-bold'>
          Anne Pohlmann
        </h4>
        <p className='text-skin-base lg:text-xl'>CEO</p>
      </div>

      <div className='mt-6 mb-3 w-full flex justify-around p-2'>
        <div class='flex flex-col items-center justify-center text-3xl'>
          <BsFillEnvelopeFill />
        </div>
        <div class='flex flex-col items-center justify-center text-3xl text-blue-700'>
          <BsLinkedin />
        </div>
        <div class='flex flex-col items-center justify-center text-3xl'>
          <BsGithub />
        </div>
      </div>
    </div>
  );
}

export default Card;
