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
      const e = await getEventsOfUser(user.id);
      setEvents(e);
    };

    getEvents();
  }, []);

  return (
    <div className={`${theme} bg-skin-fill`}>
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      Profile
      {events
        ? events.map((event) => <EventCard key={event._id} event={event} />)
        : 'notiing'}
      <div></div>
    </div>
  );
}

export default Profile;
