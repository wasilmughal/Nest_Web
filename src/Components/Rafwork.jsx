import React, { useEffect } from 'react'
import { Dropdown, Ripple, initTE } from "tw-elements";




function Rafwork() {
    useEffect(() => {
        initTE({ Dropdown, Ripple });
    
        // Function to change text after 2 seconds
        const changeText = () => {
          setDisplayText("100% Secure delivery without contacting the courier");
        };
    
        // Set a timeout to trigger the text change after 2 seconds
        setTimeout(changeText, 2000);
      }, []);
  return (
    <>
    
    <li className=" ">
              <div data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap hover:text-[#3BB77E] duration-300 hover:mb-1 rounded bg-primary px-2 pb-2 pt-2.5 text-xs  text-black "
                  id="dropdownMenuButton1ds"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="white"
                >
                  Home
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
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
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Home 1
                    </a>
                  </li>

                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Home 1
                    </a>
                  </li>
                </ul>
              </div>
            </li>
    
    
    </>
  )
}

export default Rafwork