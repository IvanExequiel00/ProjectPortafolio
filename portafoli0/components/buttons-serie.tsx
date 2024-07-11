import Image from "next/image"
import Link from "next/link"

const ButtonsS = () =>{
    return(
        <div className="md:flex md:flex-row md:justify-between md:gap-4 flex flex-col  w-full gap-2">
        <Link href={"https://www.linkedin.com/in/ivan-rojas-6b8b16216/"}>
          <button
            type="button"
            className="font-semibold 
            font-sans w-full md:w-40 h-12  px-8 
            rounded-lg bg-sky-400 text-primary-foreground
             hover:bg-sky-400/90 border-sky-500 border-b-4 
             active:border-b-0 text-white flex  justify-center 
             items-center gap-3"
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
        <a
          href="/CV.pdf"
          download="CV.pdf"
          className=" font-semibold font-sans w-full md:w-40 
          h-12 px-8 rounded-lg bg-white hover:text-black
           border-slate-200 border-2 border-b-4 active:border-b-2
            hover:bg-slate-100 text-slate-500 flex justify-center 
            items-center gap-3"
        >
          <Image
            className="pr-0"
            height={20}
            width={20}
            alt="Curriculum"
            src="cv.svg"
          />
          Descargar CV
        </a>
        <Link href="https://github.com/IvanExequiel00">
          <button
            type="button"
            className="font-semibold font-sans w-full 
            md:w-40 h-12 px-8 rounded-lg bg-slate-600 
            text-primary-foreground hover:bg-slate-400/90
             border-slate-500 border-b-4 active:border-b-0
              text-white flex justify-center items-center gap-3"
          >
            <Image
              className="pr-0 "
              height={20}
              width={20}
              alt="GitHub"
              src="github-svgrepo-com.svg"
            />
            GitHub
          </button>
        </Link>
      </div>
    )
}

export default ButtonsS;