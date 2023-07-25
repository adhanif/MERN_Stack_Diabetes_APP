import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';
import { useForm } from 'react-hook-form';
import { postMessage } from '../utils/axiosFunctions';
import SecondaryBtn from './buttons/SecondaryBtn';

export default function EventForm({ theme }) {
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
      <div className='hidden lg:flex lg:w-1/2  border-2 border-green-500'>
        <img src='/src/images/20220415_151625.jpg' className='w-full' alt='bla' />
      </div>
      {/* Right Side */}
      <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 border shadow flex flex-col justify-center '>
        <form
          onSubmit={handleSubmit(sendMessage)}
          className='flex flex-col w-full px-8 py-6'
        >
          <h1 className='max-w-2xl text-3xl font-bold mb-7'>Post an Event</h1>

          {/* Title */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='title'
            >
              What?
            </label>
            <input
              {...register('title', {
                required: {
                  value: true,
                  message: '* Title is required',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='title'
              name='title'
              placeholder='e.g. Soccer Match, Theater Play, etc.'
            />
            <p className='text-skin-form-error italic'>
              {errors.title?.message}
            </p>
          </div>

          {/* Location */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='location'
            >
              Where?
            </label>
            <input
              {...register('location', {
                required: {
                  value: true,
                  message: '* Location is required',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='loacation'
              name='location'
              placeholder='e.g. Main Street 3, 10100 City'
            />
            <p className='text-skin-form-error italic'>
              {errors.location?.message}
            </p>
          </div>

          {/* Target Group */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='target'
            >
              For Whom?
            </label>
            <input
              {...register('target', {
                required: {
                  value: true,
                  message: '* Target Group is required to get an Answer',
                },
              })}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='target'
              name='target'
              placeholder='e.g. kids 6-18, everyone, etc.'
            />
            <p className='text-skin-form-error italic'>
              {errors.target?.message}
            </p>
          </div>

          {/* Food */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='food'
            >
              Food?
            </label>
            <input
              {...register('food')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline '
              type='text'
              id='food'
              name='food'
              placeholder='e.g. is provided, not provided, etc.'
            />
          </div>

          {/* Registration */}
          <div className='mb-4'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='registration'
            >
              Registration needed?
            </label>
            <input
              {...register('registration')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline '
              type='text'
              id='registration'
              name='registration'
              placeholder='yes, no, etc.'
            />
            <p className='text-skin-form-error italic'>
              {errors.registarion?.message}
            </p>
          </div>

          {/* Further Information */}
          <div className='mb-6'>
            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-base'
              htmlFor='info'
            >
              What else?
            </label>
            <textarea
              {...register('info')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline'
              name='info'
              id='info'
              placeholder='Anything else the guests have to know?'
              cols='30'
              rows='5'
            ></textarea>
            <p className='text-skin-form-error italic'>
              {errors.info?.message}
            </p>
          </div>

          {/* <OutlineBtn text='Sign in with Google' /> */}
          <SecondaryBtn text='Submit' />
        </form>
      </div>
    </div>
  );
};
