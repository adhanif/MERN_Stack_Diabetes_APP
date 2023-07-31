import React, { useState } from "react";
import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import SmallSecondaryBtn from "./buttons/SmallSecondaryBtn";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import LocationMarker from "../components/LocationMarker";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
export default function EventCard({ event }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventDate = new Date(event.date).toLocaleDateString();
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className=" flex  bg-white flex-col lg:flex-row border rounded-md overflow-hidden shadow-lg mb-5 lg:w-4/5">
        <div className=" lg:w-2/5 px-6 py-6">
          <img
            className="w-full md:w-screen  h-56  rounded-lg"
            src={event.image}
            alt={event.title}
          />
        </div>

        <div className="px-6 py-4  lg:pl-0  lg:w-3/5">
          <div className="font-bold text-2xl mb-3">{event.title}</div>
          <p className="text-black text-base mb-2">{event.info}</p>
          <div className="flex flex-col  lg:flex-row  mb-2 md:mb-1">
            <div className="flex space-x-2 mb-2 md:mb-3 w-full ">
              <CalendarDaysIcon className="h-6 w-5 " />
              <p>{event.eventDate.split("T")[0]}</p>
            </div>
            <div className="flex space-x-1 mb-2 md:mb-4 w-full md:w-full">
              <ClockIcon className="h-6 w-5 " />
              <p>{event.time}</p>
            </div>
          </div>
          <div className="flex  space-x-1 mb-5 md:mb-0 ">
            <MapPinIcon className="h-6 w-5 " />
            <p>{event.address}</p>
          </div>

          <div className=" md:pt-5 mb-4">
            {event.categories.map((category, index) => {
              return (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3  text-md font-semibold text-black cursor-pointer hover:scale-110 mr-2 "
                  key={index}
                >
                  #{category}
                </span>
              );
            })}
          </div>
          {/* mapmodal event on map */}
          <div className="mb-5 md:mb-0">
            <div className="space-x-5">
              <SmallSecondaryBtn
                text="Show on map"
                onClick={handleModalToggle}
              />
              <SmallSecondaryBtn text="Join" />
            </div>
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

                {/* MApcontainer */}
                <MapContainer
                  center={{
                    lat: event.location.coordinates[0],
                    lng: event.location.coordinates[1],
                  }}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{ height: "80vh", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker
                    position={[
                      event.location.coordinates[0],
                      event.location.coordinates[1],
                    ]}
                  >
                    <LocationMarker event={event} />
                  </Marker>
                </MapContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
