// Sidebar.js
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-screen z-10 bg-white top-0  text-black w-[60%] transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between  p-5 items-center border-b">
        <img
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
          alt=""
          className="w-[110px]"
        />

        <div className="bg-green-100 rounded-2xl p-1" onClick={toggleSidebar}>
          <svg
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
          </svg>
        </div>
      </div>

      <div className=" flex justify-center mx-5  items-center py-7 relative">
        <input
          className="text-sm leading-none text-left bg-gray-100 text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
          type="text"
          placeholder="Search for items..."
        />
        <svg
          className="absolute right-3 z-10 cursor-pointer"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L15 15"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="m-5">
        <ul className="leading-[50px] text-gray-600">


          <li className="flex justify-between border-b items-center">
            Home
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Vendors
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Mega Menu
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Blogs
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Pages
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Language
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>
        </ul>
      </div>


{/* // {/ Location Sign/in sign/up list /} */}

<div className=" mx-16 mt-10">
  <ul className="leading-8">

    <li className="flex  items-center">
      <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png" className="h-5 w-5" alt="" />
      Our Location</li>


      <li className="flex  items-center">
        <img src="" alt="" />
      Log in / Sign Up
      </li>


      <li className="flex  items-center">
      (+01) - 2345 - 6789
      </li>



  </ul>
</div>



    </div>
  );
};

export default Sidebar;




  
 
