



    
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
                CART
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
                <p className="text-xs text-gray-800">Shop</p>
              </div>

              <div>
                <img src="/tinyrightarrow.png" alt="rightarrow" />
              </div>

              <div>
                <p className="text-xs text-gray-800">Cart</p>
              </div>





            </div>
          </div>
    
          {/* Main Content Section */}
          <div className="flex w-full h-auto bg-white px-8 py-16">
            {/* Left Section (Bar and Image) */}
            <div className="w-[817px]">
              {/* Horizontal Bar */}



              <div className="flex pl-[300px] gap-16 items-center h-[55px] bg-[#f9f1e7]  font-bold text-black">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>




              <div className="flex pl-[110px] text-sm gap-16 items-center h-[105px] bg-white  font-bold text-black">
              <div className="flex flex-col items-start mt-2">
                <div className="w-[108px] h-[105px]">
                  <Image
                    src="/sofa3small.png"
                    alt="sofa3small"
                    width={108}
                    height={105}
                    className="object-cover"
                  />
                </div>
              </div>
                <p>Asgaard Sofa</p>
                <p>Rs.250,000</p>
                <p>1</p>
                <p>250,000</p>


                <div className="w-[108px] h-[105px]">
                  <Image
                    src="/smalldustbin.png"
                    alt="delete icon"
                    width={28}
                    height={28}
                    className="object-cover mt-9"
                  />
                </div>

              </div>

    
            </div>
    
            {/* Right Section (Card Totals) */}
            <div className="flex justify-center items-center ml-auto">
              <div className="flex flex-col items-center w-[393px] h-[390px] bg-[#f9f1e7] p-4">
                <h2 className="text-black font-bold text-2xl">Card Totals</h2>
    
                <div className="flex flex-col gap-4 mt-10">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-black">Subtotal</p>
                    <p className="text-xs text-[#9f9f9f]">Rs. 250,000</p>
                  </div>
    
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm font-bold text-black">Total</p>
                    <p className="text-sm text-[#B88E2F]">Rs. 250,000</p>
                  </div>


                  <div className="cursor-pointer"><Link href="/shop/singleproductpage/cart/checkout">
    
                  <Image
                    src="/checkout.png"
                    alt="checkout"
                    width={222}
                    height={59}
                    className="mt-10"
                  /></Link>            
          </div>  

                </div>
              </div>
            </div>
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
    



   


