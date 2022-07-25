import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const copyRightDate = new Date();
  return (
    <div id="footer" className="flex flex-col gap-8">
      <div className="flex flex-row items-center justify-center gap-12">
        <button className="">
          <FaFacebookF className="text-purple-dark text-3xl " />
        </button>
        <button className="">
          <FaYoutube className="text-purple-dark text-3xl" />
        </button>
        <button className="">
          <FaInstagram className="text-purple-dark text-3xl" />
        </button>
      </div>
      <small className="text-center">
        &copy; {copyRightDate.getFullYear()} Melaku Bireda
      </small>
    </div>
  );
}
