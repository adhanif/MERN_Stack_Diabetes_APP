import React, { useState, useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker({ event }) {
  const eventDate = new Date(event.eventDate);

  const hours = eventDate.getHours();
  const minutes = eventDate.getMinutes();
  const year = eventDate.getFullYear().toString().slice(-2);
  const month = (eventDate.getMonth() + 1).toString().padStart(2, "0");
  const day = eventDate.getDate().toString().padStart(2, "0");

  return (
    <>
      <Popup className="mw-100">
        <div className="bg-blue-700 py-2 rounded ">
          <h1 className="font-bold text-white text-center text-lg">
            {event.title}
          </h1>
        </div>
        <div className="p-3">
          <div className="flex">
            <div className="w-1/2">
              <p className="">address:afagvagsGSRGSFGSFGRHGDHDTH</p>
            </div>
            <div
              className="w-1/3 flex flex-col bg-amber-700 rounded text-white text-center  justify-center"
              style={{ flex: "1 0 0" }}
            >
              <p style={{ margin: "0" }} className="font-bold text-base">
                {day}-{month}-{year}
              </p>
              <p style={{ margin: "0" }} className="font">
                Date
              </p>
            </div>
          </div>

          <div className="flex space-x-4 justify-between mb-3">
            <div
              className="flex flex-col bg-green-400 rounded text-white text-center px-4 py-1 w-100 justify-center"
              style={{ flex: "1 0 0" }}
            >
              <p style={{ margin: "0" }} className="font-bold text-base">
                348
              </p>
              <p style={{ margin: "0" }}>Going</p>
            </div>
            <div
              className="flex flex-col bg-amber-700 rounded text-white text-center px-4 py-1 justify-center"
              style={{ flex: "1 0 0" }}
            >
              <p style={{ margin: "0" }} className="font-bold text-base">
                {hours}:{minutes}
              </p>
              <p style={{ margin: "0" }} className="font">
                starts
              </p>
            </div>
            {/* <div
              className="flex flex-col bg-amber-700 rounded text-white text-center px-4 py-1 justify-center"
              style={{ flex: "1 0 0" }}
            >
              <p style={{ margin: "0" }} className="font-bold text-base">
                {day}-{month}-{year}
              </p>
              <p style={{ margin: "0" }} className="font">
                Date
              </p>
            </div> */}
          </div>

          <div className="bg-orange-500 py-2 rounded">
            <h1 className="text-center text-white ">JOIN</h1>
          </div>
        </div>
      </Popup>
    </>
  );
}
