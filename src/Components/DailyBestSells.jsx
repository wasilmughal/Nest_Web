import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PopularData} from "./LocalDataBase/Popular"

function DailyBestSells() {

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide next and previous buttons
    autoplay: true, // Enable autoplay

    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  };
  return (
 

    <>
    <div className="flex justify-between mx-5 flex-wrap  " id="FeaturedCategories">

{/* buttons and headings start */}

        <div className="">
          <h1 className="w-[98%] flex flex-nowrap text-[32px] mx-5 leading-none">
            Daily Best Sells
          </h1>
        </div>



        <div className=" gap-5 mx-5 text-[15px] flex justify-around flex-nowrap text-gray-700 leading-none items-center ">
          <p className="text-green-600 flex-nowrap">Featured</p>
          <p className="hover:text-green-600 flex-nowrap">Popular</p>
          <p className="hover:text-green-600 flex flex-nowrap">New added</p>
        </div>
                {/* buttons and headings end */}

      </div>

{/* slider */}
      <div className="mx-5 mt-4 flex " id="FeaturedCategories">
        <div className="relative  rounded overflow-hidden shadow-lg w-[20%] mx-2 lg:block hidden ">
          {/* Image */}
          <img
            className="w-[289px] h-[100%] object-cover rounded-xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
            alt="Card"
          />

          {/* Overlay Container */}
          <div className="absolute top-0 left-0 w-[80%] mx-10   mt-[50px] flex flex-col text-white">
            {/* Overlay Text */}
            <div className="text-[32px] font-bold mb-4 text-gray-800">
              Bring nature into your home
            </div>

            {/* Button */}
            <button className="bg-[#10b981]  hover:bg-[#fbbf24] text-white  w-[100px] mt-20 p-1 text-[12px] rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:w-[80%] w-[100%]">
          <Slider {...settings} className="">

            {
              PopularData.map((v,i)=>{
return(
  <div className="border-2 text-left  rounded-lg gap-4 p-3.5  ">
              <div className='group'>
                <img
                  src={v.img1}
                  alt=""
                  class="lg:h-48 md:h-36 w-full object-cover object-center  "
                />
                 
                <p class=" text-xs title-font font-medium text-gray-400 mb-1">
                  {v.cat}
                </p>
                <h1 class="title-font text-[12px] font-medium text-gray-900 mb-3">
                 {v.title}
                </h1>

                {/* {/ svg stars div /} */}
                <div class=" items-center flex -mt-2">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Star 1"
                      d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                      fill="#FFE033"
                    />
                  </svg>

                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Star 1"
                      d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                      fill="#FFE033"
                    />
                  </svg>

                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Star 1"
                      d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                      fill="#FFE033"
                    />
                  </svg>

                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Star 1"
                      d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                      fill="#FFE033"
                    />
                  </svg>

                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Star 1"
                      d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                      fill="#FFE033"
                    />
                  </svg>
                </div>

                <div className="my-3 ">
                  <h1 className="text-[#3BB77E]  text-[19px]">
                    {v.price1}
                    <span className="text-sm ml-2 text-gray-500 ">
                      <del>{v.price2}</del>
                    </span>
                  </h1>

                  <div class="w-full bg-gray-200 rounded-full h-1.5 mb-1 dark:bg-gray-700">
                    <div class="bg-[#3BB77E] h-1.5 rounded-full w-[45%]"></div>
                  </div>

                  <p className="text-sm  text-gray-500">Sold 90/120</p>

                  <button className="w-full mt-3 text-sm text-white p-1.5 rounded-md bg-[#3BB77E]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
)

              })
            }
            

          
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    
    
    
    </>
  )
}

export default DailyBestSells