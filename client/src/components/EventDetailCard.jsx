import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
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
      <div className="relative bg-center flex h-96 max-w-[1200px] justify-center ">
        <img src={event.image} alt={event.title} className="rounded-t-xl" />
      </div>

      {/* //General info */}
      <div className="mt-6 flex  px-4 gap-2 flex-col">
        <h4 className="text-xl lg:text-2xl font-bold p-1 text-center">
          {event.title}
        </h4>

        <div className="flex gap-3 lg:text-lg p-1">
          {event &&
            event.categories &&
            event.categories.map((category, index) => (
              <div
                className="bg-gray-200 rounded-xl  px-3 py-0.5 border-2 cursor-pointer hover:scale-110"
                key={index}
              >
                #{category}
              </div>
            ))}
        </div>

        <div className="w-full flex justify-around p-1">
          <div className="lg:text-xl">text</div>
        </div>
        <div className="flex justify-between text-gray-400 w-full p-1 text-base">
          <p className="">Author: author</p>
          <p className="">Updated: date</p>
        </div>
      </div>
    </div>
  );
}
