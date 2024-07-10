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
          <button type="button" className="h-12  px-8 rounded-lg bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0">
             Linkedin
            </button>
            <button type="button" className="h-12  px-8 rounded-lg bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0">
              GitHub
            </button>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-40 mr-2 drop-shadow-2xl border-8 border-gray-600 backdrop-blur">
         TITULO222
        </div>
      
      </div>
)
}

export default CardPresentacion