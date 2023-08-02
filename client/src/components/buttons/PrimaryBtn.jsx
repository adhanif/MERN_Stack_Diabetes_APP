import React from 'react';
import StandardBtn from './StandardBtn';
import TestBtn from './TestBtn';

function PrimaryBtn({ text, onClick, onSubmit, type }) {
  const classNames =
    'bg-skin-button-secondary text-skin-base' +
    ' hover:scale-110 hover:bg-skin-button-secondary-hover' +
    ' duration-300 hover:text-white';

  return (
    <TestBtn
      text={text}
      onClick={onClick}
      onSubmit={onSubmit}
      classNames={classNames}
      type={type}
    />
  );
}

export default PrimaryBtn;
