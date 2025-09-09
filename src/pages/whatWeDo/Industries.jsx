import React from "react";

const industriesList = [
  "Banking",
  "Capital Markets",
  "Consumer Packaged Goods and Distribution",
  "Communications, Media, and Information Services",
  "Education",
  "Energy, Resources, and Utilities",
  "Healthcare",
  "High Tech",
  "Insurance",
  "Life Sciences",
  "Manufacturing",
  "Public Services",
  "Retail",
  "Travel and Logistics",
];

export default function Industries() {
  return (
    <div className="w-full">
      {/* <h2 className="text-3xl font-bold mb-6 ">Industries</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-xl font-bold">
        {industriesList.map((industry, index) => (
          <div key={index} className="hover:text-blue-500 cursor-pointer transition">
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}
