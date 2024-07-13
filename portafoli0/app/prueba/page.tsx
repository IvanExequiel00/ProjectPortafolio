import ModalA from "@/components/grid-container";
import projects from "@/public/projects";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Prueba = () =>{
    return(
      <div className="flex items-center justify-center">
<Carousel className="w-full max-w-screen-md flex justify-center">
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
      

    )
}

export default Prueba;

{/* <div className="flex justify-center gap-3 flex-wrap">
  {
    projects.map((pro, index) =>(
      
      <ModalA  project={pro} key={index}/>
      
    ))
  }


</div> */}