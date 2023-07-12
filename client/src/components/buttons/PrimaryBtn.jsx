import React from 'react';

function PrimaryBtn() {
  return (
    <button className='bg-skin-button-primary text-skin-primary text-2xl font-bold my-2 py-3 px-10 rounded-full hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-600 duration-[400ms,700ms] transition-[color,box-shadow]'>
      Primary
    </button>
  );
}

export default PrimaryBtn;
