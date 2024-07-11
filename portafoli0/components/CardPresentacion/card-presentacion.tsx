import Image from "next/image";
import ImgContent from "./content-Img";
import Link from "next/link";

const CardPresentacion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 absolute items-center justify-center h-screen z-10 w-4/6 gap-x-40 mt-6">
      <div className=" flex flex-col justify-center items-center md: h-40 text-center  gap-4   my-20 w-full ">
        <h1 className="text-white text-3xl ">Ivan Rojas Exequiel</h1>
        <span className="text-white">Exequieliv@outlook.es</span>
        <span className="text-white flex gap-2">
        <Image
        className="pr-0"
        height={20}
        width={20}
        alt="Argentina"
        src="arg.svg"
        />
          +54 351 5207699
          </span>
        <div className="md:flex md:flex-row md:justify-between md:gap-4 flex flex-col  w-full gap-2">
          <Link href={"https://www.linkedin.com/in/ivan-rojas-6b8b16216/"}>
            <button
              type="button"
              className="w-full md:w-40 h-12  px-8 rounded-lg bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0 text-white flex  justify-center items-center gap-3"
            >
              <Image
                className="pr-0"
                height={20}
                width={20}
                alt="Linkedin"
                src="linkedin-color-svgrepo-com.svg"
              />
              Linkedin
            </button>
          </Link>
          <Link href="https://github.com/IvanExequiel00">
         
              <button
                type="button"
                className="w-full md:w-40 h-12 px-8 rounded-lg bg-slate-600 text-primary-foreground hover:bg-slate-400/90 border-slate-500 border-b-4 active:border-b-0 text-white flex justify-center items-center gap-3"
              >
                <Image
                  className="pr-0"
                  height={20}
                  width={20}
                  alt="GitHub"
                  src="github-svgrepo-com.svg"
                />
                GitHub
              </button>
           
          </Link>
        </div>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-3xl text-white font-sans font-semibold">
          Front-end
        </h3>
        <ImgContent />
      </div>
    </div>
  );
};

export default CardPresentacion;
