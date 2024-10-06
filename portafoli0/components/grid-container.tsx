import projects from "@/public/projects";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent } from "./ui/carousel";
type Project = {
  project: any;
};

const ModalA = ({ project }: Project) => {
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
              <Image
                className="flex w-fit h-full"
                alt="project-image"
                src={project.imagenSrc}
                width={450}
                height={150}
              />
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
             
                
                  {project.demo ? (
                    <Link href={project.demo}>
                    <button
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-center text-sky-400 bg-gray-500 transition border border-sky-700/60 rounded-lg hover:bg-sky-600/20 md:text-sm border-b-4 active:border-b-0"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mr-1"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        ></path>{" "}
                      </svg>
                      Demo
                    </button>
                    </Link>
                  ) : (
                    <Link href={project.repository}>
                    <button
                  type="button"
                  className="font-semibold font-sans w-20 md:w-20 h-12 px-8 rounded-lg bg-slate-600 text-primary-foreground hover:bg-slate-400/90 border-slate-500 border-b-4 active:border-b-0 text-white flex justify-center items-center gap-3"
                >
                    <Image
                      className="pr-0"
                      height={20}
                      width={20}
                      alt="GitHub"
                      src="github-svgrepo-com.svg"
                    />
                    </button>
                    </Link>
                  )}
                
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalA;
