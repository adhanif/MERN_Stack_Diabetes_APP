import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';

function Social() {
  return (
    <div className='flex flex-col'>
      <h4 className='text-lg font-bold mb-2'>Follow us</h4>
      <div className='flex flex-col text-3xl h-full justify-around'>
        <div className='flex justify-center gap-10 mb-5'>
          <div className='hover:scale-125 duration-300'>
            <a href=''>
              <BsFacebook />
            </a>
          </div>
          <div className='hover:scale-125 duration-300'>
            <a href=''>
              <BsTwitter />
            </a>
          </div>
        </div>
        <div className='flex justify-center gap-10 mb-5'>
          <div className='hover:scale-125 duration-300'>
            <a href=''>
              <BsInstagram />
            </a>
          </div>
          <div className='hover:scale-125 duration-300'>
            <a href=''>
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
