import CardPresentacion from "@/components/CardPresentacion/card-presentacion";
import Header from "@/components/navbar";
import ParticlesComponent from "@/components/particles-component";
import ProjectBox from "@/components/project-box";


export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  z-10 w-full ">
        <CardPresentacion />
      </div>
      <ParticlesComponent />
      
      <div className="pt-20  bg-black">
        <h3 className="bg-black text-white text-center text-3xl mb-6">Projects</h3>
        <div className="bg-black  h-full w-full 
        mr-6
        justify-between  grid grid-cols-1 md:gridd-cols-2 lg:grid-cols-3 gap-x-0 gap-y-10 pb-10" >
       
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        
      </div>
      </div>
      

      {/* <CardPresentacion /> */}
    </div>
  );
}
