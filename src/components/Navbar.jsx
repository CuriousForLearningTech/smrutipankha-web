import React, { useState } from "react";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Projects", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Features", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-10/12 bg-purple-300 rounded-full p-3 shadow-lg z-50">
      {/* <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-8/12 bg-purple-300 rounded-b-full p-3 shadow-lg z-50"> */}
      <div className="flex justify-between items-center">
        {/* Left: Logo & Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-purple-900 text-xl font-semibold">
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
              className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                active === item.name
                  ? "bg-purple-500 text-white"
                  : "text-purple-700 hover:bg-purple-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Explore More Button */}
        <div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
            Explore More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
