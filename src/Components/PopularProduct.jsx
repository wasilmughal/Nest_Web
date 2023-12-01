import React, { useState } from "react";

import { populerDataV } from "./LocalDataBase/Popular";
import { useNavigate } from 'react-router-dom';


function PopularProduct() {
  const nav= useNavigate()
  const [data,setdata]=useState(populerDataV.all)
  const [selectedCategory, setSelectedCategory] = useState("");


const handelProduct=()=>{

  if(selectedCategory=="all"){
    setdata(populerDataV.all)
  }else if(selectedCategory==("milk")){
    setdata(populerDataV.Milk)
  }else if(selectedCategory=="coffes"){
    setdata(populerDataV.coffes)
  }else if(selectedCategory=="petfood"){
    setdata(populerDataV.petFood)
  }else if(selectedCategory=="meats"){
    setdata(populerDataV.Meats)
  }else if(selectedCategory=="vagi"){
    setdata(populerDataV.Milk)
  }else if(selectedCategory=="fruits"){
    setdata(populerDataV.petFood)
  }
}

const DetailNavigate =()=>{
  nav("/detail")
}

  return (
    <>
      {/*Popular Products start  */}
      {/* this seation show heading and Categories list */}
      <div className="flex  lg:justify-between md:justify-stretch mx-5 gap-5 flex-wrap items-center" id="FeaturedCategories">
        <div className="">
          <h1 className="w-[98%] flex flex-wrap text-[32px] mx-5 leading-none">
            Popular Products
          </h1>
        </div>

        <div className=" gap-5 text-[15px] flex mx-5 flex-wrap md:flex-nowrap text-gray-700 leading-none items-center cursor-pointer ">
          <p className="text-green-600 hover:mb-1.5 duration-300 flex-nowrap"  onClick={()=>handelProduct(setSelectedCategory("all"))}>All</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap " onClick={()=>handelProduct(setSelectedCategory("milk"))}>Milk & Dairies</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap" onClick={()=>handelProduct(setSelectedCategory("coffes"))}> Coffes & Teas</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap" onClick={()=>handelProduct(setSelectedCategory("petfood"))}>Pet Foods</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap" onClick={()=>handelProduct(setSelectedCategory("meats"))}>Meats</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap" onClick={()=>handelProduct(setSelectedCategory("vagi"))}>Vagetables</p>
          <p className="hover:text-green-600 hover:mb-1.5 duration-300 flex-nowrap" onClick={()=>handelProduct(setSelectedCategory("fruits"))}>Fruits</p>
        </div>
      </div>

      {/* this seation show all populer product card  */}
      {/* product items list Image ,Categories,title, by ,newprice ,oldprice */}
          <div class=" flex justify-between flex-wrap py-10  w-[100%]" id="FeaturedCategories">
            {data.map((v, i) => {
              return (
                <div class="p-2 lg:w-[20%] md:w-1/3 sm:w-[50%] w-full group cursor-pointer " onClick={()=>DetailNavigate()}>
                  <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  ">
                    <img
                      class=" w-full object-cover object-center  duration-300 group-hover:hidden"
                      src={v.img1}
                      alt="blog"
                    />

                    <img
                      class=" w-full object-cover object-center hover:scale-110 transition-all duration-500 hidden group-hover:block"
                      src={v.img2}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-[10px] title-font font-medium text-gray-400 mb-1">
                        {v.cat}
                      </h2>
                      <h1 class="title-font text-[15px] font-medium text-gray-900 mb-3 hover:text-green-600">
                        {v.title}{" "}
                      </h1>
                      <p class="leading-relaxed mb-3 flex items-center text-[12px] text-gray-500">
                        <svg
                          width="13"
                          height="12"
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
                          width="13"
                          height="12"
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
                          width="13"
                          height="12"
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
                          width="13"
                          height="12"
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
                        (4.0)
                      </p>

                      <p className="text-gray-500 -mt-3 text-[13px]">
                        By<span className="text-green-600">{v.by}</span>
                      </p>
                      <div class="flex flex-row justify-between mx-1 items-center">
                        <div className="flex flex-col ">
                          <a class=" items-center md:mb-2 lg:mb-0 text-green-600">
                            {v.price1}
                          </a>
                          <del className="text-gray-500 text-[13px]">
                            {v.price2}
                          </del>
                        </div>
                        <div>
                          <button className="flex items-center justify-center bg-green-300 p-1 w-16  rounded-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 0 24 24"
                              width="20"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                                fill="#16a34a"
                              />
                            </svg>
                            <p className="text-green-600 text-[14px]">Add</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

      {/*Popular Products end  */}
    </>
  );
}

export default PopularProduct;
