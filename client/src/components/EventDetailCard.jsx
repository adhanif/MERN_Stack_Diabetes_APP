import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
import { useForm } from 'react-hook-form';
import SecondaryBtn from './buttons/SecondaryBtn';
import dummy from '../assets/dummy.png';
import { useNavigate } from 'react-router-dom';
import {
  MapPinIcon,
  CalendarDaysIcon,
  TagIcon,
  PencilIcon,
  ClockIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/solid';
import { AuthContext } from '../context/AuthProvider';

export default function EventDetailCard({ theme }) {
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axiosClient
      .post(`/events/${id}/comments`, data)
      .then((res) => {
        setComments([res.data, ...comments]);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleJoin = () => {
    axiosClient
      .post(`/events/${id}/join`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosClient
      .get(`/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        axiosClient.get(`/events/${id}/comments`).then((res) => {
          setComments(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate('/events');
  };

  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative m-auto my-6 flex h-full w-[55%] flex-col bg-clip-border`}
    >
      <div
        className='relative bg-center flex h-96 max-w-[1200px] justify-center rounded-t-md'
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* //General info */}
      <div className='mt-10 flex px-8 gap-2 flex-col '>
        <h4 className='text-lg  md:text-4xl font-bold p-1 pl-9 tracking-wide leading-10 mb-10'>
          {event.title}
        </h4>

        {/* 
          Description
        */}
        <div className='flex space-x-2 mb-5'>
          <div>
            <div className='bg-gray-200 p-2 rounded-lg'>
              <ClipboardDocumentIcon className='h-4 w-4' />
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-sm md:text-lg'>Description</p>
            <p className=' text-gray-600  w-100 pr-9'>{event.eventInfo}</p>
          </div>
        </div>

        <div className='flex justify-between mb-6 pr-9'>
          <div className='flex gap-2'>
            <div className='bg-gray-200 h-[60%] p-2 rounded-lg'>
              <CalendarDaysIcon className='h-4 w-4 ' />
            </div>
            <div>
              <p className='text-sm md:text-lg'>Date and Time</p>
              <p className=' text-gray-600 '>
                {event && event.eventDate && event.eventDate.split('T')[0]},
                <span className='ml-3'>
                  {event && event && event.time} CEST
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className='flex gap-2'>
              <div className='bg-gray-200 p-2 h-[60%] rounded-lg'>
                <MapPinIcon className='h-4 w-4 ' />
              </div>
              <div>
                <p className='text-sm md:text-lg '>Location</p>
                <p className='text-gray-600'>{event.address}</p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex gap-2'>
              <div className='bg-gray-200 p-2 h-[60%] rounded-lg'>
                <TagIcon className='h-4 w-4 ' />
              </div>
              <div>
                <p className='text-sm md:text-lg mb-1'>Categories</p>
                <div className=''>
                  {event &&
                    event.categories &&
                    event.categories.map((category, index) => (
                      <div
                        className='inline-block bg-gray-200 rounded-full px-3 text-base cursor-pointer hover:scale-110 mr-2 mb-5 md:mb-0'
                        key={index}
                      >
                        #{category}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        
        
        
        
        
        
        */}

        {/* <div className='flex'>
         
          <div className='flex flex-col md:flex-row md:space-x-40 space-y-5 md:space-y-0 mb-5 md:mb-10'>
            <div className='flex space-x-2 '>
              <div>
                <div className='bg-gray-200 p-2 rounded-lg'>
                  <CalendarDaysIcon className='h-4 w-4 ' />
                </div>
              </div>
              <div>
                <p className='text-sm md:text-base text-gray-600'>
                  Date and Time
                </p>
                <p className='text-base '>
                  {event && event.eventDate && event.eventDate.split('T')[0]},
                  <span className='ml-3'>
                    {event && event && event.time} CEST
                  </span>
                </p>
              </div>
            </div>

           
            <div className='flex space-x-2 '>
              <div>
                <div className='bg-gray-200 p-2 rounded-lg'>
                  <MapPinIcon className='h-4 w-4 ' />
                </div>
              </div>
              <div>
                <p className='text-sm md:text-base text-gray-600'>Location</p>
                <p className='text-base '>{event.address}</p>
              </div>
            </div>
          </div>

        
          <div className='md:mb-8'>
            <div className='flex space-x-2 items-center mb-2'>
              <div className='bg-gray-200 p-2 rounded-lg'>
                <TagIcon className='h-4 w-4 ' />
              </div>
              <p className='text-sm md:text-base text-gray-600'>Categories</p>
            </div>
            <div className='md:mb-1 pl-10'>
              {event &&
                event.categories &&
                event.categories.map((category, index) => (
                  <div
                    className='inline-block bg-gray-200 rounded-full px-3 text-base      cursor-pointer hover:scale-110 mr-2 mb-5 md:mb-0'
                    key={index}
                  >
                    #{category}
                  </div>
                ))}
            </div>
          </div>
        </div> */}
        {/* People going */}
        <div className=' flex flex-col'>
          <div className='flex space-x-2 mb-2'>
            <div className='bg-gray-200 p-2 h-[60%] rounded-lg'>
              <UserGroupIcon className='h-4 w-4' />
            </div>
            <div>
              <p className='text-sm md:text-lg '>
                {event && event.participants && event.participants.length}{' '}
                people going
              </p>
              <SecondaryBtn text='Join' onClick={handleJoin} />
            </div>
          </div>
          <div className='pl-6'>
            {/* <button
              className='py-1 px-5  mx-auto bg-skin-button-secondary text-white text-skin-inverted rounded-md hover:scale-110 hover:bg-skin-button-secondary-hover duration-300 hover:text-white '
              onClick={handleJoin}
            >
              Join
            </button> */}
          </div>
        </div>
        <div
          className='flex items-center mb-5 cursor-pointer space-x-1'
          onClick={handleGoBack}
        >
          <ArrowLeftIcon className='h-16 w-5  ' />
          <p className='text-lg'>Back</p>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-0 py-12 h-full"
        >
          <div>
            <label
              className="mb-5 text-sm md:text-base lg:text-xl font-bold text-skin-inverted"
              htmlFor="eventInfo"
            >
              Add a comment more
            </label>

            <textarea
              {...register("comment")}
              className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline mb-3"
              id="eventInfo"
              placeholder="Your Comment"
              cols="30"
              rows="5"
            ></textarea>
            <p className="text-skin-form-error italic">
              {errors.comment?.message}
            </p>

            <SecondaryBtn text="Comment" type="submit" />
          </div>
          <div
            className="flex items-center mt-5 cursor-pointer space-x-1"
            onClick={handleGoBack}
          >
            <ArrowLeftIcon className="h-10 w-5  " />
            <p className="font-medium">Back</p>
          </div>
        </form> */}
        {/* <div className='space-y-5 mb-10'>
          {comments &&
            comments.map((comment) => {
              const createdAtDate = new Date(comment.createdAt);
              const hours = createdAtDate
                .getHours()
                .toString()
                .padStart(2, '0');
              const minutes = createdAtDate
                .getMinutes()
                .toString()
                .padStart(2, '0');

              return (
                <div key={comment._id} className='rounded-md bg-white p-5'>
                  <div className='flex flex-row space-x-6 mb-5'>
                    <img src={dummy} alt='' className='rounded-full w-6 ' />
                    <div className=''>{comment.creater?.name}</div>
                    <div>{comment.createdAt.split('T')[0]}</div>
                    <div>{`${hours}:${minutes}`}</div>
                  </div>
                  <div>
                    <p className=''>{`"${comment.comment}"`}</p>
                  </div>
                </div>
              );
            })}
        </div> */}
      </div>
    </div>
  );
}
