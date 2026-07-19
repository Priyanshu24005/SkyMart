import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import {  useNavigate } from "react-router";

const CreateId = () => {
 
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  let submit = (data) => {
    navigate("/Home");
    console.log(data);
    
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <div className="bg-lime-400 p-3 rounded-2xl">
          <Zap className="text-black" size={22} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      <div className="w-full max-w-md ">
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-zinc-950 border border-zinc-800 rounded-4xl p-5 md:p-7 flex flex-col gap-4 "
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
              Create account
            </h1>

            <p className="text-zinc-500 text-sm md:text-base">
              Join SkyMart and start shopping
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 md:px-5 py-3">
              <User size={20} className="text-zinc-500" />

              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
                placeholder="Full name"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 md:px-5 py-3">
              <Mail size={20} className="text-zinc-500" />

              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 md:px-5 py-3">
              <Lock size={20} className="text-zinc-500" />

              <input
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 Characters are Required",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="bg-transparent outline-none text-white w-full"
              />

              <Eye size={20} className="text-blue-500 cursor-pointer" />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 md:px-5 py-3">
              <Lock size={20} className="text-zinc-500" />

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do Not Match",
                })}
                type="password"
                placeholder="Confirm password"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#C8F400] hover:bg-lime-300 text-black font-bold text-lg py-3 rounded-2xl flex items-center justify-center gap-3 transition"
          >
            Create Account
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-sm md:text-base text-zinc-500">
            Already have an account?{" "}
            <span className="text-lime-400 font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateId;
