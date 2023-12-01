import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Ripple, initTE } from "tw-elements";




function Navbar() {
  const nav = useNavigate()



  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    initTE({ Dropdown, Ripple });

    // Function to change text after 2 seconds
    const changeText = () => {
      setDisplayText("100% Secure delivery without contacting the courier");
    };

    // Set a timeout to trigger the text change after 2 seconds
    setTimeout(changeText, 2000);
  }, []);




// sidebar funcations 

const [isSidebarOpen, setSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setSidebarOpen(!isSidebarOpen);
};

const snackroute=()=>{
  nav("/Snals")
}

  return (
    <div className="overflow-hidden">
      {/* top header start  */}

      <div
        id="top_right_content"
        className="lg:flex justify-between  items-center border-b hidden "
      >
        <div className=" p-1  text-gray-600 text-[11px]">
          <ul className="flex gap-1 items-center  ">
            <li className="hover:text-gray-800 cursor-pointer  text-left">
              <p className=" p-1 leading-none">About Us</p>
            </li>
            <div class="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer   text-left">
              <p className=" p-1 leading-none">My Account</p>
            </li>
            <div class="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer    text-left">
              <p className=" p-1 leading-none">Whislist</p>
            </li>
            <div class="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer    text-left">
              <p className=" p-1 leading-none">Order Tracking</p>
            </li>
          </ul>
        </div>

        <div className=" ">
          <p className="text-center  text-[14px]  text-gray-500">
            Trendy 25silver jewelry, save up 35% off today
          </p>
        </div>

        <div className=" p-1  text-gray-600 text-[11px]">
          <ul className="flex gap-1 items-center  ">
            <li className="hover:text-gray-800 cursor-pointer   text-left flex ">
              <p className=" p-1 leading-none ">Need help?Call us:</p>
              <p className=" p-1 leading-none font-bold text-[#3BB77E]">
                +1800 900
              </p>
            </li>

            <div class="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer    text-left">
              <div
                className="dropdown-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button className="dropdown-trigger flex items-center">
                  <span>English </span>

                  <svg
                    fill="none"
                    height="10"
                    viewBox="0 0 24 24"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                      fill="#292d32"
                    />
                  </svg>
                </button>

                <div className={`dropdown-content ${isHovered ? "open" : ""}`}>
                  {/* Dropdown content goes here */}
                  <div className="flex items-center justify-evenly p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-fr.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]">Français</span>
                  </div>
                  <div className="flex items-center justify-evenly p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-dt.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]">Français</span>
                  </div>
                  <div className="flex items-center justify-evenly p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-ru.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]">Français</span>
                  </div>
                </div>
              </div>
            </li>

            <div class="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer    text-left">
              <div
                className="dropdown-container"
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <button className="dropdown-trigger flex items-center ">
                  <span>USD </span>

                  <svg
                    fill="none"
                    height="10"
                    viewBox="0 0 24 24"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                      fill="#292d32"
                    />
                  </svg>
                </button>

                <div className={`dropdown-content ${isHovered1 ? "open" : ""}`}>
                  {/* Dropdown content goes here */}
                  <div className="flex items-center justify-start p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-fr.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]"> INR</span>
                  </div>
                  <div className="flex items-center justify-start p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-dt.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]"> MBP</span>
                  </div>
                  <div className="flex items-center justify-start p-2">
                    {" "}
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-ru.png"
                      alt=""
                      className="w-4 h-3"
                    />{" "}
                    <span className="text-[13px]"> EU</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  {/* top header and  */}
      {/* this content show on medium screen */}
      <div id="top_div" className="lg:hidden p-2 bg-[#3BB77E] ">
        <p className="text-white text-sm text-center">
          Grand opening up to 15% off all items. Only{" "}
          <span className="font-semibold">3 days left</span>
        </p>
      </div>

      {/* top  header  and  */}
      {/* navbar start */}
{/* navbar for large and medium screem  start point */}
<div className="md:block hidden">
      <div className=" flex h-[100px] border-b items-center  ">
        <div className=" lg:w-[17%]  md:w-[25%] ">
          <Link to="/">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
            alt=""
            className="h-[50px] ml-3"
          />
          </Link>
        </div>

        <div className=" lg:w-[50%]  md:w-[70%] ">
          <div className=" flex h-[50px]  ">
            <div className="w-[90%] flex rounded-md items-center border border-[#a7f3d0]">
              <div className="w-[25%] ">
                <select
                  name=""
                  id=""
                  placeholder="All Categories"
                  className="w-[90%] h-10 outline-none mx-3"
                >
                  <option value="" disabled>
                    All Categories
                  </option>
                  <option value="">text2 </option>
                  <option value="">text3 </option>
                  <option value="">text4 </option>
                </select>
              </div>
              <div class="h-5 w-0.5 bg-gray-300 mx-2"></div>

              <div className="w-[65%]">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="w-[100%] outline-none"
                />
              </div>
              <div className="w-[10%]  ">
                <svg
                  id="i-search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="mx-auto"
                >
                  <circle cx="14" cy="14" r="12" />
                  <path d="M23 23 L30 30" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-[33%] lg:block hidden ">
          <div className="w-[90%] float-right flex justify-around  text-gray-500">
            <div className="flex  items-end">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-compare.svg"
                alt=""
                className="w-6"
              />
              <p className="text-[14px] "> Compare</p>
            </div>

            <div className="flex items-end ">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/xiaok-cloud-housekeeper/heart-235.png"
                alt=""
                className="w-6 h-6"
              />
              <p className="text-[14px] mt-3"> Whislist</p>
            </div>

            <div className="flex items-end ">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
                alt=""
                className="w-6"
              />
              <p className="text-[14px] mt-3"> Cart</p>
            </div>

            <div className="flex items-end ">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-user.svg"
                alt=""
                className="w-6"
              />
              <p className="text-[14px] mt-3"> Account</p>
            </div>
          </div>
        </div>
      </div>
      </div>
{/* navbar for large and medium screem  end point */}
{/* navbar for small screen start point  */}
{/* sidebar  */}
<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
<div className="relative w-[100vw]">
<div className="md:hidden  flex justify-around  items-center p-3 border-b shadow-lg  bg-white  w-[100vw]  z-10 right-0 ">
<div>

<svg
                    width="27"
                    height="27"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={toggleSidebar}
                  >
                    <path
                      d="M4.91699 20.6043V23.521H34.0837V20.6043H4.91699ZM4.91699 13.3127V16.2293H34.0837V13.3127H4.91699ZM4.91699 6.021V8.93766H34.0837V6.021H4.91699Z"
                      fill="black"
                    />
                  </svg>

</div>
<div>
  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"  alt="" className="w-[130px]" />
</div>
<div className="flex justify-around gap-2 items-center">
<img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-heart.svg" alt="" />
<img src="	https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg" alt="" />
</div>
</div>

</div>


{/* navbar for small screen and point  */}



      {/* navbar start */}
      {/* All Categories start */}

      <div className=" h-16  md:flex border-b mx-5 hidden items-center">
        <div className="w-[18%]  p-2">
          <div className="bg-[#3BB77E] hover:bg-[#44b882ef] duration-300 rounded-md w-[96%] h-[33px] flex justify-center items-center  ">
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-4 h-4"
            >
              <path d="m296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24h-192c-13.255 0-24-10.745-24-24v-160c0-13.255 10.745-24 24-24zm-80 0h-192c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24zm-216 264v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24h-192c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24h-192c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z" />
            </svg>
            <select
              name=""
              id=""
              placeholder="Browse All Categories"
              className="outline-none bg-transparent text-white w-[70%] cursor-pointer lg:text-[13px] md:text-[11px] font-bold  "
            >
              <option value="" selected disabled>
                Browse All Categories
              </option>
              <option value=""> test</option>
              <option value=""> test</option>
              <option value=""> test</option>
            </select>
          </div>
        </div>
        <div className="w-[67%]  ">
          <div className="flex justify-start my-5 ">
            <ul
              id="browse_deals"
              className="flex lg:gap-5 md:gap-2 text-sm text-gray-600 items-center font-semibold"
            >
              <li className="flex gap-2 cursor-pointer duration-200 hover:text-[#3BB77E]">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-hot.svg"
                  alt=""
                />
                Deals
              </li>

              <li className=" hover:text-[#3BB77E] cursor-pointer duration-200">
              <HomeDropdown name="Home"/>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200"><Link to="/about">About</Link></li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">
                <select name="" id="" className="cursor-pointer">
                  <option value="" selected disabled>
                    Shop
                  </option>

                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                </select>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">
                <select name="" id="" className="cursor-pointer">
                  <option value="" selected disabled>
                    Vendors
                  </option>

                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                </select>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">
                <select name="" id="" className="cursor-pointer">
                  <option value="" selected disabled>
                    Mega Menu
                  </option>

                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                </select>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">
                <select name="" id="" className="cursor-pointer">
                  <option value="" selected disabled>
                    Blogs
                  </option>

                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                </select>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">
                <select name="" id="" className="cursor-pointer">
                  <option value="" selected disabled>
                    Pages
                  </option>

                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                  <option value="">Item 1</option>
                </select>
              </li>

              <li className="cursor-pointer hover:text-[#3BB77E] duration-200">Contact</li>
            </ul>
          </div>
        </div>
        <div className="w-[15%] lg:flex hidden justify-center items-center">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-headphone.svg"
            alt=""
            className="lg:w-7  h-10"
          />
          <div className="lg:flex flex-col  leading-none hidden  ">
            <p className="font-bold  lg:text-[20px] md:text-[15px] text-[#3BB77E] flex-wrap">1900 - 888</p>
            <p className="text-[12px] text-left flex-wrap"> 24/7 Support center</p>
          </div>
        </div>
      </div>
      {/* All Categories start */}
    </div>
  );
}

