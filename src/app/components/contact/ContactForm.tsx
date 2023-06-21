"use client"

import { useState, ChangeEvent, FocusEvent } from "react";
import { sendContactForm } from "@/src/app/components/libs/api";

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

    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="">
      <div className="max-w-450px mt-12 text-white">
        <h1 className="mb-5">Contact</h1>
        {error && (
          <p className="text-red-300 my-4 text-xl">{error}</p>
        )}
        <div className={`mb-5 ${touched.name && !values.name ? 'border-red-300' : ''}`}>
          <label className="block">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            className={`border ${touched.name && !values.name ? 'border-red-300' : ''}`}
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          {touched.name && !values.name && (
            <p className="text-red-300">Required</p>
          )}
        </div>
        <div className={`mb-5 ${touched.email && !values.email ? 'border-red-300' : ''}`}>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className={`border ${touched.email && !values.email ? 'border-red-300' : ''}`}
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          {touched.email && !values.email && (
            <p className="text-red-300">Required</p>
          )}
        </div>
        <div className={`mb-5 ${touched.subject && !values.subject ? 'border-red-300' : ''}`}>
          <label className="block">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Business Website Inquiry"
            className={`border ${touched.subject && !values.subject ? 'border-red-300' : ''}`}
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          {touched.subject && !values.subject && (
            <p className="text-red-300">Required</p>
          )}
        </div>
        <div className={`mb-5 ${touched.message && !values.message ? 'border-red-300' : ''}`}>
          <label className="block">Message</label>
          <textarea
            name="message"
            rows={4}
            className={`border text-white ${touched.message && !values.message ? 'border-red-300' : ''}`}
            placeholder="Hey I'm liking the looks of your services, and my business could really do with a website. Please reply ASAP."
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          ></textarea>
          {touched.message && !values.message && (
            <p className="text-red-300">Required</p>
          )}
        </div>
        <button
          className="border bg-blue text-white px-4 py-2 rounded-md"
          disabled={!values.name || !values.email || !values.subject || !values.message}
          onClick={onSubmit}
        >
          {isLoading && (
            <span className="animate-spin mr-2">Loading...</span>
          )}
          Submit
        </button>
      </div>
    </div>
  );
}
