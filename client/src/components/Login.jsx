import React from "react";
import { useForm } from "react-hook-form";
import google from "../assets/Google_Logo1.svg";
import PrimaryBtn from "./buttons/PrimaryBtn";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    // console.log(formData);
    // axios
    //   .post("http://localhost:3000/login", formData)
    //   .then(() => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axiosClient
    //   .post("/login", data)
    //   .then((res) => {
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <div className="container flex flex-row  mx-auto justify-center md:justify-center mt-10">
        <div className="w-1/2 max-w-md hidden lg:flex">Hello</div>
        <div className="w-full max-w-md md:w-1/2 lg:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="max-w-2xl text-3xl font-bold mb-7">Sign in</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Username
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <p style={{ color: "red" }}>{errors.email?.message}</p>

            {/* {errors.email && <span>This field is required</span>} */}

            <div className="mb-10">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: { value: 6, message: "Manimum length is 6" },
                })}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            </div>

            {/* {errors.password && <span>This field is required</span>} */}
            <div className="flex flex-col items-center justify-between mb-5">
              <button
                className="p-2 w-32   font-bold text-white bg-red-900 rounded-full  hover:bg-red-500  hover:scale-110 mb-6 "
                type="submit"
              >
                {" "}
                Login
              </button>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm font-bold mb-5">
                New User?{" "}
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:underline hover:text-blue-800"
                  href="#"
                  to=""
                  onClick={(handleNavigate) => {
                    navigateToSignUp("/sinUp");
                  }}
                >
                  Create account
                </a>
              </p>
              <button className="flex items-center justify-center p-2 w-80 border shadow font-bold text-black  rounded-full  hover:border-blue-500  mb-6 ">
                {" "}
                <img src={google} alt="" className=" w-10 " />
                Sign in with Google
              </button>
            </div>

            {/* <PrimaryBtn text="Submit" /> */}
            {/* <input type="submit" /> */}
          </form>
        </div>
      </div>
    </>
  );
}
