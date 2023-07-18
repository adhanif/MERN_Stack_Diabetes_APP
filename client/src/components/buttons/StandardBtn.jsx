import React from 'react';

function StandardBtn({ text, classNames }) {
  return (
    <button
      className={`
    text-2xl font-bold my-2 py-2 px-10
    rounded-full mx-6 uppercase ${classNames}`}
    >
      {text}
    </button>
  );
}

export default StandardBtn;
