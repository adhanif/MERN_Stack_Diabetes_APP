import React, { useEffect, useState } from 'react';
import { getNextEvents } from '../../utils/axiosFunctions';

function NextEvents() {
  const [events, setEvents] = useState([]);
  const amountEventsWanted = 2;
  useEffect(() => {
    const eve = getNextEvents(amountEventsWanted);
    console.log(eve);
    setEvents(eve);
  }, []);
  return (
    <div>
      <h4>Next Events</h4>
      {events.length != 0 ? <div>Yes</div> : <div>No</div>}
    </div>
  );
}

export default NextEvents;
