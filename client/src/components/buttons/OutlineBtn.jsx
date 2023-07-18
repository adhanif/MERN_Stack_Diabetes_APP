import React from 'react';
import StandardBtn from './StandardBtn';

function OutlineBtn({ text, onClick, onSubmit }) {
  const classNames =
    'bg-skin-button-outline text-skin-base border-skin-border-outline border-2 hover:text-skin-outline-hover hover:bg-skin-button-outline-hover duration-500';

  return (
    <StandardBtn
      text={text}
      onClick={onClick}
      classNames={classNames}
      onSubmit={onSubmit}
    />
  );
}

export default OutlineBtn;
