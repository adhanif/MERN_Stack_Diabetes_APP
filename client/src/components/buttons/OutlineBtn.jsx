import React from 'react';
import StandardBtn from './StandardBtn';

function OutlineBtn({ text, onClick, onSubmit }) {
  const classNames =
    'bg-skin-button-outline text-skin-base border-skin-border-outline border-2 ';
  const hoverClasses =
    'hover:text-skin-outline-hover hover:border-skin-border-outline-hover hover:bg-skin-button-outline-hover duration-500';
  return (
    <StandardBtn
      text={text}
      onClick={onClick}
      classNames={classNames + hoverClasses}
      onSubmit={onSubmit}
    />
  );
}

export default OutlineBtn;
