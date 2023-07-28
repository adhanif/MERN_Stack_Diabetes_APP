import React from 'react';
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
export default function EventCard({
  image,
  title,
  info,
  date,
  categories,
  address,
}) {
  const eventDate = new Date(date).toLocaleDateString();

  // const date = eventDate.toLocaleDateString();
  return (
    <>
      <div className=' flex  bg-white flex-col md:flex-row border rounded-md overflow-hidden shadow-lg mb-5 lg:w-4/5'>
        <div className=' md:w-2/5 px-6 py-6'>
          <img
            className='w-full md:w-screen  h-56  rounded-lg'
            src={image}
            alt={title}
          />
        </div>

        <div className='px-6 py-4 md:pl-0  md:w-3/5'>
          <div className='font-bold text-2xl mb-2'>{title}</div>
          <p className='text-black text-base mb-2'>{info}</p>
          <div className='flex flex-col md:flex-row md:space-x-20 '>
            <div className='flex items-center space-x-2 mb-2 md:mb-0'>
              <CalendarDaysIcon className='h-10 w-6 ' />
              <p>{eventDate}</p>
            </div>
            <div className='flex items-center space-x-1'>
              <MapPinIcon className='h-6 w-5 ' />
              <p>{address}</p>
            </div>
          </div>

          <div className=' pt-20 '>
            {categories.map((category, index) => {
              return (
                <span
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black cursor-pointer hover:scale-110 mr-2 mb-2'
                  key={index}
                >
                  #{category}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
