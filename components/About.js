import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="my-16 lg:my-32 flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-3xl text-slate-900 tracking-wider uppercase mb-2">
        Melaku Bireda
      </h1>
      <h2 className="font-semibold text-lg text-gray-500 mb-4">
        Award Winning Artist
      </h2>
      <article className="w-2/3 lg:w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis
        repudiandae repellendus provident, laudantium dignissimos nostrum
        explicabo quam excepturi tenetur quia unde ipsa cum eaque. Vitae
        voluptatibus nam harum quae?
      </article>
    </div>
  );
}
