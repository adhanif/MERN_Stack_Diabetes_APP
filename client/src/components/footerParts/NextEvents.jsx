import React, { useEffect, useState } from 'react';
import { getNextEvents } from '../../utils/axiosFunctions';

function NextEvents() {
  const [events, setEvents] = useState([]);
  const amountEventsWanted = 2;

  useEffect(() => {
    const getEvents = async () => {
      const nextEvents = await getNextEvents(amountEventsWanted);
      console.log(nextEvents.data);
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
            <a key={event._id} href='' className='hover:text-skin-base mb-2'>
              <div className='flex justify-center text-lg'>
                {/* <div className='w-1/3'>
                  <img src={event.image} alt='' />{' '}
                </div> */}
                <div className='w-1/2 text-right pr-1 my-auto'>
                  {event.title}
                </div>

                <div className='w-1/2 text-left pl-1 my-auto'>
                  {event.eventDate.split('T')[0]}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className='text-center'>
          Unforunatly thera are no events Upcoming
        </div>
      )}
    </div>
  );
}

export default NextEvents;
