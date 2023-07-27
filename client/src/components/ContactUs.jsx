import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import { useForm } from 'react-hook-form';
import { postMessage } from '../utils/axiosFunctions';
import SecondaryBtn from './buttons/SecondaryBtn';

//Test
import { ToastContainer, toast } from 'react-toastify';
import { failToast, successToast } from '../utils/toasts.js';

function ContactUs({ theme }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendMessage = async (data) => {
    // event.preventDefault();
    // console.log(event);
    console.log(data);
    const status = await postMessage(data);
    if (status) {
      successToast('Thanks for the Message.\nWe will answer in two years');
      reset();
    } else {
      failToast('Hallo');
    }
  };

  return (
    <div
      className={`${theme} fluid mx-auto p-8 md:py-16 md:px-16 lg:px-32 xl:px-60 max-h-screen  flex justify-center bg-skin-fill`}
    >
      {/* Left Side */}
      <div className='hidden lg:flex lg:w-1/2'>
        <img src='/src/images/Liebesbriefe2.jpg' alt='bla' />
      </div>
      {/* Right Side */}
      <div className='bg-white  w-full sm:w-4/5 md:w-3/5 lg:w-1/2 shadow shadow-whiteGrey flex flex-col justify-center '>
        <form
          onSubmit={handleSubmit(sendMessage)}
          className='flex flex-col w-full px-8 py-6'
        >
          <h1 className='max-w-2xl text-3xl font-bold mb-7'>Contact Us</h1>

          {/* Name */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
              htmlFor='name'
            >
              Name
            </label>
            <input
              {...register('name', {
                required: {
                  value: true,
                  message: '* Name is required',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='name'
              name='name'
              placeholder='Max Mustermann'
            />
            <p className='text-skin-form-error italic'>
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
              htmlFor='email'
            >
              Email
            </label>
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: '* Email is required to get an Answer',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              id='email'
              name='email'
              placeholder='max@mustermann.de'
            />
            <p className='text-skin-form-error italic'>
              {errors.email?.message}
            </p>
          </div>

          {/* Subject */}
          <div className='mb-4'>
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
                  message: '*Subject is required',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline '
              type='text'
              id='subject'
              name='subject'
              placeholder='Event'
            />
            <p className='text-skin-form-error italic'>
              {errors.subject?.message}
            </p>
          </div>

          {/* Message */}
          <div className='mb-6'>
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
                  message: '*We would like to know what you have to say',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
              name='message'
              id='message'
              cols='30'
              rows='5'
            ></textarea>
            <p className='text-skin-form-error italic'>
              {errors.message?.message}
            </p>
          </div>

          {/* <OutlineBtn text='Sign in with Google' /> */}
          <SecondaryBtn text='Submit' />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
