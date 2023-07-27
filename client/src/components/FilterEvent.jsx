import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import axiosClient from "../axiosClient";
export default function FilterEvent({ setPath }) {
  const [categories, setCategories] = useState(null);
  const [distance, setDistance] = useState(null);

  const distanceOptions = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "30" },
    { value: 100, label: "40" },
    { value: 500, label: "50" },
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
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
    // setPath(`/events?keyword=${data.keyword}`);
    setPath(`/events?distance=${distance}&categories=${data.categories}`);
    // distance=data.distance;

    //   console.log(data);
    //   axiosClient
    //     .get(
    //       `/events/near-by?keyword=${data.keyword}&distance=${distance}&categories=${data.categories}`
    //     )
    //     .then((res) => {
    //       setEvents(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border shadow-md rounded  p-5"
        style={{ boxShadow: "0 4px 6px -1px #BDB2C9" }}
      >
        <h1 className="max-w-2xl text-2xl font-bold text-center md:text-left lg:text-left mb-8">
          Filter
        </h1>
        {/* <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            Keyword
          </label>
          <input
            {...register("keyword", {
              maxLength: { value: 30, message: "Maximum length is 30" },
            })}
            type="text"
            placeholder="Keyword"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:border-gray-600 leading-tight focus:outline-none  focus:ring-2 focus:border-blue-500 `}
          />
        </div> */}
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
        <div className="mb-20 ">
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
        <div className="text-center">
          <button
            className="p-2 w-32   font-bold text-white rounded-full bg-black hover:bg-red-500  hover:scale-110 mb-8 "
            type="submit"
          >
            {" "}
            Filter
          </button>
        </div>
      </form>
    </>
  );
}
