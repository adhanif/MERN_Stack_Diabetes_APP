import React from 'react';
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

function ProfileEvent({ event }) {
  return (
    <div className='flex text-lg w-full group'>
      <div className='w-4/12'>{event.title}</div>
      {/* <div className='w-1/4 flex flex-col'> */}
      <div className='flex gap-1 w-4/12 '>
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
      <div className='flex w-4/12 justify-end '>
        <TrashIcon className='hidden group-hover:block hover:text-red-700 w-6 ' />
      </div>
    </div>
  );
}

export default ProfileEvent;
