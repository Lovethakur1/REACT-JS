import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const createAccount = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-lg bg-gray-800 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold text-white leading-tight">
          Sign up to create an account
        </h2>
        <p className="mt-2 text-center text-base text-white">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all text-blue-400 duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createAccount)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              className1="text-white"
              {...register("name", {
                required: "Full Name is required",
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className1="text-white"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email address must be a valid email address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              className1="text-white"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
