import React from 'react';
import StandardBtn from './StandardBtn';

function SecondaryBtn({ text, onClick, onSubmit, type }) {
  const classNames =
    'bg-skin-button-secondary text-skin-inverted' +
    ' hover:scale-110 hover:bg-skin-button-secondary-hover' +
    ' duration-300';

  return (
    <StandardBtn
      text={text}
      onClick={onClick}
      onSubmit={onSubmit}
      classNames={classNames}
      type={type}
    />
  );
}

export default SecondaryBtn;
