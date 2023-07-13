import React from 'react';
import StandardBtn from './StandardBtn';

function OutlineBtn({ text }) {
  const classNames =
    'bg-skin-button-outline text-skin-base border-skin-border-outline border-2 hover:text-skin-outline-hover hover:bg-skin-button-outline-hover duration-500';

  return <StandardBtn text={text} classNames={classNames} />;
}

export default OutlineBtn;
