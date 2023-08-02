import React from 'react';
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

function ProfileEvent({ event }) {
  return (
    <NavLink to={`/eventDetail/${event._id}`}>
      <div className='flex text-lg w-full justify-between group hover:bg-gray-100'>
        <div className='w-[40%]'>{event.title}</div>
        {/* <div className='w-1/4 flex flex-col'> */}
        <div className='flex gap-1 w-[40%] justify-center'>
          <CalendarDaysIcon className='h-6 w-5 ' />
          <div>{event.eventDate.split('T')[0]}</div>
        </div>
        {/* <div className='flex gap-1'>
          <ClockIcon className='h-6 w-5' />
          <div>{event.time}</div>
        </div>
      </div> */}
        {/* <div className='flex gap-1'>
        <MapPinIcon className='h-6 w-5 ' />
        <p>{event.address}</p>
      </div> */}
        {/* <div className='flex w-4/12 justify-end '>
        <TrashIcon className='hidden  hover:text-red-700 w-6 ' />
      </div> */}
      </div>
    </NavLink>
  );
}

export default ProfileEvent;
