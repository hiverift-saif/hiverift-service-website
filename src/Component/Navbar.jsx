import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Import your components
import Perpetually from "../pages/whatWeDo/Perpetually";
import Services from "../pages/whatWeDo/Services";
import Industries from "../pages/whatWeDo/Industries";
import Products from "../pages/whatWeDo/Products";
import Research from "../pages/whatWeDo/Research";
import Alliances from "../pages/whatWeDo/Alliances";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeComponent, setActiveComponent] = useState("Perpetually");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Perpetually":
        return <Perpetually />;
      case "Services":
        return <Services />;
      case "Industries":
        return <Industries />;
      case "Products":
        return <Products />;
      case "Research":
        return <Research />;
      case "Alliances":
        return <Alliances />;
      default:
        return <Perpetually />;
    }
  };

  return (
    <nav className="w-full shadow-sm bg-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-white cursor-pointer"
        >
          Hiverift
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 font-semibold text-white text-xl">
          <button
            onClick={() => toggleMenu("whatwedo")}
            className="flex items-center gap-2 hover:text-blue-400 focus:outline-none"
          >
            What we do <FaChevronDown className="text-sm mt-0.5" />
          </button>

          <Link
            to="/whoweare"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            Who we are <FaChevronDown className="text-sm mt-0.5" />
          </Link>
          <Link
            to="/insights"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            Insights
          </Link>
          <Link
            to="/careers"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            Careers
          </Link>
          <Link
            to="/technology"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            Technology
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link to="/contactus">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition text-lg">
              Contact us
            </button>
          </Link>
          <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaSearch className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>

      {/* Dropdown / Sidebar Panel */}
      {openMenu === "whatwedo" && (
        <div className="w-full text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="col-span-1 border-r border-gray-700 space-y-6">
              <button
                onClick={() => setActiveComponent("Perpetually")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Perpetually" && "text-blue-400"
                }`}
              >
                Perpetually
              </button>
              <button
                onClick={() => setActiveComponent("Services")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Services" && "text-blue-400"
                }`}
              >
                Services
              </button>

              

              <button
                onClick={() => setActiveComponent("Industries")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Industries" && "text-blue-400"
                }`}
              >
                Industries
              </button>



              <button
                onClick={() => setActiveComponent("Products")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Products" && "text-blue-400"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveComponent("Research")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Research" && "text-blue-400"
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setActiveComponent("Alliances")}
                className={`w-full text-left text-xl font-semibold hover:text-blue-400 ${
                  activeComponent === "Alliances" && "text-blue-400"
                }`}
              >
                Alliances
              </button>
            </div>

            {/* Content Area */}
            <div className="col-span-3 p-6 rounded-lg shadow-md">
              {renderComponent()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
