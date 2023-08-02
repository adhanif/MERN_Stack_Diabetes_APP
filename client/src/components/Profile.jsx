import React, { useEffect } from 'react';
import AuthProvider, { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';
import { getEventsOfUser, postProfilePicture } from '../utils/axiosFunctions';

import ProfileEvent from './ProfileEvent';
import { useForm } from 'react-hook-form';
import SecondaryBtn from './buttons/SecondaryBtn';

function Profile({ theme }) {
  const { user, isLoading, login, logout } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const e = await getEventsOfUser();
      setEvents(e);
      console.log(e);
      console.log(user);
    };

    getEvents();
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const sendPicture = async () => {
      const formData = new FormData();
      formData.append('image', data.image[0]);
      const u = await postProfilePicture(formData);
      console.log(u);
      login(u);
    };
    sendPicture();
  };

  return (
    <div
      className={`${theme}  fluid w-full mx-auto p-6 md:p-14 flex justify-center bg-skin-fill `}
    >
      <div className='container flex max-w-[1200px] justify-center'>
        {/* Left Side */}
        <div className='hidden lg:flex bg-white w-1/2 overflow-hidden lg:shadow-2xl rounded-l-[15px] '>
          <div className='w-1/2 flex justify-center items-center  bg-white'>
            {user ? (
              <div className='flex flex-col'>
                <div className='h-[200px] my-10 w-[200px] flex rounded-full items-center justify-center bg-skin-besslans-color text-8xl text-white'>
                  <img
                    className='h-[200px] w-[200px] rounded-full'
                    src={user.image}
                    alt='Avatar'
                  />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action=''>
                  <input
                    className='block mb-4'
                    type='file'
                    {...register('image', { required: true })}
                  />

                  <SecondaryBtn text='Submit' />
                </form>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='w-1/2 h-full flex flex-col justify-center gap-5'>
            {!isLoading && user ? (
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
