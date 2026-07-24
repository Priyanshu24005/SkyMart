import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { MyStore } from "../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const { loggedInUsers, setLoggedInUsers } = useContext(MyStore);
  let registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];

  console.log(loggedInUsers);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    let user = registeredUser.find(
      (val) => val.email === data.email && val.password === data.password,
    );

    if (user) {
      localStorage.setItem("LoggedInUser", JSON.stringify(user));
      setLoggedInUsers(user);

      toast.success("Logged In Successfully", {
        theme: "dark",
      });

      navigate("/main");
    } else {
      toast.error("User not found. Please create an account first.", {
        theme: "dark",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full h-[90vh] max-w-[1600px] border border-zinc-800 rounded-3xl overflow-hidden flex text-white">
        {/* Left Side */}
        <div className="hidden lg:flex w-[50%] border-r border-zinc-800 px-12 py-10 flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C8F400] flex items-center justify-center">
                <Zap size={24} className="text-black" />
              </div>

              <h1 className="text-3xl font-bold">
                Sky<span className="text-[#C8F400]">Mart</span>
              </h1>
            </div>

            <p className="text-[#C8F400] font-semibold tracking-wider mt-16">
              WELCOME BACK
            </p>

            <h1 className="text-5xl font-bold leading-tight mt-4">
              Shop the future.
              <br />
              <span className="text-[#C8F400]">Today.</span>
            </h1>

            <p className="text-zinc-500 text-lg mt-6 max-w-xl">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-zinc-700 rounded-3xl p-5 text-center">
              <h2 className="text-[#C8F400] text-2xl font-bold">20K+</h2>
              <p className="text-zinc-500 mt-1">Products</p>
            </div>

            <div className="border border-zinc-700 rounded-3xl p-5 text-center">
              <h2 className="text-[#C8F400] text-2xl font-bold">50K+</h2>
              <p className="text-zinc-500 mt-1">Users</p>
            </div>

            <div className="border border-zinc-700 rounded-3xl p-5 text-center">
              <h2 className="text-[#C8F400] text-2xl font-bold">4.9★</h2>
              <p className="text-zinc-500 mt-1">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[50%] flex items-center justify-center px-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-4xl p-6"
          >
            <h1 className="text-3xl font-bold">Sign in</h1>

            <p className="text-zinc-500 text-sm mt-2 mb-6">
              Enter your credentials to continue
            </p>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center gap-3 bg-[#d8dde8] border-2 border-[#C8F400] rounded-2xl px-4 py-3">
                <Mail size={18} className="text-zinc-400" />

                <input
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid Email",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent outline-none text-black w-full"
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="flex items-center gap-3 bg-[#d8dde8] rounded-2xl px-4 py-3">
                <Lock size={18} className="text-zinc-400" />

                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 Characters Required",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none text-black w-full"
                />

          
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8F400] hover:bg-lime-300 text-black font-bold text-lg py-3 rounded-2xl flex items-center justify-center gap-2 transition"
            >
              Sign in
              <ArrowRight size={20} />
            </button>

            <p className="text-center text-zinc-500 mt-6 text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-[#C8F400] font-semibold cursor-pointer"
              >
                Create one
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
