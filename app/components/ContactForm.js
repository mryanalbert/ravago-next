"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [capVal, setCapVal] = useState(null);
  const recaptchaRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      if (!capVal) {
        alert("Please verify you are a human.");
        return;
      }

      console.log(data);
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptchaToken: capVal }),
      });

      if (res.ok) {
        const resData = await res.json();
        // console.log(resData);

        if (resData?.message === "Emails sent successfully!") {
          reset();
          recaptchaRef.current.reset();
          alert("Message sent successfully!");
        }
        return;
      }
      alert("Something went wrong, please try again.");
    } catch (error) {
      // console.error("Error submitting form:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Send us a message
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Contact number
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Contact number is required",
              //   pattern: {
              //     value: /^\+?[1-9]\d{1,14}$/,
              //     message: "Invalid phone number format",
              //   },
            })}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Message
          </label>
        </div>
        <div className="mt-1">
          <textarea
            name="message"
            id="message"
            {...register("message", { required: "Message cannot be empty" })}
            className="h-18 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="w-full">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          onChange={(val) => setCapVal(val)}
          ref={recaptchaRef}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isSubmitting ? (
            <span className="animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </span>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </form>
  );
}
