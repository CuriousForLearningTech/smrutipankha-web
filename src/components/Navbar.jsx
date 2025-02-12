import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BiSolidHandUp } from "react-icons/bi";

import meta from "../Data/meta";

const navigation = meta.navigation || [];

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-10/12 bg-purple-200 rounded-full p-3 shadow-lg z-50">
      {/* <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-8/12 bg-purple-300 rounded-b-full p-3 shadow-lg z-50"> */}
      <div className="flex justify-between items-center">
        {/* Left: Logo & Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-purple-900 text-2xl font-bold">
            Smruti-Pankha
          </span>
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`text-lg flex items-center font-medium px-3 py-2 rounded-full hover:scale-110 transition-all duration-300 ${
                active === item.name
                  ? "bg-purple-500 text-white"
                  : "text-purple-700 hover:bg-purple-400 hover:text-white"
              }`}
            >
              {item.icons}
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Explore More Button */}
        <div>
          <button
            href="#Research"
            className="bg-purple-500 flex items-center text-white px-4 py-2 rounded-full hover:bg-purple-600"
          >
            <BiSolidHandUp className="mx-2 py-auto" />
            Explore ✨ More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
