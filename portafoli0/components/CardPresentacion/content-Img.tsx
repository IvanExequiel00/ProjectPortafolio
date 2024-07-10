import Image from "next/image"

const ImgContent = () =>{
    return(
        <div className="bg-black w-full h-28 mr-2 drop-shadow-2xl border-8 border-gray-600 backdrop-blur flex flex-row gap-3 pl-3">
        <Image
        className="bg-white h-10 mt-3 rounded-full"
        src="next-js-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className="  h-10 mt-3"
        src="typescript-official-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className=" h-10 mt-3 rounded-full"
        src="javascript-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className="  h-10 mt-3 rounded-full"
        src="tailwind-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className="  h-10 mt-3 rounded-full"
        src="css-3-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className="  h-10 mt-3 rounded-full"
        src="html-5-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className=" h-10 mt-3 rounded-full"
        src="react.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        <Image
        className=" bg-white h-10 mt-3 rounded-full"
        src="next-js-svgrepo-com.svg"
        height={40}
        width={40}
        alt="Nextjs"
        />
        </div>
    )
}

export default ImgContent