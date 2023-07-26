import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
export default function FilterEvent() {
  const [Categories, setCategories] = useState();
  const [distance, setDistance] = useState();
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
      Categories: "",
    },
  });

  const onSubmit = (data) => {
    data.Categories = Categories;
    data.distance = distance;
    console.log(data);
    // axiosClient
    //   .post("/signup", data)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
        <div className="mb-10 ">
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
        </div>
        <div className="mb-10 ">
          <label className="block text-gray-700 text-medium font-bold mb-3">
            {" "}
            Distance
          </label>
          <Select
            options={distanceOptions}
            onChange={(value) => setDistance(value.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* <Option selected>5</Option>
            <option value="US">10</option>
            <option value="CA">50</option>
            <option value="FR">100</option>
            <option value="DE">500</option> */}
          </Select>
          {/* <input
            {...register("distance", {
              maxLength: { value: 30, message: "Maximum length is 30" },
            })}
            type="text"
            placeholder="Distance"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:ring-2 focus:ring-purple-600 `}
          /> */}
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
            // style={{ backgroundColor: "#383740" }}
          >
            {" "}
            Filter
          </button>
        </div>
      </form>
    </>
  );
}
