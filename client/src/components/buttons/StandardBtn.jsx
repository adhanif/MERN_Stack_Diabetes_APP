import React from 'react';

function StandardBtn({ text, classNames }) {
  return (
    <button
      className={`
    text-2xl font-bold my-2 py-3 px-10
    rounded-full mx-6 ${classNames}`}
    >
      {text}
    </button>
  );
}

export default StandardBtn;
