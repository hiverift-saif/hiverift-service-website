import React from "react";

const Perpetually = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Where <span className="text-blue-600">Adaptability</span> Meets Advantage
      </h1>

      {/* Paragraph */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
        At TCS, we don’t just help businesses transform. We help them{" "}
        <span className="font-semibold text-gray-800">
          become perpetually adaptive enterprises
        </span>
        , built to evolve continuously and confidently in a world of constant
        change.
      </p>

      {/* Button */}
      <button className="px-8 py-3 text-lg font-medium border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
        Adaptability Starts Here
      </button>
    </div>
  );
};

export default Perpetually;
