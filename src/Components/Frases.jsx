import React from "react";
import data from "./data.jsx";

const Frases = () => {
  const arrayData = data.map((item) => ({
    text: item.text,
    img: item.img,
  }));

  return (
    <section
      id="frases"
      className="flex flex-col justify-center items-center bg-black"
    >
      <h2 className="text-white font-bold text-4xl my-16">Frases</h2>
      {arrayData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col justify-center mx-2 mb-14 items-center md:flex-row">
            <img
              className="w-80 h-80 rounded-full shadow-lg shadow-white md:mr-6"
              src={item.img}
            />
            <p className="bg-gradient-to-b from-slate-700 to-black leading-relaxed rounded-3xl mt-7 shadow-md shadow-white text-white text-lg m-2 p-7 md:m-4 md:float-right md:w-1/2">
              {item.text}
              <h3 className="m-3">Gene Simmons._</h3>
            </p>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Frases;
