import React from 'react'
import backing from "../assets/back.jpg"

function Footer() {
  return (
  <>
  
  {/* image  */}
      <div className="mx-3 md:h-[400px] h-[300px]   rounded-xl mt-5 " id="FeaturedCategories">
        <div className="float-right h-[100%]  relative ">
          <img className="h-[100%]  rounded-xl object-cover"  src={backing} alt="" />
        </div>

        <div className="absolute m-[60px] ">
          <h1 className="md:text-4xl text-[18px] text-[#253D4E] font-bold ">
            Stay home & get your daily <br /> needs from our shop
          </h1>

          <br />
          <p className="md:text-sm text-[10px]  text-gray-500">
            Start You'r Daily Shopping with{" "}
            <span className="text-[#3BB77E]">Nest Mart</span>
          </p>

          <div className="bg-white flex  justify-start lg:w-[420px] md:w-[350px] h-14 rounded-full mt-5">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-1 my-4 w-[10%]"
                  >
                    <g
                      stroke="#292d32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="m7.39999 6.32003 8.49001-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.48997c-1.9 5.71-5.02 5.71-6.92 0l-.84001-2.52-2.52-.84c-5.71-1.9-5.71-5.00997 0-6.91997z" />
                      <path d="m10.11 13.6501 3.58-3.59" />
                    </g>
                  </svg>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your email addres"
                    className="rounded-full w-[60%] text-sm placeholder-text-[10px] outline-none"
                  />
                  <div className="w-[30%] h-[100%] bg-[#3BB77E] cursor-pointer hover:bg-[#44b882ef] duration-300 rounded-full ">
                    <p className="text-white md:text-[15px] text-center text-[8px] p-4">Subscribe</p>
                  </div>
                </div>
        </div>
      </div>


      {/* {/ Free Delivery Card /} */}

      <div className="py-6 px-5 ">
        <section class="text-gray-600  body-font">
          <div class="container   mx-auto">
            <div class="flex flex-wrap   -m-2">
              <div class="p-2 lg:w-1/5 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 object-cover object-center flex-shrink-0  mr-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Best prices & offers
                    </h2>
                    <p class="text-gray-400 text-xs">Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/5 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 object-cover object-center flex-shrink-0  mr-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Free delivery
                    </h2>
                    <p class="text-gray-400 text-xs">24/7 amazing services</p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/5 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16  object-cover object-center flex-shrink-0  mr-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Great daily deal
                    </h2>
                    <p class="text-gray-500 text-xs">When you sign up</p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/5 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16  object-cover object-center flex-shrink-0  mr-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Wide assortment
                    </h2>
                    <p class="text-gray-500 text-xs">Mega Discounts</p>
                  </div>
                </div>
              </div>

              <div class="p-2 lg:w-1/5 md:w-1/3 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16  object-cover object-center flex-shrink-0  mr-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Easy returns
                    </h2>
                    <p class="text-gray-500 text-xs">Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

  <footer class="text-gray-600 body-font" id='FeaturedCategories '>
  <div class="container px-5     mx-auto border-b ">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 pb-5">
      <div class="lg:w-[20%] md:w-1/2 w-full px-4 ">
        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg' alt='' class="w-[90%]"/>
        <nav class="list-none mb-10 text-[12px]">
          <li className='py-4'>
            <a class="text-gray-600   text-[14px]">Awesome grocery store website template</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Call Us:(+91) - 540-025-124553</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Email:sale@Nest.com</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Hours:10:00 - 18:00, Mon - Sat</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-[13%] md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-400 tracking-widest text-[11px] mb-1">Company</h2>
        <nav class="list-none mb-10 text-[12px]">
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">About Us</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Delivery Information</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Support Center</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Careers</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-900  text-[22px] mb-3">Account</h2>
        <nav class="list-none mb-10 text-[12px]">
        <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">Sign in</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">View Cart</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">My Wishlist</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Track My Order</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Help Ticket</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Shipping Details</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Compare product</a>
          </li>
        </nav>
      </div>
 
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 Corporate  text-[22px] mb-3">Corporate</h2>
        <nav class="list-none mb-10 text-[12px]">
        <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">Become a Vendor</a>
          </li>
        <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">Affiliate Program</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">Farm Careers</a>
          </li>

          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Farm Business</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Our Suppliers</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Accessibility</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Promotions</a>
          </li>
         
        </nav>
      </div>
  
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-gray-900 Corporate  text-[22px] mb-3">Popular</h2>
        <nav class="list-none mb-10 text-[12px]">
        <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 "> Milk & Flavoured Milk</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Butter and Margarine</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Eggs Substitutes</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Marmalades</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Sour Cream and Dips</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Tea & Kombucha</a>
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800">Cheese</a>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900  text-[22px] mb-3">Install App</h2>
        <nav class="list-none mb-10 text-[12px]">
        <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">From App Store or Google Play</a>
          </li>
          <li className='my-5 flex md:justify-around justify-center'>
            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/app-store.jpg" alt="" className='w-28 h-7'/>
            <img src="	https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg" alt="" className='w-28 h-7' />
          </li>
          <li className='mb-3'>
            <a class="text-gray-600 hover:text-gray-800 ">Secured Payment Gateways</a>
          </li>
          <li className='mb-3 flex justify-center'>
            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png' class=" "/>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className='flex justify-between mx-10 mt-5'>
<div className='text-[11px]'>
  <p>© 2022, Nest - HTML Ecommerce Template
All rights reserved</p>
</div>
<div className='flex justify-between gap-5 items-center '>
  <div className='flex justify-around'>
  <div className='flex justify-center'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>
</div>
<div>
  <p className='text-[16px] font-bold text-green-700' >1900-666</p>
  <p className='text-[8px]'>Working 8:00 - 22:00</p>
</div>
  </div>
<div className='flex justify-around'>
<div className='flex justify-center'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>
</div>
<div>
  <p className='text-[16px] font-bold text-green-700' >1900-888</p>
  <p className='text-[8px]'>24/7 Support Center</p>
</div>
</div>
</div>

  </div>
 
</footer>

  </>
  )
}

export default Footer
