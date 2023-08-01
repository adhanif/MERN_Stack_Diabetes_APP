import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { postEvent } from '../utils/axiosFunctions';
import SecondaryBtn from './buttons/SecondaryBtn';
import Select from 'react-select';

import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function EventForm({ theme }) {
  const [categories, setCategories] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (user) {
      const formData = new FormData();

      formData.append('image', data.image[0]);
      formData.append('title', data.title);
      formData.append('eventDate', data.eventDate);
      formData.append('time', data.time);
      formData.append('address', data.address);
      formData.append('targetGroup', data.targetGroup);
      formData.append('eventInfo', data.eventInfo);
      formData.append('categories', JSON.stringify(categories));
      formData.append('creator', user.id);

      // event.preventDefault();
      // console.log(event);
      console.log(categories);
      postEvent(formData);
    } else {
      console.log('else');
      navigate('/login');
    }
  };
  const options = [
    { value: 'education', label: 'Education' },
    { value: 'awareness', label: 'Awareness' },
    { value: 'health', label: 'Health' },
    { value: 'support', label: 'Support' },
    { value: 'community', label: 'Community' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'food', label: 'Food' },
    { value: 'sports', label: 'Sports' },
    { value: 'family-focused', label: 'Family-focused' },
    { value: 'children-focused', label: 'Children-focused' },
  ];

  return (
    <div
      className={`${theme}  fluid mx-auto p-6 md:p-14 flex justify-center bg-skin-fill `}
    >
      <div className='container flex max-w-[1200px] justify-center'>
        {/* Left Side */}

        <div className='hidden bg-event-Image bg-cover lg:flex lg:w-1/2 overflow-hidden lg:shadow-2xl rounded-l-[15px] '>
          {/* <img src='/src/images/20220415_151625.jpg' alt='bla' /> */}
        </div>

        {/* Right Side */}
        <div className='bg-white lg:w-1/2  max-w-[600px] h-fit lg:shadow-2xl rounded-[15px] lg:rounded-l-none flex flex-col justify-center '>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col w-full px-12 py-12 h-full'
          >
            <h1 className='max-w-2xl text-3xl font-bold mb-7 text-skin-inverted'>
              Post an Event
            </h1>

            {/* Title */}
            <div className='mb-4'>
              <label
                className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
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
                className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='title'
                name='title'
                placeholder='e.g. Soccer Match, Theater Play, etc.'
              />
              <p className='text-skin-form-error italic'>
                {errors.title?.message}
              </p>
            </div>

            {/* Date & Time */}
            <div className='flex fluid'>
              {/* Date */}
              <div className='w-1/2 mb-4'>
                <label
                  className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                  htmlFor='eventDate'
                >
                  Date
                </label>
                <input
                  {...register('eventDate', {
                    required: {
                      value: true,
                      message: '* Date is required',
                    },
                  })}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                  type='date'
                  id='eventDate'
                  name='eventDate'
                  placeholder=''
                  min={new Date().toISOString().split('T')[0]}
                />
                <p className='text-skin-form-error italic'>
                  {errors.eventDate?.message}
                </p>
              </div>
              {/* Time */}
              <div className='w-1/2'>
                <label
                  className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                  htmlFor='time'
                >
                  Time
                </label>
                <input
                  {...register('time', {
                    required: {
                      value: true,
                      message: '* Time is required',
                    },
                  })}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                  type='time'
                  id='time'
                  name='time'
                  placeholder=''
                />
                <p className='text-skin-form-error italic'>
                  {errors.time?.message}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className='mb-4'>
              <label
                className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                htmlFor='address'
              >
                Where?
              </label>
              <input
                {...register('address', {
                  required: {
                    value: true,
                    message: '* Location is required',
                  },
                })}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='address'
                name='address'
                placeholder='e.g. Main Street 3, 10100 City'
              />
              <p className='text-skin-form-error italic'>
                {errors.location?.message}
              </p>
            </div>

            {/* Target Group */}
            <div className='mb-4'>
              <label
                className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                htmlFor='targetGroup'
              >
                For Whom?
              </label>
              <input
                {...register('targetGroup', {
                  required: {
                    value: true,
                    message: '* Target Group is required to get an Answer',
                  },
                })}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='targetGroup'
                name='targetGroup'
                placeholder='e.g. kids 6-18, everyone, etc.'
              />
              <p className='text-skin-form-error italic'>
                {errors.targetGroup?.message}
              </p>
            </div>

            {/* Categories / Tags */}
            <div className='mb-4'>
              <label
                className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                htmlFor='categoryTag'
              >
                Choose Categories
              </label>
              <Select
                options={options}
                isMulti
                onChange={(value) =>
                  setCategories(value.map((item) => item.value))
                }
              />
            </div>

            {/* <p className="text-skin-form-error italic">
              {errors.categories?.message}
            </p> */}

            {/* Registration */}
            {/* <div className='mb-4'>

            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
              htmlFor='registration'
            >
              Registration needed?
            </label>
            <input
              {...register('registration')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline '
              type='text'
              id='registration'
              name='registration'
              placeholder='yes, no, etc.'
            />
            <p className='text-skin-form-error italic'>
              {errors.registarion?.message}
            </p>
          </div> */}

            {/* Further Information */}
            <div className='mb-4'>
              <label
                className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                htmlFor='eventInfo'
              >
                What else?
              </label>

              <textarea
                {...register('eventInfo')}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                name='eventInfo'
                id='eventInfo'
                placeholder='Anything else the guests have to know?'
                cols='30'
                rows='5'
              ></textarea>
              <p className='text-skin-form-error italic'>
                {errors.eventInfo?.message}
              </p>
            </div>

            {/* Image */}
            <div className='mb-4'>
              <input type='file' {...register('image', { required: true })} />
            </div>

            {/* <OutlineBtn text='Sign in with Google' /> */}
            <SecondaryBtn text='Submit' />
          </form>
        </div>
      </div>
    </div>
  );
}
