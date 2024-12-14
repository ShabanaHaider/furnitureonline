

import Image from "next/image";
import ParentComponentshops from "../components/ParentComponentshops";
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

      <div className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          font-bold text-4xl text-black">

     <Image
      src="/Meubel House_Logos-05.png"
      alt="MEUELLOGO"
      width={77}
      height={77}
    />

<h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
      SHOP
    </h2>
  </div>

  <div className="flex absolute top-1/4 mt-48 justify-center items-center gap-6">
    <div className="text-xs text-gray-800">
      <p>Home</p>
    </div>
    <div>
      <img src="/tinyrightarrow.png" alt="rightarrow" />
    </div>


    <div>
      <p className="text-xs text-gray-800">Shop</p>
    </div>   
    </div> 
    </div>        


      {/* Background Bar Section */}
      <div className="flex items-center w-[1440px] h-[100px] bg-[#f9f1e7] px-6">
        <div className="flex items-center gap-5">
          <Image src="/arrowstick.png" alt="arrowstick" width={25} height={25} />
          <p className="text-black text-xs">Filter</p>
          <Image src="/fourdots.png" alt="fourdots" width={17} height={17} />
          <Image src="/smallrectangle.png" alt="smallrectangle" width={24} height={24} />
          <Image src="/verticleline.png" alt="verticleline" width={1} height={37} />
          <p className="text-black text-xs ml-2">Showing 1-16 of 32 results</p>
        </div>

        <div className="flex items-center ml-auto gap-5">
          <p className="text-black text-xs">Show</p>
          <Image src="/rectangle16.png" alt="16number" width={55} height={30} />
          <p className="text-black text-xs">Sort by</p>
          <Image src="/default.png" alt="default" width={160} height={40} />
        </div>
      </div>

      {/* Parent Component */}
      <div className="py-10">
        <ParentComponentshops />
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <Image src="/number1.png" alt="1" width={60} height={60} />
        <Image src="/number2.png" alt="2" width={60} height={60} />
        <Image src="/number3.png" alt="3" width={60} height={60} />
        <Image src="/next.png" alt="next" width={98} height={60} />
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-4 items-center mt-4 w-full h-[270px] bg-[#f9f1e7] px-6">
        <div className="flex items-center space-x-4">
          <Image src="/trophy 1.png" alt="trophy" width={60} height={60} />
          <div>
            <p className="font-bold text-black">High Quality</p>
            <p className="text-xs text-black">Created from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/guarantee.png" alt="warranty" width={60} height={60} />
          <div>
            <p className="font-bold text-black">Warranty Protection</p>
            <p className="text-xs text-black">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/shipping.png" alt="freeshipping" width={60} height={60} />
          <div>
            <p className="font-bold text-black">Free Shipping</p>
            <p className="text-xs text-black">Order above $150</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/customer-support.png" alt="support" width={60} height={60} />
          <div>
            <p className="font-bold text-black">24/7 Support</p>
            <p className="text-xs text-black">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

