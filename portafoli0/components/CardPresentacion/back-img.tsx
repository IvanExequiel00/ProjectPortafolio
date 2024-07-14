import Image from "next/image";

const BackImg = () => {
  return (
    <div className="bg-black w-full h-44  drop-shadow-2xl border-8
     border-gray-800 backdrop-blur blurry-border shadow-lg px-5 overflow-auto 
     grid grid-cols-4 gap-1">
      <Image
        className="bg-white h-10 w-10 md:h-14 md:w-14 mt-3 rounded-full"
        src="express.svg"
        height={40}
        width={40}
        alt="Nextjs"
      />
      <Image
        className="   h-10 w-10 md:h-14 md:w-14 mt-3 rounded-lg"
        src="typescript-official-svgrepo-com.svg"
        height={40}
        width={40}
        alt="typescript"
      />
      <Image
        className="  h-10 w-10 md:h-14 md:w-14 mt-3 rounded-lg"
        src="javascript-svgrepo-com.svg"
        height={40}
        width={40}
        alt="javascript"
      />
      <Image
        className="  bg-slate-300 h-10 w-10 md:h-14 md:w-14 mt-3 rounded-full"
        src="mongodb.svg"
        height={40}
        width={40}
        alt="tailwind css"
      />
      
      <Image
        className=" h-10 w-10 md:h-14 md:w-14 mt-3 rounded-lg"
        src="postgresql.svg"
        height={40}
        width={40}
        alt="html"
      />
   
    </div>
  );
};

export default BackImg;
