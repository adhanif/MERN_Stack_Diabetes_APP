import React from 'react';

function StandardBtn({ text, classNames, onClick, onSubmit, type }) {
  return (
    <button
      className={`
    text-xl my-2 py-1 mx-auto
    rounded-full px-10 ${classNames}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  );
}

export default StandardBtn;
