import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaPause, FaPlay, FaPlayCircle } from "react-icons/fa";

import tcsImage from "../assets/image/tcs.jpg";

// Swiper images
import img1 from "../assets/image/1.PNG";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";
import img5 from "../assets/image/5.png";
import img6 from "../assets/image/6.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function HeroSlider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className=" ">


      {/* Swiper Slider */}
<div className="relative w-full bg-black ">
      {/* Swiper Slider */}
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={isPlaying ? { delay: 6000, disableOnInteraction: false } : false}
          loop={true}
          className="h-[80vh] sm:h-screen"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img1}
                alt="Slide 1"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              {/* Overlay */}
              <div className="absolute inset-0 z-10"></div>
              {/* Text */}
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
                  Digital Transformation
                </h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">
                  Reimagining businesses with next-gen solutions
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img2}
                alt="Slide 2"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 z-10"></div>
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">AI & Cloud</h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">
                  Innovating with the power of Artificial Intelligence
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Explore AI
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img3}
                alt="Slide 3"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 z-10"></div>
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">Consulting Services</h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">
                  Helping enterprises achieve excellence
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img4}
                alt="Slide 4"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 z-10"></div>
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">Future Ready Workforce</h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">Building skills for tomorrow’s world</p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Join Us
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img5}
                alt="Slide 5"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 z-10"></div>
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">Sustainability</h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">Driving growth with responsibility</p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="relative flex justify-center items-center h-full">
              <img
                src={img6}
                alt="Slide 6"
                className="object-contain w-full h-full sm:max-h-[80%] sm:max-w-[70%] z-0 rounded-2xl opacity-30"
              />
              <div className="absolute inset-0 z-10"></div>
              <div className="absolute z-20 flex flex-col justify-center items-start px-4 sm:px-24 text-white max-w-xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">Innovation Labs</h2>
                <p className="text-base sm:text-lg md:text-2xl mb-6">Where technology meets creativity</p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
                  Discover
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-6 left-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition z-30"
        >
          {isPlaying ? <FaPause className="text-black" /> : <FaPlay className="text-black" />}
        </button>
      </div>
    </div>









      {/* Hero Section with Background Image + Video Button */}
  <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={tcsImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl px-6 md:px-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Staying ahead of the pace of change
        </h1>

        <p className="text-lg md:text-2xl mb-6 leading-relaxed">
          Enterprises that embrace agility <br />
          and innovation can navigate the shifting <br />
          global environment with confidence, and <br />
          refine success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition text-lg">
            Learn More
          </button>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-white rounded-full hover:bg-gray-200 transition"
          >
            <FaPlayCircle className="text-blue-600 text-2xl" />
            <span className="text-blue-600 font-semibold">Watch this video</span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90">
          <div className="relative w-full max-w-4xl p-4">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>

    </div>
  );
}
