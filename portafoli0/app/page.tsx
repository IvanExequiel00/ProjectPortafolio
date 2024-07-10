import CardPresentacion from "@/components/CardPresentacion/card-presentacion";
import Header from "@/components/navbar";
import ParticlesComponent from "@/components/particles-component";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center z-10 w-full">
        <CardPresentacion />
      </div>
      <ParticlesComponent />

      <div className="bg-red-600 w-full h-[400px]" >
        a
      </div>

      {/* <CardPresentacion /> */}
    </div>
  );
}
