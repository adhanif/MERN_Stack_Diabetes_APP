import React, { useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';
import { getEventsOfUser } from '../utils/axiosFunctions';
import EventCard from './EventCard';

function Profile({ theme }) {
  const { user, isLoading, logout } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      if (user) {
        const e = await getEventsOfUser(user._id);
        setEvents(e);
      }
    };

    getEvents();
  }, [user]);

  return (
    <div className={`${theme} bg-skin-fill`}>
      {!isLoading ? (
        <ul>
          <li>{user._id}</li>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      ) : (
        'nothing'
      )}
      Profile
      {!isLoading && events
        ? events.map((event) => <EventCard key={event._id} event={event} />)
        : 'nothing'}
      <div></div>
    </div>
  );
}

export default Profile;
