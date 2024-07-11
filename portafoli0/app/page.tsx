import CardPresentacion from "@/components/CardPresentacion/card-presentacion";
import Header from "@/components/navbar";
import ParticlesComponent from "@/components/particles-component";


export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  z-10 w-full ">
        <CardPresentacion />
      </div>
      <ParticlesComponent />

      <div className="bg-black w-full h-[400px]" >
        a
      </div>

      {/* <CardPresentacion /> */}
    </div>
  );
}
