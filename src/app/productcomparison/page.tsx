import Image from "next/image";
import Link from "next/link";

export default function Shop() {
return (
  <div>
    <div className="flex w-full h-auto py-10 justify-center bg-[#f9f1e7]">
      <div className="flex justify-start items-center gap-6">
        <div className="text-xs text-gray-500">
          <p>Home</p>
        </div>
        <div>
          <img src="/tinyrightarrow.png" alt="rightarrow" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Shop</p>
        </div>
        <div>
          <img src="/tinyrightarrow.png" alt="rightarrow" />
        </div>
        <div>
          <img src="/verticleline.png" alt="stick" />
        </div>
        <div>
          <p className="text-normal text-black font-bold">Asgaard</p>
        </div>
      </div>
    </div>
    

    <div className="justify-center overflow-x-hidden w-[1440px] h-[820px] bg-slate-100 mt-[100px] 
mx-auto relative">


<div className="grid grid-cols-4 gap-6 p-4">

<div className="flex flex-col gap-8">
<div className="w-[78px] h-[60px] mt-0"> <img src="/asgaard1.png" alt="1" className="object-cover" /></div>
<div className="w-[78px] h-[60px]"><img src="/asgaardsmallsofa2.png" alt="2" className="object-cover" /></div> 
<div className="w-[78px] h-[60px]"><img src="/asgaardsmallsofa3.png" alt="3" className="object-cover" /></div>
<div className="w-[78px] h-[60px]"><img src="/asgaardsmallsofa4.png" alt="4" className="object-cover" /></div>
   </div>
   </div>
    <div className="justify-left ml-[72px] mt-[32px]">        
        <Image
          src="/asgaard3sofa.png"
          alt="Interior"
          width={481}
          height={500}
          className="absolute top-0 object-cover"/></div>


    <div className="absolute top-0">

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

    <div className="text-black justify-start ml-[700px] mt-3 w-[424px] h-[80px] text-sm"> <p>Setting the bar as one of the loudest speakers
       in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange 
      and extended highs for a sound.</p></div> 
    <div className="text-[#9f9f9f] ml-[700px] font-normal"><p>Size</p></div>

    <div className="flex flex-row gap-4">   

    <div className="w-[30px] h-[30px] mt-1 ml-[700px]"><img src="/L.png" alt="size L" className="object-cover" /></div> 
    <div className="w-[30px] h-[30px] mt-2"><img src="/XL.png" alt="size XL" className="object-cover" /></div> 
    <div className="w-[30px] h-[30px] mt-2"><img src="/XS.png" alt="size XS" className="object-cover" /></div> 
    
    
    </div> 
    <div className="text-[#9f9f9f] ml-[700px] font-normal"><p>Color</p></div>

    <div className="flex flex-row gap-4">   

    <div className="w-[30px] h-[30px] mt-2 ml-[700px]"><img src="/purpleround.png" alt="purple" className="object-cover" /></div> 
    <div className="w-[30px] h-[30px] mt-2"><img src="/blackround.png" alt="black" className="object-cover" /></div> 
    <div className="w-[30px] h-[30px] mt-2"><img src="/brownround.png" alt="brown" className="object-cover" /></div> 
    
    
    </div> 


    <div className="flex flex-row gap-4">   

    <div className="w-[123px] h-[64px] mt-2 ml-[700px]"><img src="/minusplus1.png" alt="one" className="object-cover" /></div>



    {/* <div className="cursor-pointer w-[215px] h-[64px] mt-2"><img src="/Addtocart.png" alt="addtocart" className="object-cover" /></div>  */}



    
        <div className="cursor-pointer w-[215px] h-[64px] mt-2"><Link href="/shop/singleproductpage/cart">
        <img src="/Addtocart.png" alt="addtocart" className="object-cover" /></Link>


          
        </div>  


    <div className="w-[215px] h-[64px] mt-2"><img src="/compare.png" alt="compare" className="object-cover" /></div>       
    
    </div> 

    <div className="w-[605.01px] h-[0px] mt-14 ml-[700px]"><img src="/horizontalLine.png" alt="horizontal line" 
    className="object-cover" /></div> 


<div className="grid grid-cols-1 gap-4 ml-[700px] mt-10">
            <div className="text-sm text-[#9f9f9f]">
              <span>SKU:</span> <span className="font-medium">SS001</span>
            </div>
            <div className="text-sm text-[#9f9f9f]">
              <span>Category:</span> <span className="font-medium">Sofas</span>
            </div>
            <div className="text-sm text-[#9f9f9f]">
              <span>Tags:      </span>{" "}
              <span className="font-medium">Sofa, Chair, Home, Shop</span>
            </div>
            <div className="text-sm text-[#9f9f9f] flex items-center gap-2">
              <span>Share:</span>
              <img src="/facebook.png" alt="facebook" className="w-5 h-5 object-cover" />
              <img src="/linkedin.png" alt="linkedin" className="w-5 h-5 object-cover" />
              <img src="/twiter.png" alt="twitter" className="w-5 h-5 object-cover" />
            </div>
          </div>
        </div>
      </div>



      <div className="flex gap-8 justify-center flex-row">  

        <h2 className="text-black font-bold text-2xl">Description</h2>
        <h2 className=" text-[#9f9f9f] text-2xl">Additional information</h2>
        <h2 className="text-[#9f9f9f]  text-2xl">Reviews [5]</h2></div>

        
  <ul className="flex flex-col items-center justify-center  w-full px-4 text-1xl text-[#9f9f9f]">
<li className="flex flex-row w-[1026px] mt-2 text-justify">
  Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo 
  speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
</li>
<li className="flex flex-row w-[1026px] text-justify mt-4">
  Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
</li>
</ul>





<div className="flex justify-center items-center mt-2 gap-5">
<div className="flex flex-row justify-center mt-2 gap-5">
  <img src="/straightsofa.png" alt="sofa1" className="object-cover" />
  <img src="/sofaLnew.png" alt="sofa2" className="object-cover" />
</div>
</div>

<div><h2 className="flex justify-center mt-10 font=bold text-4xl"  >Related Products</h2> </div>


<div className="grid grid-cols-4 gap-0 mt-4">
<div><img src="/Sylterine.png" alt="syltherine" /></div>
<div><img src="/Leviosaclear(5).png" alt="leviosa" /></div>
<div><img src="/Lolito(1).png" alt="lolito" /></div>
<div><img src="/respira.png" alt="respira" /></div>
</div>


<div className="flex justify-center mt-8 items-center">
    <Image src="/showmore.png" alt="showmore" width={245} height={48} />
  </div>

</div>      
  
);}

