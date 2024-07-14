import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

type Project = {
  project: any;
};


const MovilCarrusel = ({project}:Project) => {
  const plugin = React.useRef(
    Autoplay({ delay: 500, stopOnInteraction: true })
  );
  return (
    <div className="flex justify-center items-center max-w-xs">
      <Carousel plugins={[plugin.current]} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square  p-6">
                    <div>
                      <h4 className="float-left text-xl m-3"> Questie</h4>
                      <p className="text-sm">
                        Desarrollé un gestor de turnos utilizando TypeScript
                        para el lenguaje de programación, React para el
                        desarrollo del front-end, Express para el lado del
                        servidor, y TypeORM para gestionar las tablas con
                        PostgreSQL como base de datos
                      </p>

                      <ul className="flex flex-wrap gap-5 w-f mt-3">
                        <li className="border-2 rounded-e-md">
                          Tecnologias111
                        </li>
                        <li className="border-2 rounded-e-md">
                          Tecnologias111
                        </li>
                        <li className="border-2 rounded-e-md">
                          Tecnologias111
                        </li>
                        <li className="border-2 rounded-e-md">
                          Tecnologias111
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MovilCarrusel;
