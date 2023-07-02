"use client";

import React, { useState } from "react";

import { validationSchema } from "./validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import toast from "react-hot-toast";

const options = ["Option 1", "Option 2"];

type FormValues = {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      resetForm();
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        business: "",
        service: "",
        email: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handleSubmit}
    >
      <div className="w-full justify-center">
        <div className="max-w-450px text-white w-full justify-center items-center">
          <Form>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-11 sm:gap-0 sm:w-full md:w-full lg:w-full xl:w-full">
              <div className="relative w-full sm:col-span-2 sm:mb-3">
                <label className="block text-lg font-semibold">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`
                  w-full ring-dark-50 border-dark-50 border ring-1 sm:ring-1 mt-1 ring-inset focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
                `}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-300 absolute"
                />
              </div>
              <div className="relative w-full sm:col-span-2 sm:mt-4 sm:mb-3">
                <label className="block text-lg font-semibold">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`
                  w-full ring-dark-50 ring-1 mt-1 border-dark-50 border-[1px] ring-inset focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
                `}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-300 absolute"
                />
              </div>
              <div className="w-full col-span-2 sm:mb-3">
                <div className="mt-8 sm:mt-4 sm:mb-4 relative">
                  <label className="block mb-3 text-lg font-semibold">
                    Business Name
                  </label>
                  <Field
                    id="business"
                    type="text"
                    name="business"
                    className={`
                  w-full ring-dark-50 ring-1 ring-inset border-dark-50 border focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
                `}
                  />
                  <ErrorMessage
                    name="business"
                    component="div"
                    className="text-red-300 absolute"
                  />
                </div>
              </div>
              <div className="w-full col-span-2 sm:mb-3">
                <div className="mt-8 sm:mt-0 relative">
                  <label className="block text-lg mb-3 font-semibold">
                    Interested Service
                  </label>
                  <Field
                    as="select"
                    name="service"
                    id="service"
                    className={`
                        w-full ring-dark-50 ring-1 mt-1 border-dark-50 border-[1px] ring-inset focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl shadow-2xl drop-shadow-2xl bg-black py-3 px-6  text-base
                      `}
                  >
                    <option value="" className="text-base p-3">
                      Select an option
                    </option>
                    {options.map((option, index) => (
                      <option className="text-base" key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="text-red-300 absolute"
                  />
                </div>
              </div>
              <div className="w-full col-span-2 sm:mb-3">
                <div className="mt-8 sm:mt-0 relative">
                  <label className="block mb-3 text-lg font-semibold">
                    Message
                  </label>
                  <Field
                    name="message"
                    id="message"
                    as="textarea"
                    rows={4}
                    className={`
                  w-full ring-dark-50 ring-1 ring-inset border-dark-50 border focus:ring-[#4A6CF7] focus:ring-[3px] outline-none rounded-2xl bg-black py-3 px-6 text-base
                `}
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-300 absolute"
                  />
                </div>
              </div>
              <div className="px-1 w-full col-span-2 sm:mt-4 sm:mb-8 mt-8 mb-8">
                <button
                  type="submit"
                  className={`bg-blue text-white px-4 py-2 rounded-md w-full text-base font-medium bg-[#4a6cf7] transition duration-200 ease-in-out`}
                >
                  <span className="shadow-2xl drop-shadow-2xl">Submit</span>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default ContactForm;
