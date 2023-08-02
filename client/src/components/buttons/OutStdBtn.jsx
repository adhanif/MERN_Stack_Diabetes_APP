import React from 'react';

function OutStdBtn({ text, classNames, onClick, onSubmit, type }) {
  return (
    <button
      className={`text-xl my-2 tracking-wide py-2 mx-auto
    rounded-3xl px-14 ${classNames}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  );
}

export default OutStdBtn;
