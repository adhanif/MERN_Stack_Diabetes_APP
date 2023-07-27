import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import image from "../images/28998.jpg";
import axiosClient from "../axiosClient";
import FilterEvent from "../components/FilterEvent";
import EventMapModal from "../components/EventMapModal";
export default function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/events")
      .then((res) => {
        // console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container flex flex-col mx-auto lg:flex-row space-y-5 space-x-0 lg:space-x-5 lg:space-y-0">
        <aside className="w-full sm:w-2/3 lg:w-1/4 ">
          <div className="sticky top-0  w-full  ">
            <EventMapModal />
            <FilterEvent setEvents={setEvents} />
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4  px-2 ">
          {events.map((event) => {
            return (
              <EventCard
                key={event._id}
                image={event.image}
                title={event.title}
                info={event.eventInfo}
                date={event.eventDate}
                address={event.address}
                categories={event.categories}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
