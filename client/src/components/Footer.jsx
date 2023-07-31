import React from 'react';
import NextEvents from './footerParts/NextEvents';
import Service from './footerParts/Service';
import StayInTouch from './footerParts/StayInTouch';
import Social from './footerParts/Social';
import ReadedArticels from './footerParts/ReadedArticels';

function Footer() {
  return (
    <div className='theme-hero flex shadow-2xl justify-around p-4 flex-wrap text-center'>
      <div className='hidden px-2 sm:w-1/3 lg:w-1/5 lg:block'>
        <StayInTouch />
      </div>
      <div className='px-2 w-2/3 xxs:w-1/2 xs:w-1/4 sm:w-1/4 lg:w-1/5'>
        <Social />
      </div>
      <div className='px-2 w-2/3 xxs:w-1/2 xs:w-1/4 sm:w-1/4 lg:w-1/5'>
        <ReadedArticels />
      </div>
      <div className='px-2 w-2/3 xxs:w-1/2 xs:w-1/4 sm:w-1/4 lg:w-1/5'>
        <NextEvents />
      </div>
      <div className='px-2 w-2/3 xxs:w-1/2 xs:w-1/4 sm:w-1/4 lg:w-1/5'>
        <Service />
      </div>
    </div>
  );
}

export default Footer;
