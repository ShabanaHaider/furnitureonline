import Image from "next/image";

export default function Shop() {
  return (
    <div>
    <div className=" flex w-full h-auto py-10 justify-center bg-[#f9f1e7]"> 

    </div>
    
        <div className="flex items-center">
        {/* Main Image */}
        <Image 
          src="/Asguard.png" 
          alt="Asgaard" 
          width={1440} 
          height={820} 
          className="object-cover"
        />
      </div>    
    
    </div>
  );
}

/* <p className="text-xs text-gray-300">Home</p><img src="/tinyrightarrow.png" alt="rightarrow" />
      <p className="text-xs text-gray-300">Shop</p><img src="/tinyrightarrow.png" alt="rightarrow" />
      <img src="/verticleline.png" alt="stick" /><p className="text-normal text-black">Asgaard</p> */


      

    //   <div className="text-xs text-gray-300"><p>Home</p> </div>
    //  <div> <img src="/tinyrightarrow.png" alt="rightarrow" /></div>
    //   <div><p className="text-xs text-gray-300">Shop</p></div>
    //   <div><img src="/tinyrightarrow.png" alt="rightarrow" /></div>
    //   <div><img src="/verticleline.png" alt="stick" /></div>
    //   <div><p className="text-normal text-black">Asgaard</p></div>

