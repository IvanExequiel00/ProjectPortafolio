"use client";
import CardPresentacion from "@/components/CardPresentacion/card-presentacion";

import ModalA from "@/components/grid-container";
import Header from "@/components/navbar";
import ParticlesComponent from "@/components/particles-component";
import projects from "@/public/projects";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

projects.map((pro, index) => {
  console.log(pro.imagenSrc)
})
console.log()
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  z-10 w-full ">
        <CardPresentacion />
      </div>
      <ParticlesComponent />

      <div className="pt-20 flex flex-col justify-center bg-gray-900  pb-40">
        <h3 className=" text-white  text-center text-3xl mb-6 font-sans">Projects</h3>
        <div className="mt-10 h-full w-full m-10 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
          
        </div>

        <div className="flex items-center justify-center">
<Carousel className="w-full max-w-screen-sm flex justify-center">
      <CarouselContent className="w-full">
      {
    projects.map((pro, index) =>(
      <CarouselItem key={pro.id}>
        <ModalA  project={pro} key={index}/>
      </CarouselItem>
      
      
    ))
  }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
      
      </div>

   
    </div>
  );
}
