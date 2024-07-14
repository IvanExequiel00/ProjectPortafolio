"use client";
import CardPresentacion from "@/components/CardPresentacion/card-presentacion";

import Header from "@/components/navbar";
import ParticlesComponent from "@/components/particles-component";

import CarruselContainer from "@/components/carrusel-container";
import MovilCarrusel from "@/components/mobile-carusel";

export default function Home() {
  

 
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  z-10 w-full ">
        <CardPresentacion />
      </div>
      <ParticlesComponent />

      <div className="pt-20 flex flex-col justify-center bg-gray-900  pb-40">
        <div className="flex justify-center">
          <h3 className="text-white transition-all ease-out active:p-4 active:delay-200 text-center text-3xl mb-6 font-sans border-2 rounded-full w-52">
            Projects
          </h3>
        </div>

        

        <div className=" flex items-center justify-center ">
          <CarruselContainer />
        </div>
        
      </div>
    </div>
  );
}
