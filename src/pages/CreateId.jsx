import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/AppContext";
import { toast } from "react-toastify";

const CreateId = () => {
  const navigate = useNavigate();

  const { registeredUsser, setRegisteredUser, setLoggedInUsers } =
    useContext(MyStore);

  const [userExists, setUserExists] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const submit = (data) => {
    let user = registeredUsser.find((val) => val.email === data.email);

    if (user) {
      setUserExists(true);
      return;
    }

    let arr = [...registeredUsser, data];

    setRegisteredUser(arr);

    localStorage.setItem("registeredUser", JSON.stringify(arr));

    localStorage.setItem("LoggedInUser", JSON.stringify(data));

    setLoggedInUsers(data);

    toast.success("Account Created", {
      theme: "dark",
    });

    navigate("/main");
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-lime-400 p-3 rounded-2xl">
          <Zap className="text-black" size={22} />
        </div>

        <h1 className="text-3xl font-bold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(submit, onError)}
          className="bg-zinc-950 border border-zinc-800 rounded-4xl p-6 flex flex-col gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Create account</h1>

            <p className="text-zinc-500 mt-1">
              Join SkyMart and start shopping
            </p>
          </div>

          {userExists && (
            <div className="p-3 rounded-xl border border-red-500 bg-red-500/10 text-red-400 text-sm">
              User already exists. Please use a different email.
            </div>
          )}

          {/* Name */}

          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">
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

          {/* Email */}

          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">
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

          {/* Password */}

          <div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">
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
                placeholder="Password"
                className="bg-transparent outline-none text-white w-full"
              />

              <Eye size={20} className="text-blue-500" />
            </div>

            {/* Password Bar */}

            {password && (
              <div className="mt-3 w-[95%] p-4 flex gap-4 justify-center items-center">
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${
                      password.length < 6
                        ? "bg-red-500 w-1/3"
                        : password.length < 8
                          ? "bg-yellow-400 w-2/3"
                          : "bg-green-500 w-full"
                    }`}
                  ></div>
                </div>

                <p
                  className={`text-xs sm:text-sm font-semibold mt-1 ${
                    password.length < 6
                      ? "text-red-500"
                      : password.length < 8
                        ? "text-yellow-400"
                        : "text-green-500"
                  }`}
                >
                  {password.length < 6
                    ? "Weak"
                    : password.length < 8
                      ? "Average"
                      : "Strong"}
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}

          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">
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

          <button
            type="submit"
            className="w-full bg-[#C8F400] hover:bg-lime-300 text-black font-bold text-lg py-3 rounded-2xl flex items-center justify-center gap-3"
          >
            Create Account
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-zinc-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-lime-400 font-semibold cursor-pointer"
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
