
import Image from "next/image";
    import Link from "next/link";

    export default function Shop() {
      return (
        <div className="w-full">
          {/* Main Image Section */}
          <div className="relative flex justify-center bg-white py-10">
            <Image
              src="/shopmainpic.png"
              alt="shopmainpic"
              width={1440}
              height={316}
              className="cursor-pointer"
            />
    
            <div
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              font-bold text-4xl text-black"
            >
              <Image
                src="/Meubel House_Logos-05.png"
                alt="MEUELLOGO"
                width={77}
                height={77}
              />
              <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
                BLOG
              </h2>
            </div>
    
            <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
              <div className="text-xs text-gray-800">
                <p>Home</p>
              </div>
              <div>
                <img src="/tinyrightarrow.png" alt="rightarrow" />
              </div>


              <div>
                <p className="text-xs text-gray-800">Blog</p>
              </div>     








  </div>
  </div>
  </div>


  )
  }

