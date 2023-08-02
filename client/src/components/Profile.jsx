import React, { useEffect } from 'react';
import AuthProvider, { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';
import {
  getEventsOfUser,
  getJoinedEvents,
  postProfilePicture,
} from '../utils/axiosFunctions';

import ProfileEvent from './ProfileEvent';
import { useForm } from 'react-hook-form';
import SecondaryBtn from './buttons/SecondaryBtn';

//Toasts
import { ToastContainer, toast } from 'react-toastify';
import { failToast, successToast } from '../utils/toasts.js';

function Profile({ theme }) {
  const { user, isLoading, login, logout } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [joined, setJoined] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const e = await getEventsOfUser();
      const j = await getJoinedEvents();
      setEvents(e);
      setJoined(j);
      // console.log(e);
      // console.log(user);
    };

    getEvents();
    getJoinedEvents();
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
      if (u != false) {
        login(u);
      } else {
        failToast(
          'Profile Picture could not be updated. Please try again later.'
        );
      }
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
                    alt=''
                  />
                </div>
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
            ) : null}
          </div>
        </div>
        {/* Right Side */}
        <div className='bg-white lg:w-1/2  max-w-[600px]  lg:shadow-2xl rounded-[15px] lg:rounded-l-none flex flex-col'>
          {!isLoading && events ? (
            <div className='flex flex-col p-6 h-full justify-between'>
              {/* Created Events */}
              <div className='w-full mb-4'>
                <h3 className='text-2xl font-bold mb-1'>My Events</h3>
                {events.length == 0 ? <p>You should create an event.</p> : ''}
                {events.map((event) => (
                  <ProfileEvent key={event._id} event={event} />
                ))}
              </div>

              {/* Joined Events */}
              <div className='w-full mb-4'>
                <h3 className='text-2xl font-bold mb-1'>Me Joining</h3>
                {joined.length == 0 ? <p>You should join some event.</p> : ''}
                {joined.map((event) => (
                  <ProfileEvent key={event._id} event={event} />
                ))}
              </div>

              {/* Upload pictures */}
              <div className='flex flex-col'>
                <h3 className='text-2xl font-bold mb-1'>
                  Upload Profile Picture
                </h3>
                <form
                  className='flex items-center'
                  onSubmit={handleSubmit(onSubmit)}
                  action=''
                >
                  <input
                    className='block mb-4'
                    type='file'
                    {...register('image', { required: true })}
                  />

                  <SecondaryBtn text='Submit' />
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Profile;
