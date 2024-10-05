import projects from "@/public/projects";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent } from "./ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
type Project = {
  project: any;
};

const ModalA = ({ project }: Project) => {
 
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="min-h-screen flex items-center bg-gray-950 rounded-xl">
      <div className="flex-1 max-w-screen-sm mx-auto p-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <li className="col-span-2 bg-gray-800 rounded-lg shadow-xl border-gray-600 border-2">
            <div className="h-24 flex items-center justify-center">
              <p className="text-3xl text-white font-sans">{project.name}</p>
            </div>
          </li>
          <li className="col-start-1 col-span-1 row-start-1 row-span-11 border-2 border-gray-600 bg-gray-800 rounded-lg shadow-xl">
            <div>
              <p className="text-center text-xl text-white font-sans">
                Tecnologías
              </p>
              <ul className="flex flex-wrap gap-3 text-xs p-2 text-white font-sans mt-4 cursor-pointer">
                {project.technologies.map((tech: any, index: any) => (
                  <li
                    key={index}
                    className="border-2 rounded-xl p-1 border-gray-500 hover:border-gray-300 cursor-pointer"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="col-span-2 row-span-10 bg-gray-800 rounded-lg shadow-xl border-gray-600 border-2 w-full h-full">
            <div className="flex justify-center w-full h-full">
              {project.id === 5 ? (
                <Carousel
                 orientation="horizontal"
                plugins={[plugin.current]}
                >
                  <CarouselContent>
                    {project.imageSrc?.map((img: any, index : any) => (
                      <Image
                        key={index}
                        className="flex w-full h-full"
                        alt={`project-image-${index}`}
                        src={img}
                        width={450}
                        height={150}
                      />
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                <Image
                  className="flex w-fit h-full"
                  alt="project-image"
                  src={project.imagenSrc}
                  width={450}
                  height={150}
                />
              )}
            </div>
          </li>
          <li className="col-span-2 bg-gray-800 rounded-lg shadow-xl border-gray-600 border-2">
            <div className="p-3">
              <p className="text-white text-md font-sans">
                {project.description}
              </p>
            </div>
          </li>
          <li className="col-span-1 bg-gray-800 rounded-lg shadow-xl border-gray-600 border-2">
            <div className="h-24 text-white flex items-center justify-center">
              <Link href="https://github.com/IvanExequiel00">
                <button
                  type="button"
                  className="font-semibold font-sans w-20 md:w-20 h-12 px-8 rounded-lg bg-slate-600 text-primary-foreground hover:bg-slate-400/90 border-slate-500 border-b-4 active:border-b-0 text-white flex justify-center items-center gap-3"
                >
                  <Image
                    className="pr-0"
                    height={20}
                    width={20}
                    alt="GitHub"
                    src="/github-svgrepo-com.svg" // Actualiza la ruta del icono según corresponda
                  />
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalA;
