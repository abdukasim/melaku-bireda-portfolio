import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mb-32"
    >
      <h1 className="heading-1 mb-10">Contact Us</h1>
      <div className="flex flex-col w-96">
        <label htmlFor="name" className="mb-2">
          Full Name
        </label>
        <input
          type="text"
          className="border-gray-700 border-2 rounded mb-4"
          name="name"
          id="name"
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-gray-700 border-2 rounded mb-4"
        />
        <label htmlFor="message" className="mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="border-gray-700 border-2 rounded mb-4"
        ></textarea>
        <button
          type="submit"
          className="rounded border-2 bg-green-500 text-white uppercase self-start px-2"
        >
          send
        </button>
      </div>
    </div>
  );
}
