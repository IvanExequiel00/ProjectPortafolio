import Image from "next/image";
import Link from "next/link";

const Prueba = () =>{
    return(
<div className="min-h-screen flex items-center bg-purple-500">
          <div className="flex-1 max-w-4xl mx-auto p-10">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              <li className="col-span-2 bg-white rounded-lg shadow-xl">
                <div className="h-24">Titulo</div>
              </li>
              <li className="col-start-1 col-span-1 row-start-1 row-span-11  bg-white rounded-lg shadow-xl">
                <div className="h-24">
                  <p className="text-center text-xl">
                    Tecnologias
                  </p>
                  <ul className="flex flex-wrap gap-3 text-sm p-2">
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                    <li className="border-2 rounded-xl p-1 border-orange-500 hover:border-red-500">TECNOLOGIA</li>
                  </ul>
                </div>
              </li>
              <li className="col-span-2 row-span-10 bg-white rounded-lg shadow-xl">
                <div className="flex justify-center">
                 
                  <Image 
                  className="flex "
                  alt="singo"
                  src="react.svg"
                  width={300}
                  height={50}
                  />
                  </div>
              </li>
              <li className="col-span-2 bg-white rounded-lg shadow-xl">
                <div className="h-24">DESCRIPTCION</div>
              </li>
              <li className="col-span-1 bg-white rounded-lg shadow-xl">
                <div className="h-24">
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
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Prueba;