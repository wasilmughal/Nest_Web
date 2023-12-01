import React, { useEffect, useState } from "react";
import backimg from "../assets/back.jpg";
import { TopSelling } from './LocalDataBase/Popular'
import SmallCards from './SmallCardData'

function Topseeling() {

  const [card,setcard]=useState({
    card1:[TopSelling.Topse],
    card2:[TopSelling.treding],
    card3:[TopSelling.recently],
    card4:[TopSelling.toprate]

  })


 




   

    




console.log(card.card2[0])

  return (
    <>
     

<section class="text-gray-600 body-font" id="FeaturedCategories">
  <div class="container px-5 py-2 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class=" text-gray-900 mb-1 text-[22px] text-left">Top Selling</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>

        <nav class="flex flex-col text-left  items-center -mb-1 space-y-2.5">
          {
            card.card1[0].map((v,i)=>{
return(
  <SmallCards title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 class=" text-gray-900 mb-1 text-[22px] text-left">Trending Products</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>   
             <nav class="flex flex-col sm:items-start text-left  items-center -mb-1 space-y-2.5">
             {
            card.card2[0].map((v,i)=>{
return(
  <SmallCards title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 class=" text-gray-900 mb-1 text-[22px] text-left">Recently added</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>   
             <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
             {
            card.card3[0].map((v,i)=>{
return(
  <SmallCards title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 class=" text-gray-900 mb-1 text-[22px] text-left">Top Rated</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>    
            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            {
            card.card4[0].map((v,i)=>{
return(
  <SmallCards title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
    </div>
  </div>
</section>






    </>
  );
}

export default Topseeling;
