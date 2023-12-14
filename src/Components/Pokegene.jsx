// import React from "react";
import pokemon from "/images/pokemon-gene-simmons-1.png";
import playPokemon from "/images/pokemon-gene-simmons-2.png";


const Pokegene = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-black from-50% to-slate-600 md:flex-row">
        <img className="md:ml-7" src={pokemon} />
        <div className="text-white text-center leading-relaxed m-4">
          <h2 className="text-3xl font-medium mb-4 md:mb-10 md:text-4xl">Obstagoon</h2>
          <p className="text-lg md:mr-7 md:text-3xl">
            Pokémon inspirado por la banda Kiss, de la octava generación con su
            característica lengua fuera similar a Gene Simmons; el cual es de gran agrado para los integrantes de la banda.
          </p>
        </div>
        
      </section>
      <section className="bg-black">
        <img
        className="p-2 md:p-10"
        src={playPokemon} />
      </section>
    </>
  );
};

export default Pokegene;
