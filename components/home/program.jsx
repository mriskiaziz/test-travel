"use client";
import Image from "next/image";
import brosur from "../../public/example-brosur.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProgramHomeComponent() {
  const program = [
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
    {
      image: "tes",
      nama: "test",
    },
  ];

  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full py-12 px-3 lg:px-12 bg-slate-100">
      <div className="text-xl font-medium p-3 md:pb-12">Program</div>

      <div className="relative flex items-center lg:mx-4 pb-7">
        <button onClick={sliderLeft} className="hidden lg:flex">
          <BsChevronLeft size={35} />
        </button>
        <div
          id="slider"
          className="w-full h-full no-scrollbar overflow-x-scroll scroll-smooth whitespace-nowrap lg:mx-2 "
        >
          {program.map((e, i) => {
            return (
              <Image
                width={0}
                height={0}
                alt={e.nama}
                src={brosur}
                key={i}
                className="w-[200px] md:w-[300px] inline-block p-2 cursor-pointer mr-4"
              />
            );
          })}
        </div>
        <button onClick={sliderRight} className="hidden lg:flex">
          <BsChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export default ProgramHomeComponent;
