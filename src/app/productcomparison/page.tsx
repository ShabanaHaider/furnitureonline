 


// import Image from "next/image";

// export default function Shop() {
//   return (
//     <div className="w-full">
//       {/* Main Image Section */}
//       <div className="relative flex justify-center bg-white py-10">
//         <Image
//           src="/shopmainpic.png"
//           alt="Shop main picture"
//           width={1440}
//           height={316}
//           className="cursor-pointer"
//         />
//         <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
//           <Image
//             src="/Meubel House_Logos-05.png"
//             alt="Meubel House Logo"
//             width={77}
//             height={77}
//           />
//           <h2 className="mt-4 font-bold text-4xl text-black">PRODUCT COMPARISON</h2>
//         </div>
//         <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
//           <div className="text-xs text-gray-800">
//             <p>Home</p>
//           </div>
//           <Image src="/tinyrightarrow.png" alt="Arrow" width={16} height={16} />
//           <div>
//             <p className="text-xs text-gray-800">Shop</p>
//           </div>
//           <Image src="/tinyrightarrow.png" alt="Arrow" width={16} height={16} />
//           <div>
//             <p className="text-xs text-gray-800">Product Comparison</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}



    


// <div className="flex flex-row w-full h-[422px] bg-slate-300 items-start">
//   {/* Text and View More Section */}
//   <div className="flex flex-col ml-12 mt-4">
//     {/* Larger Text */}
//     <p className="font-bold text-2xl">
//       Go to Product page for more Products
//     </p>

//     {/* Smaller "View More" Text */}
//     <div className="mt-2">
//       <Image src="/viewmore.png" alt="View More" width={115} height={23} />
//     </div>
//   </div>

//   {/* Sofa Image */}
//   <div className="ml-12 mt-4">
//     <Image src="/sofa3small.png" alt="Three small sofas" width={280} height={177} />
//   </div>





// </div>


//       {/* grid */}
//       <div className="grid grid-cols-4 items-center mt-4 w-full h-[270px] bg-[#f9f1e7]">
//         <div className="flex items-center space-x-4">
//           <div className="w-[60px] h-[60px]">
//             <Image src="/trophy 1.png" alt="Trophy" width={60} height={60} />
//           </div>
//           <div className="text-black">
//             <p className="font-bold">High Quality</p>
//             <p className="text-xs text-black">Created from top materials</p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="w-[60px] h-[60px]">
//             <Image src="/guarantee.png" alt="Warranty" width={60} height={60} />
//           </div>
//           <div className="text-black">
//             <p className="font-bold">Warranty Protection</p>
//             <p className="text-xs text-black">Over 2 years</p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="w-[60px] h-[60px]">
//             <Image src="/shipping.png" alt="Free Shipping" width={60} height={60} />
//           </div>
//           <div className="text-black">
//             <p className="font-bold">Free Shipping</p>
//             <p className="text-xs text-black">Order above 150 $</p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="w-[60px] h-[60px]">
//             <Image src="/customer-support.png" alt="Support" width={60} height={60} />
//           </div>
//           <div className="text-black">
//             <p className="font-bold">24/7 Support</p>
//             <p className="text-xs text-black">Dedicated support</p>
//           </div>
//         </div>
//       </div>

//       </div>     
      
    
//   );
// }


import Image from "next/image";

export default function Shop() {
  return (
    <div className="w-full">
      {/* Main Image Section */}
      <div className="relative flex justify-center bg-white py-10">
        <Image
          src="/shopmainpic.png"
          alt="Shop main picture"
          width={1440}
          height={316}
          className="cursor-pointer"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Meubel House Logo"
            width={77}
            height={77}
          />
          <h2 className="mt-4 font-bold text-4xl text-black">PRODUCT COMPARISON</h2>
        </div>
        <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
          <div className="text-xs text-gray-800">
            <p>Home</p>
          </div>
          <Image src="/tinyrightarrow.png" alt="Arrow" width={16} height={16} />
          <div>
            <p className="text-xs text-gray-800">Shop</p>
          </div>
          <Image src="/tinyrightarrow.png" alt="Arrow" width={16} height={16} />
          <div>
            <p className="text-xs text-gray-800">Product Comparison</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}    


<div className="flex flex-row w-full h-[422px] bg-slate-300 items-start">
  {/* Text and View More Section */}
  <div className="flex flex-col ml-12 mt-4">
    {/* Larger Text */}
    <p className="font-bold text-2xl">
      Go to Product page for more Products
    </p>

    {/* Smaller "View More" Text */}
    <div className="mt-2">
      <Image src="/viewmore.png" alt="View More" width={115} height={23} />
    </div>
  </div>

  {/* Sofa Image */}
  <div className="ml-12 mt-4">
    <Image src="/sofa3small.png" alt="Three small sofas" width={280} height={177} />


    <div className="w-[223px] h-[105px] bg-red-100">
    <div>        
      <h2 className="text-black mt-0 ml-[700px] text-4xl font-bold">Asgaard sofa</h2>
      <p className="text-[#9f9f9f] mt-0 ml-[700px] text-2xl">Rs. 250,000.00</p> </div>  

      <div className="flex flex-row">   

      <div className="w-[20px] h-[20px] mt-1 ml-[700px]"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star-half.png" alt="half star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1 gap-1 "><img src="/verticleline.png" alt="stick" className="object-cover" /></div> 
      <div className="text-[#9f9f9f] gap-1 font-normal"><p>Customer review</p></div>

      </div>









  </div>











  </div>

</div>











      {/* grid */}
      <div className="grid grid-cols-4 items-center mt-4 w-full h-[270px] bg-[#f9f1e7]">
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <Image src="/trophy 1.png" alt="Trophy" width={60} height={60} />
          </div>
          <div className="text-black">
            <p className="font-bold">High Quality</p>
            <p className="text-xs text-black">Created from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <Image src="/guarantee.png" alt="Warranty" width={60} height={60} />
          </div>
          <div className="text-black">
            <p className="font-bold">Warranty Protection</p>
            <p className="text-xs text-black">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <Image src="/shipping.png" alt="Free Shipping" width={60} height={60} />
          </div>
          <div className="text-black">
            <p className="font-bold">Free Shipping</p>
            <p className="text-xs text-black">Order above 150 $</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <Image src="/customer-support.png" alt="Support" width={60} height={60} />
          </div>
          <div className="text-black">
            <p className="font-bold">24/7 Support</p>
            <p className="text-xs text-black">Dedicated support</p>
          </div>
        </div>
      </div>

      </div>     
      
    
  );
}








































    



   