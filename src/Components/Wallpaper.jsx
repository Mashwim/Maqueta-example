// import React from "react";
import celImg from "/images/gene-simmons-.jpg";
import pcImg from "/images/gene-simmons-2.jpg";
import { TbArrowBackUp } from "react-icons/tb";
import { BiSquareRounded } from "react-icons/bi";
import { MdOutlineCircle } from "react-icons/md";

const Wallpaper = () => {
  return (
    <>
      <section
        id="wallpaper"
        className="flex items-center w-full bg-black flex-col md:flex-row md:px-24 h-full"
      >
        <div className="flex justify-center items-center relative ... md:py-7 md:w-full">
          <img
            className="border-4 border-white border-x-white shadow-lg shadow-white rounded-3xl w-52 h-5/6 my-7 "
            src={celImg}
          />
          <div className="z-10 text-white text-lg absolute bottom-11 space-x-4 flex flex-row lg:text-2xl lg:space-x-8 md:bottom-24">
            <BiSquareRounded />
            <MdOutlineCircle />
            <TbArrowBackUp />
          </div>
        </div>
        <div className="">
          <p className="text-center  p-7 text-white text-3xl font-semibold leading-relaxed uppercase">
            Wallpaper con estilo de{" "}
            <span className="text-red-800 font-extrabold">Rock and Roll</span>
          </p>
          <img
            className="border-4 ml-8 border-white rounded-3xl shadow-lg shadow-white mx-3.5 mb-12 w-72 md:w-screen md:h-fit"
            src={pcImg}
          />
        </div>
      </section>
    </>
  );
};

export default Wallpaper;
