
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
          <Image src="/tinyrightarrow.png" alt="Arrow" width={10} height={10} />
          <div>            
            <p className="text-xs text-gray-800">Product Comparison</p>
          </div>
        </div>
      </div>


      <div className="flex flex-row w-full h-[422px] bg-white items-start">
  {/* Section 1 */}
  <div className="flex flex-col ml-12 mt-4">    
    <p className="font-bold w-[210px] h-[105px] text-2xl">
      Go to Product page for more Products
    </p>
    <div className="mt-2">
      <Image src="/viewmore.png" alt="View More" width={115} height={23} />
    </div>
  </div>

  {/* Section 2 */}
  <div className="ml-12 mt-7">
    <Image src="/sofa3small.png" alt="Three small sofas" width={280} height={177} />
    <div className="w-[223px] h-[105px] bg-white">
      <h2 className="text-black mt-0 ml-[10px] w-[192px] h-[30px] font-semibold">Asgaard sofa</h2>
      <p className="text-[#9f9f9f] mt-0 ml-[10px] w-[130px] h-[27px] text-sm">Rs. 235,000.00</p>
          <div className="flex flex-row mt-0 ml-[10px] w-[124px] h-[20px]">
       <div className="w-[20px] h-[20px] text-sm"><p>4.5</p></div>   

     <div className="w-[20px] h-[20px] mt-1 ml-[10px]"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
       <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star-half.png" alt="half star" className="object-cover" /></div> 
      <div className="w-[30px] h-[0px] mt-0 gap-1 "><img src="/verticleline.png" alt="stick" className="object-cover" /></div> 
      <div className="text-[#9f9f9f] gap-1 text-xs"><p>204 review</p></div>

      </div>
      </div> 
    </div>
   

  {/* Section 3 */}
  <div className="ml-12 mt-1">
    <Image src="/outdoorsofaset.png" alt="Outdoor Sofa Set" width={280} height={177} />
    <div className="w-[223px] h-[105px] bg-white">
      <h2 className="text-black mt-0 ml-[10px] w-[192px] h-[30px] font-semibold">Outdoor Sofa Set</h2>
      <p className="text-[#9f9f9f] mt-0 ml-[10px] w-[130px] h-[27px] text-sm">Rs. 250,000.00</p> 


      <div className="flex flex-row mt-0 ml-[10px] w-[124px] h-[20px]">
         <div className="w-[20px] h-[20px] text-sm"><p>4.5</p></div>   

       <div className="w-[20px] h-[20px] mt-1 ml-[10px]"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star.png" alt="star" className="object-cover" /></div> 
      <div className="w-[20px] h-[20px] mt-1"><img src="/star-half.png" alt="half star" className="object-cover" /></div> 
      <div className="w-[30px] h-[0px] mt-0 gap-1 "><img src="/verticleline.png" alt="stick" className="object-cover" /></div> 
      <div className="text-[#9f9f9f] gap-1 text-xs"><p>224 review</p></div>
           </div>

    </div>
  </div>

  {/* Section 4 */}
  <div className="ml-12 mt-4">
    <div className="w-[242px] h-[79px]"> 
      <img src="/addnchooseproduct.png" alt="Add a product" className="object-cover" /> 
    </div>
  </div>
</div> 




