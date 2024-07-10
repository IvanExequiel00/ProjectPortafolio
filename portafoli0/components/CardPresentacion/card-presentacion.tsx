import Image from "next/image"
import ImgContent from "./content-Img"

const CardPresentacion  =() =>{
return(
    <div className="flex absolute items-center justify-center h-screen z-10 w-4/6 gap-x-40">
        <div className=" flex flex-col mr- w-40 h-40 text-center ">
         <h1 className="text-white text-3xl ">
          Titulo11
          </h1>
          <span className="text-white">
            1
          </span>
          <span className="text-white">
            1
          </span>
          <div className="flex flex-row justify-evenly gap-4">
          <button type="button" className="h-12  px-8 rounded-lg bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0 text-white flex  justify-center items-center gap-3">
          <Image
          className="pr-0"
          height={20}
          width={20}
          alt="Linkedin"
          src="linkedin-color-svgrepo-com.svg"
          />
            Linkedin
            </button>
            <button type="button" className="h-12  px-8 rounded-lg bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0 text-white flex  justify-center items-center gap-3">
            <Image
          className="pr-0"
          height={20}
          width={20}
          alt="Linkedin"
          src="linkedin-color-svgrepo-com.svg"
          />
              GitHub
            </button>
          </div>
        </div>
        <ImgContent />
      
      </div>
)
}

export default CardPresentacion