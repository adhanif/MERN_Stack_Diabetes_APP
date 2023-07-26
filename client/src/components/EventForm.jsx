import { useState } from "react";
import OutlineBtn from "./buttons/OutlineBtn";
import PrimaryBtn from "./buttons/PrimaryBtn";
import { useForm } from "react-hook-form";
import { postEvent } from "../utils/axiosFunctions";
import SecondaryBtn from "./buttons/SecondaryBtn";
import Select from "react-select";

export default function EventForm({ theme }) {
  const [categories, setCategories] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("eventDate", data.eventDate);
    formData.append("address", data.address);
    formData.append("targetGroup", data.targetGroup);
    formData.append("eventInfo", data.eventInfo);
    formData.append("categories", JSON.stringify(categories));
    // event.preventDefault();
    // console.log(event);
    console.log(categories);
    postEvent(formData);
  };
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

  return (
    <div
      className={`${theme} fluid mx-auto p-6 md:p-14 flex justify-center bg-skin-fill`}
    >

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 ">
        <div className="w-full overflow-hidden">
          <img src="/src/images/20220415_151625.jpg" alt="bla" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2  shadow flex flex-col justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-8 py-6 h-full"
        >
          <h1 className="max-w-2xl text-3xl font-bold my-10 text-skin-base">
            Post an Event
          </h1>

          {/* Title */}
          <div className="mb-4">
            <label
              className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
              htmlFor="title"
            >
              What?
            </label>
            <input
              {...register("title", {
                required: {
                  value: true,
                  message: "* Title is required",
                },
              })}
              className=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Soccer Match, Theater Play, etc."
            />
            <p className="text-skin-form-error italic">
              {errors.title?.message}
            </p>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label
              className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
              htmlFor="eventDate"
            >
              When?
            </label>
            <input
              {...register("eventDate", {
                required: {
                  value: true,
                  message: "* Date is required",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="eventDate"
              name="eventDate"
              placeholder=""
            />
            <p className="text-skin-form-error italic">
              {errors.eventDate?.message}
            </p>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
              htmlFor="address"
            >
              Where?
            </label>
            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "* Location is required",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="address"
              name="address"
              placeholder="e.g. Main Street 3, 10100 City"
            />
            <p className="text-skin-form-error italic">
              {errors.location?.message}
            </p>
          </div>

          {/* Target Group */}
          <div className="mb-4">
            <label
              className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
              htmlFor="targetGroup"
            >
              For Whom?
            </label>
            <input
              {...register("targetGroup", {
                required: {
                  value: true,
                  message: "* Target Group is required to get an Answer",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="targetGroup"
              name="targetGroup"
              placeholder="e.g. kids 6-18, everyone, etc."
            />
            <p className="text-skin-form-error italic">
              {errors.targetGroup?.message}
            </p>
          </div>

          {/* Categories / Tags */}
          <label
            className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
            htmlFor="categoryTag"
          >
            Choose Categories
          </label>
          <Select
            options={options}
            isMulti
            onChange={(value) => setCategories(value.map((item) => item.value))}
          />
          {/* <p className="text-skin-form-error italic">
              {errors.categories?.message}
            </p> */}

          {/* Registration */}
          {/* <div className='mb-4'>

            <label
              className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'
              htmlFor='registration'
            >
              Registration needed?
            </label>
            <input
              {...register('registration')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline '
              type='text'
              id='registration'
              name='registration'
              placeholder='yes, no, etc.'
            />
            <p className='text-skin-form-error italic'>
              {errors.registarion?.message}
            </p>
          </div> */}

          {/* Further Information */}
        
            <label
              className="text-sm md:text-base lg:text-xl font-bold text-skin-base"
              htmlFor="eventInfo"
            >
              What else?
            </label>
            
            <textarea
              {...register("eventInfo")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-skin-base leading-tight focus:outline-none focus:shadow-outline"
              name="eventInfo"
              id="eventInfo"
              placeholder="Anything else the guests have to know?"
              cols="30"
              rows="5"
            ></textarea>
            <p className="text-skin-form-error italic">
              {errors.eventInfo?.message}
            </p>

          <input type="file" {...register("image", { required: true })} />
       
          
          {/* <OutlineBtn text='Sign in with Google' /> */}
          <SecondaryBtn text="Submit" />
        </form>

      </div>
    </div>
  );
}
