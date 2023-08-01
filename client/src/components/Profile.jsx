import React, { useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';
import { getEventsOfUser } from '../utils/axiosFunctions';
import EventCard from './EventCard';
import ProfileEvent from './ProfileEvent';

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
    <div
      className={`${theme}  fluid mx-auto p-6 md:p-14 flex justify-center bg-skin-fill `}
    >
      <div className='container flex max-w-[1200px] justify-center'>
        {/* Left Side */}
        <div className='hidden lg:flex bg-white w-1/2 overflow-hidden lg:shadow-2xl rounded-l-[15px] '>
          <div className='w-1/2 flex justify-center items-center  bg-white'>
            {/* <img
              className='h-2/3 rounded-full'
              src='https://tecdn.b-cdn.net/img/new/avatars/2.webp'
              alt='Avatar'
            /> */}
            {!isLoading ? (
              <div className='h-[200px] my-10 w-[200px] flex rounded-full items-center bg-skin-besslans-color '>
                <div className='mx-auto text-[100px]'>{user.name.at(0)}</div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='w-1/2 h-full flex flex-col justify-center gap-5'>
            {!isLoading ? (
              <>
                <h2 className='text-4xl font-extrabold '>{user.name}</h2>
                <h3 className='text-xl'>{user.email}</h3>
              </>
            ) : (
              'nothing'
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className='bg-white lg:w-1/2  max-w-[600px]  lg:shadow-2xl rounded-[15px] lg:rounded-l-none flex flex-col justify-center '>
          {!isLoading && events ? (
            <div className='w-full p-6'>
              <h3 className='text-2xl font-bold mb-6'>My Events</h3>
              {events.map((event) => (
                <ProfileEvent key={event._id} event={event} />
              ))}
            </div>
          ) : (
            'nothing'
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
