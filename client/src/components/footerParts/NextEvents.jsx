import React, { useEffect, useState } from 'react';
import { getNextEvents } from '../../utils/axiosFunctions';

function NextEvents() {
  const [events, setEvents] = useState(['hallo', 'du']);
  const amountEventsWanted = 2;

  useEffect(() => {
    const getEvents = async () => {
      const nextEvents = await getNextEvents(amountEventsWanted);
      console.log(nextEvents);
      setEvents(nextEvents.data);
    };

    //getEvents();
  }, []);
  return (
    <div>
      <h4 className='text-lg font-bold mb-2'>Next Events</h4>
      {events ? (
        <div>
          {events.map((event) => (
            <div>{event}</div>
          ))}
        </div>
      ) : (
        <div>No</div>
      )}
    </div>
  );
}

export default NextEvents;