export default Navbar;




export const HomeDropdown =({name})=>{
  return(
    <>
    
    <div data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap hover:text-[#3BB77E] duration-300  rounded bg-primary px-2 pb-2 pt-2.5 text-xs  text-black "
                  id="dropdownMenuButton1ds"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="white"
                >
                 {name}
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1ds"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/vendor"
                      data-te-dropdown-item-ref
                    >
                      Vendor
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/Whislist"
                      data-te-dropdown-item-ref
                    >
                     Whislist
                    </Link>
                  </li>

                  <li>
                  <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/snaks"
                      data-te-dropdown-item-ref
                    >
                     Shop-Grif-right
                    </Link>
                  </li>
                 
                  <li>
                  <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/Shopleft"
                      data-te-dropdown-item-ref
                    >
                     Shop-grid-left
                    </Link>
                  </li>
                  <li>
                  <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/Shoplist"
                      data-te-dropdown-item-ref
                    >
                     Shop-list-right
                    </Link>
                  </li>
                  <li>
                  <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/shoplistright"
                      data-te-dropdown-item-ref
                    >
                     Shop-list-left
                    </Link>
                  </li>
                 
                  <li>
                  <Link 
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      to="/Blog"
                      data-te-dropdown-item-ref
                    >
                     Blog
                    </Link>
                  </li>
                 
                </ul>
              </div>
    
    
    
    
    
    
    
    
    </>
  )
}


