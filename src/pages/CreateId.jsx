import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const CreateId = () => {
  let navigate = useNavigate();
  const [userExists, setuserExists] = useState();
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  let submit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (
      existingUser.password === data.password ||
      existingUser.email === data.email
    ) {
      setuserExists("User already exists");
      return;
    }
    setuserExists("");
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/Home");
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

          {userExists && (
            <div className="flex items-center gap-3 w-full p-3 rounded-lg border border-red-500 bg-red-500/10 text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                />
              </svg>

              <p className="text-sm font-medium">
                User already exists. Please use a different email.
              </p>
            </div>
          )}

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
            <span
              className="text-lime-400 font-semibold cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateId;
