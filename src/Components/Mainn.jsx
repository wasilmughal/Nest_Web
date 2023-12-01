import React from "react";
import Slider from "./Slider";
import SmallCardContent from "./SmallCardContent";
import PopularProduct from "./PopularProduct";
import Topseeling from "./Topseeling";
import DailyBestSells from "./DailyBestSells";
import DealsOfTheDay from "./DealsOfTheDay";

function Main() {
  return (
    <div className="">
      {/* main contant */}
      <Slider/>
      <SmallCardContent />
      <PopularProduct />
      <DailyBestSells/>
      <DealsOfTheDay/>
      <Topseeling />
    </div>
  );
}

export default Main;
