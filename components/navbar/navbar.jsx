"use client";

import { HiBars3 } from "react-icons/hi2";
import { useState, useEffect } from "react";
import logo from "../../public/logo-perusahaan.png";
import Image from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";

function NavbarComponent() {
  const navbar_list = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Tentang Kami",
      link: "/tentang-kami",
    },
    {
      name: "Program",
      link: "/program",
    },
    {
      name: "Mitra Agen",
      link: "/mitra-search",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToUp(true);
      } else {
        setToUp(false);
      }
    });
  }, []);

  const [ToUp, setToUp] = useState(false);
  const [bars, setbars] = useState(false);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white sticky w-full z-20 top-0 left-0 shadow-lg ">
      <div className=" bg-white md:bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center">
          <Image
            src={logo}
            width={47}
            className="me-2 w-full h-auto"
            alt="logo travel"
          />
          <span className="self-center text-sm font-semibold whitespace-nowrap">
            ADA <br /> TOUR & TRAVEL
          </span>
        </a>
        <div className="flex md:order-2 md:hidden">
          <button
            onClick={() => {
              setbars(!bars);
            }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            bars ? "top-12" : "-top-64"
          } items-center justify-between w-full -z-20 md:z-20 absolute duration-1000 md:static left-0 md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-gray-50 md:flex-row md:space-x-7 md:mt-0 md:border-0 md:bg-white ">
            {navbar_list.map((e, index) => {
              return (
                <li key={index} className="ms-auto">
                  <a
                    href={e.link}
                    className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    {e.name}
                  </a>
                </li>
              );
            })}

            <li className="pt-4 md:pt-0 ms-auto">
              <a
                href="/login"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
      {ToUp && (
        <button
          className="fixed left-[80%] top-[87%] lg:left-[94%] lg:top-[88%] p-2 rounded-md bg-blackTransparent"
          onClick={scrollUp}
        >
          <AiOutlineArrowUp size={27} color="white" />
        </button>
      )}
    </nav>
  );
}

export default NavbarComponent;
