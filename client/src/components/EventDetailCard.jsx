import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useForm } from "react-hook-form";
import SecondaryBtn from "./buttons/SecondaryBtn";
import {
  MapPinIcon,
  CalendarDaysIcon,
  TagIcon,
  PencilIcon,
  DocumentIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
export default function EventDetailCard({ theme }) {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  useEffect(() => {
    axiosClient.get(`/events/${id}`).then((res) => {
      console.log(res.data);
      setEvent(res.data);
    });
  }, [id]);

  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative m-auto my-6 flex h-full w-[65%] flex-col bg-clip-border`}
    >
      <div
        className="relative bg-center flex h-96 max-w-[1200px] justify-center rounded-md"
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* //General info */}
      <div className="mt-6 flex  px-8 gap-2 flex-col">
        <h4 className="text-xl lg:text-2xl font-bold p-1 text-center tracking-wide leading-3 mb-5">
          {event.title}
        </h4>

        <div className="md:mb-6">
          <div className="flex space-x-2 items-center mb-2">
            <TagIcon className="h-4 w-4" />
            <p className="text-sm text-gray-600">Categories</p>
          </div>
          <div className="md:mb-1 pl-5">
            {event &&
              event.categories &&
              event.categories.map((category, index) => (
                <div
                  className="inline-block bg-gray-200 rounded-full px-3  text-md   cursor-pointer hover:scale-110 mr-2 mb-5 md:mb-0"
                  key={index}
                >
                  #{category}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:mb-6">
          <div>
            <div className="flex space-x-2 items-center">
              <PencilIcon className="h-4 w-4" />
              <p className="text-sm text-gray-600">Created</p>
            </div>
            <p className="ml-6">
              {event && event.createdAt && event.createdAt.split("T")[0]}
            </p>
          </div>
          <div className="md:ml-40">
            <div className="flex space-x-2 items-center ">
              <CalendarDaysIcon className="h-4 w-4" />
              <p className="text-sm text-gray-600">Start Date</p>
            </div>
            <p className="ml-6 text-base">
              {event && event.eventDate && event.eventDate.split("T")[0]}
            </p>
          </div>
          <div></div>
        </div>

        <div className="md:mb-6">
          <div className="flex space-x-2 items-center ">
            <MapPinIcon className="h-4 w-4" />
            <p className="text-sm text-gray-600">Location</p>
          </div>
          <p className="ml-6 text-base">{event.address}</p>
        </div>

        <div className="md:mb-6">
          <div className="flex space-x-2 items-center mb-5">
            <ClipboardDocumentIcon className="h-4 w-4" />
            <p className="text-sm text-gray-600">Description</p>
          </div>
          <p className="ml-6 text-base">{event.eventInfo}</p>
        </div>

        <form
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
              name="eventInfo"
              id="eventInfo"
              placeholder="Your Comment"
              cols="30"
              rows="5"
            ></textarea>
            <p className="text-skin-form-error italic">
              {errors.comment?.message}
            </p>
            <SecondaryBtn text="Comment" />
          </div>
        </form>
      </div>
    </div>
  );
}
