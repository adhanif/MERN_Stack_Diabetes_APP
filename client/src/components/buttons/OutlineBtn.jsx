import React from 'react';

function OutlineBtn({ text }) {
  return (
    <button
      className='bg-skin-button-outline 
    text-skin-base border-skin-border-outline 
    text-2xl font-bold my-2 py-3 px-10 border-2 
    rounded-full mx-6 hover:text-skin-outline-hover hover:bg-skin-button-outline-hover duration-500'
    >
      {text}
    </button>
  );
}

export default OutlineBtn;
