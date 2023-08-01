
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useForm } from "react-hook-form";
import SecondaryBtn from "./buttons/SecondaryBtn";
import dummy from "../assets/dummy.png";
import {
  MapPinIcon,
  CalendarDaysIcon,
  TagIcon,
  PencilIcon,
  ClockIcon,
  ClipboardDocumentIcon,

} from "@heroicons/react/24/solid";
import { AuthContext } from "../context/AuthProvider";


export default function EventDetailCard({ theme }) {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [event, setEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosClient
      .post(`/events/${id}/comments`, data)
      .then((res) => {
        setComments([res.data, ...comments]);
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
          console.log(res.data);
          setComments(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  return (
    <div className={`${theme} bg-skin-fill`}>
      <div
        className={`bg-white shadow-xl w-2/4 rounded-xl relative m-auto my-10 flex  flex-col bg-clip-border`}
      >
        <div
          className='relative bg-center flex h-96 max-w-[1200px] justify-center rounded-md'
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* //General info */}
        <div className='mt-10 flex  px-8 gap-2 flex-col '>
          <h4 className='text-lg  md:text-2xl font-bold p-1 text-center tracking-wide leading-3 mb-10'>
            {event.title}
          </h4>

          <div className='md:mb-6'>
            <div className='flex space-x-2 items-center mb-2'>
              <TagIcon className='h-4 w-4' />
              <p className='text-sm md:text-base text-gray-600'>Categories</p>
            </div>
            <div className='md:mb-1 pl-5'>
              {event &&
                event.categories &&
                event.categories.map((category, index) => (
                  <div
                    className='inline-block bg-gray-200 rounded-full px-3 text-md  md:text-base lg:text-xl   cursor-pointer hover:scale-110 mr-2 mb-5 md:mb-0'
                    key={index}
                  >
                    #{category}
                  </div>
                ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 sm:mb-6'>
            <div>
              <div className='flex space-x-2 items-center'>
                <PencilIcon className='h-4 w-4' />
                <p className='text-sm md:text-base text-gray-600'>Created</p>
              </div>
              <p className='ml-6 text-md  md:text-base lg:text-xl'>
                {event && event.createdAt && event.createdAt.split('T')[0]}
              </p>
            </div>
            <div className=''>
              <div className='flex space-x-2 items-center '>
                <CalendarDaysIcon className='h-4 w-4' />
                <p className='text-sm md:text-base text-gray-600'>Start Date</p>
              </div>
              <p className='ml-6  text-md  md:text-base lg:text-xl'>
                {event && event.eventDate && event.eventDate.split('T')[0]}
              </p>
            </div>
            <div className='md:ml'>
              <div className='flex space-x-2 items-center pr-10'>
                <ClockIcon className='h-4 w-4' />
                <p className='text-sm md:text-base text-gray-600'>Time</p>
              </div>
              <p className='ml-6 text-md  md:text-base lg:text-xl'>
                {event.time}
              </p>
            </div>
          </div>

          <div className=' flex flex-col md:flex-row  md:space-x-20  lg:space-x-20 space-y-4 md:space-y-0 mb-6 '>
            <div>
              <div className='flex space-x-2 items-center '>
                <MapPinIcon className='h-4 w-4' />
                <p className='text-sm md:text-base text-gray-600'>Location</p>
              </div>
              <p className='ml-6 text-md  md:text-base lg:text-xl'>
                {event.address}
              </p>
            </div>

            <div>
              <button className='py-1 px-5  mx-auto bg-skin-button-secondary text-white text-skin-inverted rounded-md hover:scale-110 hover:bg-skin-button-secondary-hover duration-300 hover:text-white '>
                Join
              </button>
            </div>
          </div>

          <div className='md:mb-6'>
            <div className='flex space-x-2 items-center mb-5'>
              <ClipboardDocumentIcon className='h-4 w-4' />
              <p className='text-sm md:text-base text-gray-600'>Description</p>
            </div>
            <p className='ml-6 text-md  md:text-base lg:text-xl'>
              {event.eventInfo}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col w-full px-0 py-12 h-full'
          >
            <div>
              <label
                className='mb-5 text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
                htmlFor='eventInfo'
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
        </form>
        <div className="space-y-5 mb-10">
          {comments &&
            comments.map((comment) => {
              return (
                <div key={comment._id} className="rounded-md bg-white p-5">
                  <div className="flex flex-row space-x-6 mb-5">
                    <img src={dummy} alt="" className="rounded-full w-6 h-6" />
                    <div className="font-semibold">{comment.creater.name}</div>
                    <div>{comment.createdAt.split("T")[0]}</div>
                  </div>
                  "{comment.comment}"
                </div>
              );
            })}

        </div>
      </div>
    </div>
  );
}
