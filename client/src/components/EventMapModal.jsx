import React, { useState } from "react";
import EventsMap from "../components/EventsMap";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import SecondaryBtn from "./buttons/SecondaryBtn";

export default function EventMapModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={`flex flex-col justify-between mb-10`}>
        <SecondaryBtn text="Show on map" onClick={handleModalToggle} />
        <SecondaryBtn
          text="Create Event"
          onClick={() => {
            navigate("/createEvents");
          }}
        />
      </div>

      {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full  h-full bg-gray-800 bg-opacity-75"
        >
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            style={{ width: "80%" }}
          >
            <XMarkIcon
              className="h-8 w-8 cursor-pointer hover:bg-gray-200 hover:text-gray-900"
              onClick={handleModalToggle}
            />

            <EventsMap handleModalToggle={handleModalToggle} />
          </div>
        </div>
      )}
    </>
  );
}
