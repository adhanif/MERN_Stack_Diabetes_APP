import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import { useForm } from 'react-hook-form';
import { postMessage } from '../utils/axiosFunctions';

function ContactUs({ theme }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMessage = (data) => {
    // event.preventDefault();
    // console.log(event);
    console.log(data);
    postMessage(data);
  };

  return (
    <div
      className={`${theme} fluid md:p-16 border-2 border-red-600 flex justify-center bg-skin-fill`}
    >
      {/* Left Side */}
      <div className='hidden md:flex md:w-1/2 border-2 border-green-500'>
        <img src='/src/images/28998.jpg' alt='bla' />
      </div>
      {/* Right Side */}
      <div className=' w-4/5 sm:w-3/5 md:w-1/2 border-2 border-blue-500 flex justify-center '>
        <form
          onSubmit={handleSubmit(sendMessage)}
          className='flex flex-col w-3/4 py-10'
        >
          {/* Name */}
          <label className='text-xl' htmlFor='name'>
            Name
          </label>
          <input
            {...register('name', { required: true })}
            className='text-xl p-2 mb-4 rounded'
            type='text'
            id='name'
            name='name'
            placeholder='Max Mustermann'
          />

          {/* Email */}
          <label className='text-xl' htmlFor='email'>
            Email
          </label>
          <input
            {...register('email', { required: true })}
            className='p-2 mb-4 rounded'
            type='email'
            id='email'
            name='email'
            placeholder='max@mustermann.de'
          />

          {/* Subject */}
          <label className='text-xl' htmlFor='subject'>
            Subject
          </label>
          <input
            {...register('subject', { required: true })}
            className='p-2 mb-4 rounded'
            type='text'
            id='subject'
            name='subject'
            placeholder='Event'
          />

          {/* Message */}
          <label className='text-xl' htmlFor='message'>
            Message
          </label>
          <textarea
            {...register('message', { required: true })}
            className='p-2 mb-6 rounded'
            name='message'
            id='message'
            cols='30'
            rows='5'
          ></textarea>
          <OutlineBtn text='Submit' />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;