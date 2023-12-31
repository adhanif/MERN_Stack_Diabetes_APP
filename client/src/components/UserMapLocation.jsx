import React from "react";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "react-tailwindcss-datepicker/dist/index.esm"
export default function UserMapLocation() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
