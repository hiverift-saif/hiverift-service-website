import React from "react";
import Navbar from "../Component/Navbar";
import HeroSlider from "./HeroSlider";
import CustomerStoriesSwiper from "./CustomerStoriesSwiper ";
import IndustrySelector from "./IndustrySelector ";
import TechnologyCards from "./TechnologyCards";
import SpotlightSection from "./SpotlightSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
<HeroSlider/>
<CustomerStoriesSwiper/>
<IndustrySelector/>
<TechnologyCards/>
<SpotlightSection/>
      </div>
    </>
  );
}
