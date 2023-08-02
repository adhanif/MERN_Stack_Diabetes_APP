import React from 'react';
import { NavLink } from 'react-router-dom';
import Impressum from '../Impressum';

function Service() {
  return (
    <div>
      <h4 className='text-lg font-bold mb-2'>Client Service</h4>
      <ul>
        <li className=''>
          <NavLink to='/impressum' className='hover:text-skin-base'>
            Impressum
          </NavLink>
        </li>
        <li>
          <a className='hover:text-skin-base' href='http://'>
            AGB
          </a>
        </li>
        <li>
          <a className='hover:text-skin-base' href='http://'>
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Service;
