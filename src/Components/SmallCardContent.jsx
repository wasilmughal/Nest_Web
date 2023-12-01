import React,{useState} from "react";
import "./SmallCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import { FeaturedCard } from "./LocalDataBase/Popular"; //import localDataBase


// import required modules

function SmallCardContent() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth);

    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    const slides = isMobile < 768 ? 3

: isMobile <1024  ? 4
: isMobile <1200  ? 7
: isMobile <500   ? 2
:10 ;

  return (
    // Featured Categories Heading & Slider

    <>
      <div className="my-10 flex flex-wrap gap-4 text-gray-800">
        <div className="w-[28%]" id="FeaturedCategories">
          <h1 className="w-[98%] flex md:flex-none flex-wrap text-[32px] mx-5 leading-none ">
            Featured Categories
          </h1>
        </div>
        <div
          className=" mx-4 md:gap-10 gap-5 text-[13px] flex  cursor-pointer flex-nowrap text-gray-700 leading-none items-center "
          id="FeaturedCategories"
        >
          <p className="hover:text-green-600  duration-200 hover:mb-1.5">Cake & Milk</p>
          <p className="hover:text-green-600  duration-200 hover:mb-1.5" >Coffes & Teas</p>
          <p className="text-green-600  duration-200 hover:mb-1.5">Pet Foods</p>
          <p className="hover:text-green-600  duration-200 hover:mb-1.5">Vagetables</p>
        </div>
      </div>

      <div className="px-2" id="FeaturedCategories">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={slides}
          className="mt-10 "
          spaceBetween={10 + "px"}
          
        >
          {FeaturedCard.map((v, i) => {
            return (
              <SwiperSlide className="bg-[#F2FCE4] gap-3 p-3.5 rounded-lg  duration-300 hover:shadow-xl hover:border-green-200 hover:border">
                <div className="">
                  <img src={v.img} alt="..." className="hover:scale-125 transition-all duration-500"/>
                  <h1 className="text-[13px] text-[#253D4E]">{v.name}</h1>
                  <p className="text-xs text-[#253D4E]">{v.itemsno}items</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Featured Categories */}
      {/* shop now cards */}
      <div className="w-[100%]  md:mx-auto px-5">
        <div
          className="flex flex-wrap md:justify-around justify-center  w-[98%] my-9 text-gray-900"
          id="FeaturedCategories"
        >
          <div className="relative lg:w-[32.5%] md:w-[48%] rounded-lg py-3">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png" // Replace with your actual image URL
              alt="Your Image Alt Text"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute top-0 left-0 w-[320px] p-8 cursor-pointer">
              <p className="text-4xl font-bold text-[24px] hover:mt-2 duration-300 lg:leading-8 md:leading-6 leading-6">
                Everyday Fresh & Clean with Our Products
              </p>
              <button className="bg-[#3BB77E] mt-5 flex hover:bg-orange-500 text-white py-1.5 px-3 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative lg:w-[32.5%] md:w-[48%] py-3">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png" // Replace with your actual image URL
              alt="Your Image Alt Text"
              className="w-full rounded-xl"
            />
            <div className="absolute top-0 left-0 w-[320px] p-8 cursor-pointer">
              <p className="text-4xl font-bold text-[24px] hover:mt-2 duration-300 lg:leading-8 md:leading-6 leading-6">
                Make your Breakfast Healthy and Easy
              </p>
              <button className="bg-[#3BB77E] mt-8 flex hover:bg-orange-500 text-white py-1.5 px-3 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative lg:w-[32.5%] lg:block md:hidden block  py-3">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png" // Replace with your actual image URL
              alt="Your Image Alt Text"
              className="w-full rounded-xl"
            />
            <div className="absolute top-0 left-0 w-[320px] p-8 cursor-pointer">
              <p className="text-4xl font-bold text-[24px] hover:mt-2 duration-300 lg:leading-8 md:leading-6 leading-6">
              The best Organic Products Online
              </p>
              <button className="bg-[#3BB77E] mt-8 flex hover:bg-orange-500 text-white py-1.5 px-3 rounded-md">
              Shop Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
      {/* shop now cards */}
    </>
  );
}

export default SmallCardContent;
