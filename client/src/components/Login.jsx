import React from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../axiosClient";
export default function Login() {
  // axiosClient.get("/auth/profile");

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

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: true,
        })}
        placeholder="Email"
      />
      <p style={{ color: "red" }}>{errors.name?.message}</p>

      {/* {errors.email && <span>This field is required</span>} */}
      <input
        {...register("password", {
          required: true,
          minLength: { value: 8, message: "Manimum length is 8" },
        })}
        placeholder="password"
      />
      <p style={{ color: "red" }}>{errors.name?.message}</p>
      {/* {errors.password && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}
