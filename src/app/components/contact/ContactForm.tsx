"use client";

import { useState, ChangeEvent, FocusEvent } from "react";
import { sendContactForm } from "@/src/app/components/libs/api";
import toast from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  business: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initValues: FormValues = {
  name: "",
  email: "",
  business: "",
  message: "",
};

const initState: FormState = {
  isLoading: false,
  error: "",
  values: initValues,
};

export default function Home() {
  const [state, setState] = useState<FormState>(initState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { values, isLoading, error } = state;

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast.success("Successfully sent email!", {
        duration: 4000,
        position: "top-center",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      console.log("fail");
    }
  };

  return (
    <div className="w-full justify-center">
      <div className="max-w-450px text-white w-full justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-11 sm:gap-0 sm:w-full md:w-full lg:w-full xl:w-full">
          <div className="relative w-full sm:col-span-2 sm:mb-3">
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className={`
              w-full ring-dark-50 border-dark-50 border ring-1 sm:ring-1 mt-1 ring-inset focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
              ${touched.name && !values.name ? "ring-red-300 ring-inset" : ""}
            `}
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {touched.name && !values.name && (
              <p className="text-red-300 absolute">Required</p>
            )}
          </div>
          <div className="relative w-full sm:col-span-2 sm:mt-4 sm:mb-3">
            <label className="block text-lg font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className={`
              w-full ring-dark-50 ring-1 mt-1 border-dark-50 border-[1px] ring-inset focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
              ${touched.email && !values.email ? "ring-red-300 ring-inset" : ""}
            `}
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {touched.email && !values.email && (
              <p className="text-red-300 absolute">Required</p>
            )}
            {touched.email && values.email && !isValidEmail(values.email) && (
              <p className="text-red-300 absolute">Enter a valid email</p>
            )}
          </div>
          <div className="w-full col-span-2 sm:mb-3">
            <div className="mt-8 sm:mt-4 sm:mb-4 relative">
              <label className="block mb-3 text-lg font-semibold">
                Business Name
              </label>
              <input
                type="text"
                name="business"
                className={`
              w-full ring-dark-50 ring-1 ring-inset border-dark-50 border focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
              ${
                touched.business && !values.business
                  ? "ring-red-300 ring-inset"
                  : ""
              }
            `}
                value={values.business}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {touched.business && !values.business && (
                <p className="text-red-300">Required</p>
              )}
            </div>
          </div>
          <div className="w-full col-span-2 sm:mb-3">
            <div className="mt-4 sm:mt-0 relative">
              <label className="block mb-3 text-lg font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className={`
              w-full ring-dark-50 ring-1 ring-inset border-dark-50 border focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl bg-black py-3 px-6 text-base
              ${
                touched.message && !values.message
                  ? "ring-red-300 ring-inset"
                  : ""
              }
            `}
                placeholder="Hey I'm liking the looks of your services, and my business could really do with a website..."
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              ></textarea>
              {touched.message && !values.message && (
                <p className="text-red-300 absolute -mt-[0.4rem]">Required</p>
              )}
            </div>
          </div>
          <div className="px-1 w-full col-span-2 sm:mt-4 sm:mb-8 mt-8 mb-8">
            <button
              className={`bg-blue text-white px-4 py-2 rounded-md w-full text-base font-medium bg-[#4a6cf7] transition duration-200 ease-in-out ${
                !values.name ||
                !values.email ||
                !values.business ||
                !values.message ||
                !isValidEmail(values.email)
                  ? "cursor-not-allowed hover:bg-red-300 transition duration-200 ease-in-out "
                  : "hover:bg-white hover:text-black hover:fill-black hover:stroke-black stroke-[#fff]"
              }`}
              disabled={
                !values.name ||
                !values.email ||
                !values.business ||
                !values.message ||
                !isValidEmail(values.email)
              }
              onClick={onSubmit}
            >
              {isLoading && (
                <div className="cursor-not-allowed flex items-center justify-center">
                  <span className="relative flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-left-9 absolute"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                          <circle
                            className="loader-circle stroke-white stroke-opacity-50"
                            cx="18"
                            cy="18"
                            r="18"
                          />
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="ml-2">Loading...</span>
                </div>
              )}
              {!isLoading && (
                <span className="shadow-2xl drop-shadow-2xl">Submit</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
