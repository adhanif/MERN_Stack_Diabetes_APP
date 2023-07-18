import React from 'react';
import OutlineBtn from './buttons/OutlineBtn';
import PrimaryBtn from './buttons/PrimaryBtn';

function ContactUs({ theme }) {
  return (
    <div
      className={`${theme} box-border p-16 border-2 border-red-600 flex justify-center bg-skin-fill`}
    >
      {/* Left Side */}
      <div className='w-2/5 border-2 border-green-500 flex'>
        <img src='/src/images/28998.jpg' alt='bla' />
      </div>
      {/* Right Side */}
      <div className='w-2/5 border-2 border-blue-500 flex justify-center '>
        <form className='flex flex-col w-3/4 py-10'>
          {/* Name */}
          <label className='text-xl' htmlFor='name'>
            Name
          </label>
          <input
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
