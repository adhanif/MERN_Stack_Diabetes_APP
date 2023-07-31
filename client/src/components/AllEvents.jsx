import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import image from "../images/28998.jpg";
import axiosClient from "../axiosClient";
import FilterEvent from "../components/FilterEvent";
import EventMapModal from "../components/EventMapModal";
import { useForm } from "react-hook-form";
import SecondaryBtn from "./buttons/SecondaryBtn";
import EventsPagination from "../components/EventsPagination";

export default function AllEvents({ theme }) {
  const [events, setEvents] = useState([]);
  const [path, setPath] = useState("/events");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      keyword: "",
      distance: "",
      categories: "",
    },
  });

  useEffect(() => {
    axiosClient
      .get(path)
      .then((res) => {
        setEvents(events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path]);

  const onSubmit = (data) => {
    setPath(`/events?keyword=${data.keyword}`);
  };

  return (
    <div className={`${theme} bg-skin-fill`}>
      <div
        className={`container flex flex-col mx-auto lg:flex-row space-y-5 space-x-0 lg:space-x-5 lg:space-y-0`}
      >
        <aside className="w-full sm:w-2/3 md:w-3/4 lg:w-1/4">
          <div className="sticky top-0  w-full py-5">
            <EventMapModal />
            <FilterEvent setPath={setPath} events={events} />
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4  px-2 pt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex space-x-5 mb-10 lg:w-4/5"
          >
            <input
              {...register("keyword", {
                maxLength: { value: 30, message: "Maximum length is 30" },
              })}
              type="text"
              placeholder="Keyword"
              className="shadow appearance-none border rounded w-full px-3 text-gray-700 dark:border-gray-600 leading-tight focus:outline-none  focus:ring-2 focus:border-blue-500 "
            />
            <SecondaryBtn text="Search" />
          </form>
          {events.map((event) => {
            return <EventCard key={event._id} event={event} />;
          })}

          {/* Pagination  */}
          <div className="ml-20">
            <EventsPagination setPath={setPath} setEvents={setEvents} />
          </div>
        </main>
      </div>
    </div>
  );
}
