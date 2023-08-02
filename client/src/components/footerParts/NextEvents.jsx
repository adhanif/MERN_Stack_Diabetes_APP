import React, { useEffect, useState } from 'react';
import { getNextEvents } from '../../utils/axiosFunctions';
import { NavLink } from 'react-router-dom';

function NextEvents() {
  const [events, setEvents] = useState([]);
  const amountEventsWanted = 2;

  useEffect(() => {
    const getEvents = async () => {
      const nextEvents = await getNextEvents(amountEventsWanted);
      //console.log(nextEvents.data);
      setEvents(nextEvents.data);
    };

    getEvents();
  }, []);
  return (
    <div className='flex flex-col justify-center'>
      <h4 className='text-lg font-bold mb-2'>Next Events</h4>
      {events ? (
        <div className='flex flex-col'>
          {events.map((event) => (
            <NavLink
              to={`/eventDetail/${event._id}`}
              key={event._id}
              className='hover:text-skin-base mb-2'
            >
              <div className='flex text-lg w-full justify-between'>
                <div className=''>
                  <img className='w-[50px]' src={event.image} alt='' />{' '}
                </div>
                <div className='text-center w-3/6 '>{event.title}</div>

                <div className='text-left'>{event.eventDate.split('T')[0]}</div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className='text-center'>
          Unforunatly there are no events Upcoming
        </div>
      )}
    </div>
  );
}

export default NextEvents;
