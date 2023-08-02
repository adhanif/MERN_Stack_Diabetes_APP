import React from 'react';
import StandardBtn from './StandardBtn';

function TestBtn({ text, classNames, onClick, onSubmit, type }) {
  return (
    <button
      className={`text-xl my-2 tracking-wide py-2 mx-auto
    rounded-lg w-[80%] ${classNames}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  );
}

export default TestBtn;
