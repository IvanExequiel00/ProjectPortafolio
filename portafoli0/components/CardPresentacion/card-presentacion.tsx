import Image from "next/image";
import ImgContent from "./content-Img";
import Link from "next/link";
import CopyableSpan from "./spancopy";
import ButtonsS from "../buttons-serie";

const CardPresentacion = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 
    absolute items-center lg:items-stretch  lg:mt-20 
    justify-center h-screen z-10 w-4/6 gap-x-40  
    gap-10 mt-10 md:mt-10  lg:pt-0">
      <div className="xl:mt-36 lg:mt-32">
      <div className=" flex flex-col justify-center 
      items-center  h-40 text-center  gap-4   my-20 
      md:my-0 w-full  ">
        <h1 className="text-white text-3xl font-sans font-semibold">
          Ivan Exequiel Rojas
        </h1>
        <CopyableSpan textToCopy="Exequieliv@outlook.es" />
        <span className="text-white flex gap-2">
          <Image
            className="pr-0"
            height={20}
            width={20}
            alt="Argentina"
            src="arg.svg"
          />
          <CopyableSpan textToCopy="+54 351 5207699" />
        </span>
        <div className="flex justify-center">
          <ButtonsS />
        </div>
       
      </div>

      </div>
      
      <div className="flex flex-col ">
        <h3 className="font-semibold text-3xl text-white font-sans ">
          Front-end
        </h3>
        <ImgContent />
        <h3 className="font-semibold text-3xl text-white font-sans ">
          Back-end
        </h3>
        <ImgContent />
      </div>
    </div>
  );
};

export default CardPresentacion;
