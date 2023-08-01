import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import {
  MapPinIcon,
  CalendarDaysIcon,
  TagIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
export default function EventDetailCard({ theme }) {
  const [event, setEvent] = useState([]);
  const { id } = useParams();

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
      >
        {/* <img
          src={event.image}
          alt={event.title}
          className="w-full  object-cover rounded-t-xl"
        /> */}
      </div>

      {/* //General info */}
      <div className="mt-6 flex  px-4 gap-2 flex-col">
        <h4 className="text-xl lg:text-2xl font-bold p-1 text-center tracking-wide leading-3 mb-5">
          {event.title}
        </h4>
        {/* <hr className="h-px my-4 bg-gray-400 border-1 dark:bg-gray-700" /> */}
        <div className="mb-6  ">
          <div className="flex space-x-2 items-center mb-2">
            <TagIcon className="h-4 w-4" />
            <p className="text-sm text-gray-600">Categories</p>
          </div>
          <div className="md:mb-2 pl-5">
            {event &&
              event.categories &&
              event.categories.map((category, index) => (
                <div
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md   cursor-pointer hover:scale-110 mr-2 mb-5 md:mb-0"
                  key={index}
                >
                  #{category}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-40 space-y-4 md:space-y-0">
          <div>
            <div className="flex space-x-2 items-center">
              <PencilIcon className="h-4 w-4" />
              <p className="text-sm text-gray-600">Created</p>
            </div>
            <p className="ml-6">{event.createdAt.split("T")[0]}</p>
          </div>
          <div>
            <div className="flex space-x-2 items-center ">
              <CalendarDaysIcon className="h-4 w-4" />
              <p className="text-sm text-gray-600">Start Date</p>
            </div>
            <p className="ml-6 text-base">{event.eventDate.split("T")[0]}</p>
          </div>
        </div>
        

        <div className="w-full flex justify-around p-1">
          <div className="lg:text-xl">{event.eventInfo}</div>
        </div>
        <div className="flex justify-between text-gray-400 w-full p-1 text-base">
          <p className="">Author: author</p>
          <p className="">Updated: date</p>
        </div>
      </div>
    </div>
  );
}
