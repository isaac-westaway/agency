"use client";

import { useState, ChangeEvent, FocusEvent } from "react";
import { sendContactForm } from "@/src/app/components/libs/api";
import toast from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  subject: string;
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
  subject: "",
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
    <div className="w-full flex justify-center flex-col">
      <div className="max-w-450px my-8 text-white w-full flex justify-center items-center flex-col">
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col gap-3 px-4 sm:w-full md:w-full lg:w-full xl:w-full sm:px-[35px] md:px-[35px] lg:px-[35px] xl:px-[35px]">
          <div
            className={`mb-5 ${
              touched.name && !values.name ? "border-red-300" : ""
            }`}
          >
            <label className="block mb-3 text-2xl font-semibold">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              name="name"
              className={`w-full border border-transparent shadow-2xl drop-shadow-2xl dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary ${
                touched.name && !values.name ? "border-red-300" : ""
              }`}
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {touched.name && !values.name && (
              <p className="text-red-300">Required</p>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-3 text-2xl font-semibold">
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className={`w-full border border-transparent shadow-2xl drop-shadow-2xl dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary ${
                touched.email && !values.email ? "border-red-300" : ""
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {touched.email && !values.email && (
              <p className="text-red-300">Required</p>
            )}
            {touched.email && values.email && !isValidEmail(values.email) && (
              <p className="text-red-300">Invalid email format</p>
            )}
          </div>
        </div>
        <div className="w-full px-[35px]">
          <div
            className={`mb-5 ${
              touched.subject && !values.subject ? "border-red-300" : ""
            }`}
          >
            <label className="block mb-3 text-2xl font-semibold">
              Your Email Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Business Website Inquiry..."
              className={`w-full border border-transparent shadow-2xl drop-shadow-2xl dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary ${
                touched.subject && !values.subject ? "border-red-300" : ""
              }`}
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            {touched.subject && !values.subject && (
              <p className="text-red-300">Required</p>
            )}
          </div>
        </div>
        <div className="w-full px-[35px]">
          <div
            className={`mb-5 ${
              touched.message && !values.message ? "border-red-300" : ""
            }`}
          >
            <label className="block mb-3 text-2xl font-semibold">Message</label>
            <textarea
              name="message"
              rows={4}
              className={`w-full border border-transparent shadow-2xl drop-shadow-2xl dark:bg-[#242B51] rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary text-white bg-black flex ${
                touched.message && !values.message
                  ? "border-red-300 border-[3px]"
                  : ""
              }`}
              placeholder="Hey I'm liking the looks of your services, and my business could really do with a website..."
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            ></textarea>
            {touched.message && !values.message && (
              <p className="text-red-300">Required</p>
            )}
          </div>
        </div>
        <div className="px-[35px] w-full mt-3">
          <button
            className={`bg-blue text-white px-4 py-2 rounded-md w-full text-base font-medium bg-[#4a6cf7] transition duration-200 ease-in-out ${
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message ||
              !isValidEmail(values.email)
                ? "cursor-not-allowed hover:bg-red-300 transition duration-200 ease-in-out "
                : "hover:bg-white hover:text-black hover:fill-black hover:stroke-black stroke-[#fff]"
            }`}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
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
  );
}
