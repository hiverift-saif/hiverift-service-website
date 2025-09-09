import React from "react";
import img1 from "../assets/image/newsroom.jpg";
import img2 from "../assets/image/press.jpg";
import img3 from "../assets/image/analyst.jpg";

export default function SpotlightSection() {
  return (
    <section className=" text-white py-12 px-4 sm:px-6 lg:px-12 bg-black">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Spotlight on TCS</h2>
          <a
            href="/spotlight"
            className="text-white hover:underline text-3xl font-bold "
          >
            View all →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img
              src={img1}
              alt="Newsroom"
              className="w-full h-[700px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
            <div className="absolute bottom-6 left-6 right-6 mb-10">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Newsroom
              </h3>
              <p className="text-lg md:text-3xl font-medium mb-4">
                Stay up-to-date with the latest TCS news.
              </p>
              <a
                href="/newsroom"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img
              src={img2}
              alt="Press Release"
              className="w-full h-[700px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
            <div className="absolute bottom-6 left-6 right-6 mb-10">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">
                Press Release
              </h3>
              <p className="text-lg font-medium mb-4 md:text-3xl ">
                TCS becomes 2nd IT brand worth over $20 billion.
              </p>
              <a
                href="/press-release"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img
              src={img3}
              alt="Analyst Relations"
              className="w-full h-[700px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
            <div className="absolute bottom-6 left-6 right-6 mb-10">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">
                Analyst Relations
              </h3>
              <p className="text-lg md:text-3xl font-medium mb-4">
                Analysts recognize TCS as a cross-industry leader.
              </p>
              <a
                href="/analyst-relations"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
