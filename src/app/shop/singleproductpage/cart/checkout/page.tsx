// pages/checkout.tsx
// import React from "react";

// const CheckoutPage = () => {
//   return (
//     <div className="font-poppins">
//         {/* Hero Section */}
//       <section
//         className="h-[316px] bg-cover bg-center flex items-center justify-center text-center relative"
//         style={{
//           backgroundImage: "url('/Images/bgaccount.png')",
//         }}
//       >
//         <div className="absolute inset-0 bg-white opacity-50"></div>
//         <div className="relative z-10">
//           <h1 className="text-[48px] font-[400] mb-2">My Account</h1>
//           <p className="text-[16px] font-[500] text-gray-500">
//             Home &gt; <span className="text-black text-[16px] font-[300]">My Account</span>
//           </p>
//         </div>
//       </section>


import Image from "next/image";
import React from "react";
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
                CHECKOUT
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

              <div>
                <img src="/tinyrightarrow.png" alt="rightarrow" />
              </div>


              <div>
                <p className="text-xs text-gray-800">Checkout</p>

              </div> 






              </div>

              </div>


      {/* Billing Details */}
      <section className="flex flex-col lg:flex-row gap-12 ">
        {/* Left Section: Billing Details */}
        <div className="flex-1">
          <h2 className="text-[36px] font-[600] mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-[16px] font-normal"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-[211px] border rounded-md p-4 text-[16px]"
                
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-[16px] font-normal"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-[211px] border rounded-md p-4 text-[16px]"
                
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-[16px] font-normal"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="w-[453px] border rounded-md p-4 text-[16px]"
              
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-[16px] font-normal"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-[453px] border rounded-md p-4 text-[16px] bg-white"
              >
                <option value="">Select a country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block mb-2 text-[16px] font-normal"
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-[453px] border rounded-md p-4 text-[16px]"
               
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-[16px] font-normal"
              >
                Town / City
              </label>
              <input
                id="city"
                type="text"
                className="w-[453px] border rounded-md p-4 text-[16px]"
             
              />
            </div>

            <div>
              <label
                htmlFor="province"
                className="block mb-2 text-[16px] font-normal"
              >
                Province
              </label>
              <input
                id="province"
                type="text"
                className="w-[453px] border rounded-md p-4 text-[16px]"
                
              />
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-[16px] font-normal"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-[453px] border rounded-md p-4 text-[16px]"
             
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-[16px] font-normal"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-[453px] border rounded-md p-4 text-[16px]"
              
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[16px] font-normal"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-[453px] border rounded-md p-4 text-[16px]"
                
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block mb-2 text-[16px] font-normal"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                className="w-[453px] border rounded-md p-4 text-[16px]"
             
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Section: Order Details */}
        <div className="flex-1 p-2 rounded-md ">
          <h2 className="text-[36px] font-[600] mb-9">Product</h2>
          <div className="mb-8 text-[16px]">
            <div className="flex justify-between mb-4 ">
              <p className="text-gray-400 mb-6">Angora Sofa x 1</p>
              <p className="">Rs. 250,000</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Subtotal</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between text-gray-800 font-semibold mb-6">
              <p>Total</p>
              <p>Rs. 250,000</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-[14px] text-gray-500 ml-6 w-[521px]">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
            <p className="w-[520px]">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold"> privacy policy.</span>
            </p>
          </div>
          <div className="flex justify-center">
  <button className="w-[318px] bg-white text-black border-2 border-black rounded-medium text-[20px] font-medium py-4 rounded-md mt-6">
    Place Order
  </button>
</div>

        </div>
      </section>

    <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32">
      <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
        {/* High Quality */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">🏆</span>
          <p className="font-semibold text-lg">High Quality</p>
          <p className="text-sm text-gray-500">crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">✅</span>
          <p className="font-semibold text-lg">Warranty Protection</p>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">📦</span>
          <p className="font-semibold text-lg">Free Shipping</p>
          <p className="text-sm text-gray-500">Order over 150 $</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center">
          <span className="text-3xl">🎧</span>
          <p className="font-semibold text-lg">24 / 7 Support</p>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>


    </div>
  );
};

