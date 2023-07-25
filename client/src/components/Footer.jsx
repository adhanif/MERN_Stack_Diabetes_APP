import React from 'react';
import NextEvents from './footerParts/NextEvents';
import Service from './footerParts/Service';

function Footer() {
  return (
    <div className='flex justify-between px-16 py-4'>
      <NextEvents />
      <Service />
    </div>
  );
}

export default Footer;
