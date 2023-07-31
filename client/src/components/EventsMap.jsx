import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import axiosClient from "../axiosClient";
import LocationMarker from "../components/LocationMarker";
import UserMapLocation from "../components/UserMapLocation";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect } from "react";

export default function EventsMap() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/events")
      .then(({ data: { page, totalPages, events } }) => {
        setEvents(events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <MapContainer
        center={{ lat: 52.52, lng: 13.8 }}
        // center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events &&
          events.map((event) => {
            return (
              <Marker
                key={event._id}
                position={[
                  event.location.coordinates[0],
                  event.location.coordinates[1],
                ]}
                // position={[event.location.lat, event.location.long]}
              >
                <LocationMarker event={event} />
              </Marker>
            );
          })}
        <UserMapLocation />
      </MapContainer>
    </>
  );
}
