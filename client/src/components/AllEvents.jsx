import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import image from "../images/28998.jpg";
import axiosClient from "../axiosClient";
export default function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/events")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* //// */}
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
              <ul className="flex flex-col overflow-hidden">fasfaf</ul>
            </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 ">
            {events.map((event) => {
              return (
                <EventCard
                  key={event._id}
                  image={event.image}
                  title={event.title}
                  info={event.eventInfo}
                  date={event.eventDate}
                  address={event.address}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}
