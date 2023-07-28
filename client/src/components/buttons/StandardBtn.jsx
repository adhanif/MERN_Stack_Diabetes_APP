import React from 'react';

function StandardBtn({ text, classNames, onClick, onSubmit, type }) {
  return (
    <button
      className={`
    text-xl my-2 tracking-wide py-2 mx-auto
    rounded-lg px-14 ${classNames}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  );
}

export default StandardBtn;
