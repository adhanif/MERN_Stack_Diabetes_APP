import React, { useState, useEffect } from "react";
import { Popup } from "react-leaflet";
import { BeakerIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function LocationMarker({ event, handleModalToggle }) {
  const eventDate = new Date(event.eventDate);
  const year = eventDate.getFullYear().toString().slice(-2);
  const month = (eventDate.getMonth() + 1).toString().padStart(2, "0");
  const day = eventDate.getDate().toString().padStart(2, "0");
  const navigate = useNavigate();

  const handleNavigate = () => {
    handleModalToggle();

    navigate(`/eventDetail/${event._id}`);
  };

  return (
    <>
      <Popup className="w-80">
        <div className="bg-black py-2 rounded   w-80">
          <h1 className="font-bold text-white text-center text-lg ">
            {event.title}
          </h1>
        </div>
        <div className="p-3 w-80">
          <div className="flex">
            <div className="flex flex-row items-center space-x-3">
              <MapPinIcon className="h-10 w-6 text-blue-500" />
              <p className="text-base">{event.address}</p>
            </div>
          </div>

          <div className="flex space-x-4 justify-center mb-3">
            <div className="flex flex-col bg-mint rounded text-white text-center px-0 py-4 w-24 justify-center">
              <p style={{ margin: "0" }} className="font-bold text-base">
                {day}-{month}-{year}
              </p>
              <p style={{ margin: "0" }} className="text-base">
                Date
              </p>
            </div>
            <div className="flex flex-col bg-lilac rounded text-white text-center px-0 py-4  w-24 justify-center">
              <p style={{ margin: "0" }} className="font-bold text-base">
                {event.time}
              </p>
              <p style={{ margin: "0" }} className="text-base">
                Starts
              </p>
            </div>
          </div>

          <div className="bg-grey py-2 rounded mt-6">
            <h1
              className="text-center text-white text-base cursor-pointer"
              onClick={handleNavigate}
            >
              More detail
            </h1>
          </div>
        </div>
      </Popup>
    </>
  );
}
