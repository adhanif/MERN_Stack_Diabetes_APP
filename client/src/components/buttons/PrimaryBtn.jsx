import React from 'react';
import StandardBtn from './StandardBtn';

function PrimaryBtn({ text, onClick, onSubmit }) {
  const classNames =
    'bg-skin-button-primary text-skin-primary hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]';
  return (
    <StandardBtn
      text={text}
      onClick={onClick}
      onSubmit={onSubmit}
      classNames={classNames}
    />
  );
}

export default PrimaryBtn;
