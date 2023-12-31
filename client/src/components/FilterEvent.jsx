import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import SecondaryBtn from "./buttons/SecondaryBtn";
import axiosClient from "../axiosClient";
import moment from "moment";
import Datepicker from "react-tailwindcss-datepicker";
export default function FilterEvent({ setFilters }) {
  const [categories, setCategories] = useState("");
  const [distance, setDistance] = useState();
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [date, setDate] = useState();

  const handleValueChange = (newValue) => {
    setDate(newValue);
  };
  const distanceOptions = [
    { value: 10000, label: "10" },
    { value: 20000, label: "20" },
    { value: 30000, label: "30" },
    { value: 40000, label: "40" },
    { value: 50000, label: "50" },
  ];
  const options = [
    { value: "education", label: "Education" },
    { value: "awareness", label: "Awareness" },
    { value: "health", label: "Health" },
    { value: "support", label: "Support" },
    { value: "community", label: "Community" },
    { value: "entertainment", label: "Entertainment" },
    { value: "food", label: "Food" },
    { value: "sports", label: "Sports" },
    { value: "family-focused", label: "Family-focused" },
    { value: "children-focused", label: "Children-focused" },
  ];
  useEffect(() => {
    axiosClient
      .get("/cities")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      keyword: "",
      distance: "",
      categories: "",
    },
  });

  const onSubmit = (data) => {
    data.categories = categories;
    data.distance = distance;

    const geolocationAPI = navigator.geolocation;

    if (!geolocationAPI) {
      setError("Geolocation API is not available in your browser!");
      return;
    }

    geolocationAPI.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setFilters(
          `${
            distance
              ? `distance=${distance}&lng=${longitude}&lat=${latitude}}`
              : ""
          }${data.categories ? `&categories=${data.categories}` : ""}${
            city._id
              ? `&city=${city._id}&cityLng=${city.coordinates?.[0]}&cityLat=${city.coordinates?.[1]}`
              : ""
          }${date?.startDate ? `&startDate=${date?.startDate}` : ""}${
            date?.endDate ? `&endDate=${date?.endDate}` : ""
          }`
        );
      },
      (error) => {
        setError("Something went wrong getting your position!");
      }
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border shadow-md rounded-xl  p-5"
        style={{ boxShadow: "0 4px 6px -1px #BDB2C9" }}
      >
        <h1 className="max-w-2xl text-2xl font-bold text-center md:text-left lg:text-left mb-8">
          Filter
        </h1>

        <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            Distance (km)
          </label>

          <Select
            options={distanceOptions}
            onChange={(value) => setDistance(value.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></Select>
        </div>
        <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            City
          </label>

          <Select
            options={cities.map((city) => ({
              value: {
                name: city.name,
                coordinates: city.coordinates,
                _id: city._id,
              },
              label: city.name,
            }))}
            onChange={(value) => setCity(value.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></Select>
        </div>
        <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            Categories
          </label>
          <Select
            options={options}
            isMulti
            onChange={(value) => setCategories(value.map((item) => item.value))}
          />
        </div>
        <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            Date
          </label>
          <Datepicker
            value={date}
            minDate={moment().toDate()}
            onChange={handleValueChange}
            containerClassName="relative bg-gray-50 border border-gray-300 text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="text-center">
          <SecondaryBtn text="Filter" />
        </div>
      </form>
    </>
  );
}
