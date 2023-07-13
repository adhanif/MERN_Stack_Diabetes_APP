import React from 'react';
import StandardBtn from './StandardBtn';

function SecondaryBtn({ text }) {
  const classNames =
    'bg-skin-button-secondary text-skin-secondary hover:scale-110 duration-300';

  return <StandardBtn text={text} classNames={classNames} />;
}

export default SecondaryBtn;
