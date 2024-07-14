import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projects from "@/public/projects";
import ModalA from "./grid-container";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";

const CarruselContainer = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );


  return (
    <div>
      <Carousel
        orientation="horizontal"
        plugins={[plugin.current]}
        className="w-full max-w-screen-sm  justify-center hidden lg:flex"
      >
        <CarouselContent className="w-full">
          {projects.map((pro, index) => (
            <CarouselItem key={pro.id}>
              <ModalA project={pro} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex justify-center items-center max-w-xs lg:hidden overflow-auto">
        <Carousel plugins={[plugin2.current]} className="w-full max-w-sm ">
          <CarouselContent>
            {projects.map((pro, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-[22rem]"> 
                    <CarouselItem key={pro.id}>
                      <CardContent className="flex aspect-square  p-3">
                        <div>
                          <h4 className="float-left text-lg m-3">{pro.name}</h4>
                          <p className="text-sm">{pro.description}</p>
                          <hr className="my-1"/>
                          <p>Teconologias:</p>
                          <ul className=" flex flex-wrap mt-1 gap-2 overflow-auto ">
                            {pro.technologies.map((tech, index) => (
                              <li
                                key={index}
                                className=" border-2 rounded-lg text-xs  border-black p-1 overflow-auto"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </CarouselItem>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CarruselContainer;
