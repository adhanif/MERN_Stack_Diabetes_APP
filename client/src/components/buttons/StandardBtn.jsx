import React from 'react';

function StandardBtn({ text, classNames, onClick, onSubmit }) {
  return (
    <button
      className={`
    text-2xl font-bold my-2 py-1 px-8x
    rounded-full mx-6 uppercase ${classNames}`}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

export default StandardBtn;
