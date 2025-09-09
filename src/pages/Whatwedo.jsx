import React from "react";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const sections = [
    { name: "Services", path: "/what-we-do/services" },
    { name: "Industries", path: "/what-we-do/industries" },
    { name: "Products", path: "/what-we-do/products" },
    { name: "Research", path: "/what-we-do/research" },
    { name: "Alliances", path: "/what-we-do/alliances" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-black mb-8 text-center">
        What We Do
      </h1>

      {/* Submenu List */}
      <ul className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        {sections.map((section) => (
          <li key={section.name}>
            <Link
              to={section.path}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Optional: Default Content */}
      <p className="text-center text-gray-700 text-lg">
        Click on a section above to explore more.
      </p>
    </div>
  );
}
