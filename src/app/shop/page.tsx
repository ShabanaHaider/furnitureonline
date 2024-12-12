
import Image from "next/image";
import ParentComponentshops from "../components/ParentComponentshops";
import Link from "next/link";

export default function Shop() {
  return (

    <div className="w-full">
      {/* Main Image Section */}
      <div className="relative flex justify-center bg-white py-10">
        <Link href="/shop/singleproductpage">
          <Image 
            src="/shopmainpic.png" 
            alt="shopmainpic" 
            width={1440} 
            height={316}
            className="cursor-pointer"
          />
        </Link>

        {/* Title and Arrow */}
        <h2 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
          SHOP
        </h2>
        <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-sm mt-4">
          <img src="/arrow56.png" alt="arrow" />
        </p>
      </div>  

      {/* Background Bar Section */}
      <div className="flex items-center w-[1440] h-[100px] bg-[#f9f1e7]"> 

      <div className="flex ml-6 gap-[20px]">
          <div className="w-[25px] h-[25px]">
          <img src="/arrowstick.png" alt="arrowstick" />
          </div>

          <div>
          <p className="ml-1 w-[48px] h-[30px] text-black text-xs">Filter</p>
          </div>


           
          <div className="w-[16.5px] h-[16.5px]">
            <img src="/fourdots.png" alt="fourdots" />
          </div>  
          <div className="w-[24px] h-[24px]">
            <img src="/smallrectangle.png" alt="smallrectangle" />
          </div>  
          <div>
          <img src="/verticleline.png" alt="verticleline" />
          </div>
          <div className="w-[237px] h-[37px]">
          <p className="ml-2 text-black text-xs">Showing 1-16 of 32 results</p>
          </div> 



          <div className="flex items-center gap-[20px]">   



          <div className="text-black ml-[500px] items-center pt-2 text-xs"/> <p>Show</p></div>
           <div className="w-[55px]  h-[30px]"> <img src="/rectangle16.png" alt="16number" /> </div>

          <div className="text-black items-center pt-3 text-xs "><p>Sort by</p></div>          
          <div className="w-[160px] h-[40px]"><img src="/default.png" alt="default" /> </div>


          </div>        
             
        
        
        </div>        

      {/* Parent Component */}
      <div className="py-10">
        <ParentComponentshops />
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
           <div className="w-[60px] h-[60px]"> <img src="/number1.png" alt="1" /> </div>  
          <div className="w-[60px] h-[60]"> <img src="/number2.png" alt="2" /></div>
          <div className="w-[60px] h-[60px]"> <img src="/number3.png" alt="3" /></div>
            
            <div className="w-[98px] h-[60px]"><img src="/next.png" alt="next" /> </div>            


          </div>




          

<div className="grid grid-cols-4 items-center mt-4 w-full h-[270px] bg-[#f9f1e7]">
  <div className="flex items-center space-x-4">
    <div className="w-[60px] h-[60px]">
      <img src="/trophy 1.png" alt="trophy" />
    </div>
    <div className="text-black w-[157px] h-[38px]">
      <p className="font-bold">High Quality</p>
      <p className="w-[267px] h-[30px] text-xs text-black">Created from top materials</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <div className="w-[60px] h-[60px]">
      <img src="/guarantee.png" alt="warranty" />
    </div>
    <div className="text-black w-[157px] h-[38px]">
      <p className="font-bold">Warranty Protection</p>
      <p className="w-[267px] h-[30px] text-xs text-black">Over 2 years</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <div className="w-[60px] h-[60px]">
      <img src="/shipping.png" alt="freeshipping" />
    </div>
    <div className="text-black w-[157px] h-[38px]">
      <p className="font-bold">Free shipping</p>
      <p className="w-[267px] h-[30px] text-xs text-black">Order above 150 $</p>
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <div className="w-[60px] h-[60px]">
      <img src="/customer-support.png" alt="support" />
    </div>
    <div className="text-black w-[157px] h-[38px]">
      <p className="font-bold">24/7 support</p>
      <p className="w-[267px] h-[30px] text-xs text-black">Dedicated support</p>
    </div>
  </div>
</div>






      
    </div>

    
  );
}

