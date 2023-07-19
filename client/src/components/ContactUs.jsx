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
      className={`${theme} fluid mx-auto p-8 md:py-16 md:px-16 lg:px-32 xl:px-60 max-h-screen border-2 border-red-600 flex justify-center bg-skin-fill`}
    >
      {/* Left Side */}
      <div className='hidden lg:flex lg:w-1/2 border-2 border-green-500'>
        <img src='/src/images/28998.jpg' alt='bla' />
      </div>
      {/* Right Side */}
      <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 border shadow flex flex-col justify-center '>
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
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
            })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            id='name'
            name='name'
            placeholder='Max Mustermann'
          />
          <p>{errors.name?.message}</p>

          {/* Email */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='email'
          >
            Email
          </label>
          <input
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required to get an Answer',
              },
            })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            id='email'
            name='email'
            placeholder='max@mustermann.de'
          />
          <p>{errors.email?.message}</p>

          {/* Subject */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            {...register('subject', {
              required: {
                value: true,
                message: 'Subject is required',
              },
            })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-skin-base leading-tight focus:outline-none focus:shadow-outline '
            type='text'
            id='subject'
            name='subject'
            placeholder='Event'
          />
          <p>{errors.subject?.message}</p>

          {/* Message */}
          <label
            className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            {...register('message', {
              required: {
                value: true,
                message: 'We would like to know what you have to say',
              },
            })}
            className='shadow appearance-none border rounded w-full py-2 px-3 mb-6 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
            name='message'
            id='message'
            cols='30'
            rows='5'
          ></textarea>
          <p>{errors.message?.message}</p>

          <OutlineBtn text='Sign in with Google' />
          <SecondaryBtn text='Submit' />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