<div className="grid grid-cols-4 items-center mt-4 w-full h-[2259px] bg-white">
  <div className="w-[333px] h-[2259px] bg-white">

    <div className="ml-12 text-black">


    <h2 className=" font-bold mt-10">General</h2>
    <p className="text-sm mt-10">Sales Package</p>
    <p className="text-sm mt-10">Model Number</p>
    <p className="text-sm mt-10">Secondry Material</p>
    <p className="text-sm mt-10">Configuration</p>
    <p className="text-sm mt-10">Upholstry Material</p>
    <p className="text-sm mt-10">Upholstry Color</p>



    <h2 className=" font-bold mt-20">Product</h2>
    <p className="text-sm mt-10">Filling Material</p>
    <p className="text-sm mt-10">Finish Type</p>
    <p className="text-sm mt-10">Adjustable Headrest</p>
    <p className="text-sm mt-10">Maximum Load Capacity</p>
    <p className="text-sm mt-10">Origin of Manufacture</p>


    <h2 className=" font-bold mt-20">Dimensions</h2>
    <p className="text-sm mt-10">Width</p>
    <p className="text-sm mt-10">Height</p>
    <p className="text-sm mt-10">Depth</p>
    <p className="text-sm mt-10">Weight</p>
    <p className="text-sm mt-10">Seat Height</p>
    <p className="text-sm mt-10">Leg Height</p>


    <h2 className=" font-bold mt-20">Warranty</h2>
    <p className="text-sm mt-20">Warranty Summary</p>
    <p className="text-sm mt-20">Warranty Service Type</p>
    <p className="text-sm mt-[120px]">Covered in Warranty</p>
    <p className="text-sm mt-[120px]">Not Covered in Warranty</p>
    <p className="text-sm mt-[134px]">Domestic Warranty</p>

    </div>
  </div>


  {/* <div className="w-[333px] h-[2259px] bg-green-300"> */}


  <div className="grid grid-cols-4 items-center mt-4 w-full h-[2259px]  bg-white">    
  <div className="w-[333px] h-[2259px] bg-white">

    <div className="ml-12 text-black">


    
    <p className="text-sm mt-[88px]">1 sectional sofa</p>
    <p className="text-sm mt-10">TFCBLIGRBL6SRHS</p>
    <p className="text-sm mt-10">Solid Wood</p>
    <p className="text-sm mt-10">L-shaped</p>
    <p className="text-sm mt-10">Fabric + Cotton</p>
    <p className="text-sm mt-10">Bright Grey & Lion</p>




    <p className="text-sm mt-[158px]">Foam</p>
    <p className="text-sm mt-10">Bright</p>    
    <p className="text-sm mt-10">No</p>
    <p className="text-sm mt-10">280 Kg</p>
    <p className="text-sm mt-10">Pakistan</p>


    <p className="text-sm mt-[140px]">200 cm</p>
    <p className="text-sm mt-10">250 cm</p>
    <p className="text-sm mt-10">30 cm</p>
    <p className="text-sm mt-10">60 kg</p>
    <p className="text-sm mt-10">150 cm</p>
    <p className="text-sm mt-10">75 cm</p>



    <p className="text-sm mt-[180px]">1 Year Manufacturing Warranty</p>
    <p className="text-sm mt-20">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
    <p className="text-sm mt-20">Warranty Against Manufacturing Defect</p>
    <p className="text-sm mt-20">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
    <p className="text-sm mt-[120px]">1 Year</p>

    <div className="mt-10 w-[215px] h-[64px]"> 
      <img src="/yellowaddtocart.png" alt="Add a product" className="object-cover" /> 
    </div>


    

    </div>

    </div>


  </div>  


  <div className="grid grid-cols-4 items-center mt-4 w-full h-[2259px] bg-white">
  <div className="w-[333px] h-[2259px] bg-white">

    <div className="ml-12 text-black">


    
    <p className="text-sm mt-[88px]">1 Three Seater, 2 Single Seater</p>
    <p className="text-sm mt-10">DTUBLIGRBL568</p>
    <p className="text-sm mt-10">Solid Wood</p>
    <p className="text-sm mt-10">L-shaped</p>
    <p className="text-sm mt-10">Fabric + Cotton</p>
    <p className="text-sm mt-10">Bright Grey & Lion</p>




    <p className="text-sm mt-[158px]">Foam</p>
    <p className="text-sm mt-10">Bright</p>    
    <p className="text-sm mt-10">No</p>
    <p className="text-sm mt-10">300 Kg</p>
    <p className="text-sm mt-10">Pakistan</p>


    <p className="text-sm mt-[140px]">200 cm</p>
    <p className="text-sm mt-10">250 cm</p>
    <p className="text-sm mt-10">30 cm</p>
    <p className="text-sm mt-10">60 kg</p>
    <p className="text-sm mt-10">150 cm</p>
    <p className="text-sm mt-10">75 cm</p>



    <p className="text-sm mt-[180px]">12 Year Manufacturing Warranty</p>
    <p className="text-sm mt-20">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
    <p className="text-sm mt-20">Warranty of the product is limited to manufacturing defects only.</p>
    <p className="text-sm mt-20">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
    <p className="text-sm mt-[100px]">3 Months</p>


    <div className="mt-10 w-[215px] h-[64px]"> 
      <img src="/yellowaddtocart.png" alt="Add a product" className="object-cover" /> 
    </div>
    

    </div>

    </div>


  </div>


  <div className="w-[333px] h-[2259px] bg-white"></div>
</div>
      
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









    



   