
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="relative">
      {/* Sheer Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-20 pointer-events-none"></div>

      {/* Top-Right Overlay Image */}
      <div className="absolute top-5 right-5 z-30">
        <Image
          src="/pcreenshot.png"
          alt="Top Right Overlay"
          width={350}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Breadcrumb Section */}
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

      {/* Main Content */}
      <div className="justify-center overflow-x-hidden w-[1440px] h-[820px] bg-white mt-[100px] mx-auto relative z-10">
        <div className="grid grid-cols-4 gap-6 p-4">
          <div className="flex flex-col gap-8">
            <div className="w-[78px] h-[60px] mt-0">
              <img src="/asgaard1.png" alt="1" className="object-cover" />
            </div>
            <div className="w-[78px] h-[60px]">
              <img src="/asgaardsmallsofa2.png" alt="2" className="object-cover" />
            </div>
            <div className="w-[78px] h-[60px]">
              <img src="/asgaardsmallsofa3.png" alt="3" className="object-cover" />
            </div>
            <div className="w-[78px] h-[60px]">
              <img src="/asgaardsmallsofa4.png" alt="4" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="justify-left ml-[72px] mt-[32px]">
          <Image
            src="/asgaard3sofa.png"
            alt="Interior"
            width={481}
            height={500}
            className="absolute top-0 object-cover"
          />
        </div>

        <div className="absolute top-0">
          <div>
            <h2 className="text-black mt-0 ml-[700px] text-4xl font-bold">Asgaard sofa</h2>
            <p className="text-[#9f9f9f] mt-0 ml-[700px] text-2xl">Rs. 250,000.00</p>
          </div>

          <div className="flex flex-row">
            <div className="w-[20px] h-[20px] mt-1 ml-[700px]">
              <img src="/star.png" alt="star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1">
              <img src="/star.png" alt="star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1">
              <img src="/star.png" alt="star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1">
              <img src="/star.png" alt="star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1">
              <img src="/star.png" alt="star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1">
              <img src="/star-half.png" alt="half star" className="object-cover" />
            </div>
            <div className="w-[20px] h-[20px] mt-1 gap-1">
              <img src="/verticleline.png" alt="stick" className="object-cover" />
            </div>
            <div className="text-[#9f9f9f] gap-1 font-normal">
              <p>Customer review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
