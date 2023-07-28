import React, { useState } from 'react';
import EventsMap from '../components/EventsMap';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import SecondaryBtn from './buttons/SecondaryBtn';

export default function EventMapModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={`flex justify-between mb-10`}>
        {/* <button
          onClick={handleModalToggle}
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600  hover:scale-110 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
        >
          Show on map
        </button> */}

        <SecondaryBtn text='Show on map' onClick={handleModalToggle} />
        <button
          onClick={(handleNavigate) => {
            navigate('/events');
          }}
          className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600  hover:scale-110 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
        >
          Create Event
        </button>
      </div>

      {isModalOpen && (
        <div
          id='defaultModal'
          tabIndex='-1'
          aria-hidden='true'
          className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full  h-full bg-gray-800 bg-opacity-75'
        >
          <div
            className='relative bg-white rounded-lg shadow dark:bg-gray-700'
            style={{ width: '80%' }}
          >
            <XMarkIcon
              className='h-8 w-8 cursor-pointer hover:bg-gray-200 hover:text-gray-900'
              onClick={handleModalToggle}
            />

            <EventsMap />
          </div>
        </div>
      )}
    </>
  );
}
