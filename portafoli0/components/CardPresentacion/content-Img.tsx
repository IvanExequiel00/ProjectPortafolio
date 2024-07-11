import Image from "next/image";

const ImgContent = () => {
  return (
    <div className="bg-black w-full h-44  drop-shadow-2xl border-8
     border-gray-800 backdrop-blur blurry-border shadow-lg px-5 overflow-auto 
     grid grid-cols-4 gap-1">
      <Image
        className="bg-white h-10 w-10 md:h-14 md:w-14 mt-3 rounded-full"
        src="next-js-svgrepo-com.svg"
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
        src="tailwind-svgrepo-com.svg"
        height={40}
        width={40}
        alt="tailwind css"
      />
      <Image
        className=" h-10 w-10 md:h-14 md:w-14 mt-3 rounded-lg"
        src="css-3-svgrepo-com.svg"
        height={40}
        width={40}
        alt="css"
      />
      <Image
        className=" h-10 w-10 md:h-14 md:w-14 mt-3 rounded-lg"
        src="html-5-svgrepo-com.svg"
        height={40}
        width={40}
        alt="html"
      />
      <Image
        className=" bg-slate-300 h-10 w-10 md:h-14 md:w-14 mt-3 rounded-full"
        src="react.svg"
        height={40}
        width={40}
        alt="react"
      />
      
    </div>
  );
};

export default ImgContent;
