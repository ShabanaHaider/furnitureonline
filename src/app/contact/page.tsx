

//     import Image from "next/image";
//     import Link from "next/link";

//     export default function Shop() {
//       return (
//         <div className="w-full">
//           {/* Main Image Section */}
//           <div className="relative flex justify-center bg-white py-10">
//             <Image
//               src="/shopmainpic.png"
//               alt="shopmainpic"
//               width={1440}
//               height={316}
//               className="cursor-pointer"
//             />
    
//             <div
//               className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//               font-bold text-4xl text-black"
//             >
//               <Image
//                 src="/Meubel House_Logos-05.png"
//                 alt="MEUELLOGO"
//                 width={77}
//                 height={77}
//               />
//               <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
//                 CONTACT
//               </h2>
//             </div>
    
//             <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
//               <div className="text-xs text-gray-800">
//                 <p>Home</p>
//               </div>
//               <div>
//                 <img src="/tinyrightarrow.png" alt="rightarrow" />
//               </div>


//               <div>
//                 <p className="text-xs text-gray-800">Contact</p>

//               </div>



//               </div>

//               </div>

//       {/* Form Section */}
//       <div className="mt-14 text-center">
//         <h1 className="text-4xl font-bold uppercase mb-6">
//           Get In Touch with us
//         </h1>

//         <form className="mt-30 flex flex-col gap-8 justify-center items-center">
//           <input 
//             type="text" 
//             className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
//             placeholder="Enter your Name" 
//           />

//           <input 
//             type="email" 
//             className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
//             placeholder="Enter your email" 
//           />

//           <input 
//             type="text" 
//             className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
//             placeholder="Subject" 
//           />


//            <input 
//             type="text" 
//             className="p-8 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
//             placeholder="Message" 
//           />

//           <button 
//             type="submit" 
//             className="py-3 px-7 rounded-lg bg-[#B88E2F] text-white hover:bg-blue-600 transition">
//             Submit
//           </button>
//         </form>
//       </div>

      
//     </div>
//   );
// }



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
                CONTACT
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
                <p className="text-xs text-gray-800">Contact</p>

              </div>



              </div>

              </div>

      {/* Form Section */}
      <div className="mt-14 text-center">
        <h1 className="text-4xl font-bold uppercase mb-6">
          Get In Touch with us
        </h1>

        <form className="mt-30 flex flex-col gap-8 justify-center items-center">
          <input 
            type="text" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Enter your Name" 
          />

          <input 
            type="email" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Enter your email" 
          />

          <input 
            type="text" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Subject" 
          />


           <input 
            type="text" 
            className="p-8 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Message" 
          />

          <button 
            type="submit" 
            className="py-3 px-7 rounded-lg bg-[#B88E2F] text-white hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
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







        
                
        
            