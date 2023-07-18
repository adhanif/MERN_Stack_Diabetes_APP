import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import { useForm } from 'react-hook-form';
import { postMessage } from '../utils/axiosFunctions';
import SecondaryBtn from './buttons/SecondaryBtn';

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
      className={`${theme} fluid mx-auto md:p-16 border-2 border-red-600 flex justify-center bg-skin-fill`}
    >
      {/* Left Side */}
      <div className='hidden lg:flex md:w-1/2 border-2 border-green-500'>
        <img src='/src/images/28998.jpg' alt='bla' />
      </div>
      {/* Right Side */}
      <div className=' w-4/5 sm:w-3/5 md:w-1/2 border shadow flex flex-col justify-center '>
        <form
          onSubmit={handleSubmit(sendMessage)}
          className='flex flex-col w-full px-8 py-6'
        >
          <h1 className='max-w-2xl text-3xl font-bold mb-7'>Contact Us</h1>

          {/* Name */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='name'
          >
            Name
          </label>
          <input
            {...register('name', { required: true })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            id='name'
            name='name'
            placeholder='Max Mustermann'
          />

          {/* Email */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='email'
          >
            Email
          </label>
          <input
            {...register('email', { required: true })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            id='email'
            name='email'
            placeholder='max@mustermann.de'
          />

          {/* Subject */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            {...register('subject', { required: true })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline '
            type='text'
            id='subject'
            name='subject'
            placeholder='Event'
          />

          {/* Message */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            {...register('message', { required: true })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-6 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            name='message'
            id='message'
            cols='30'
            rows='5'
          ></textarea>
          <OutlineBtn text='bla' />
          <SecondaryBtn text='Submit' />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
