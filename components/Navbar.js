import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  const navLinks = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Music",
      link: "#music",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <nav className="">
        {isOpen && (
          <div className="md:hidden fixed py-8 flex flex-col items-center justify-between bg-white z-50 h-screen w-screen">
            <ul className="flex flex-col text-black justify-between items-center font-normal text-2xl">
              {navLinks.map((link, index) => (
                <li key={index} className="mb-7">
                  <a
                    className="hover:text-purple-500"
                    href={link.link}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-row items-center justify-between px-8 lg:px-40 w-full my-6">
          <div className="flex flex-col">
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <FaBars className="text-3xl lg:hidden" />
            </button>
            <a href="#hero" className="hidden lg:block">
              <h1 className="uppercase font-semibold ">Melaku Bireda</h1>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <ul
              className="hidden lg:flex justify-between"
              ref={animationParent}
            >
              {navLinks.map((link, index) => (
                <li key={index} className="mr-12">
                  <a href={link.link} className="uppercase">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="my-1">
              <Image
                src="/images/youtube.png"
                alt="youtube logo"
                width={30}
                height={30}
                layout=""
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
