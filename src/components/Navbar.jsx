import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BiSolidHandUp } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import meta from "../Data/meta";

const navigation = meta.navigation || [];

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:top-4 left-1/2 w-full rounded-sm bg-purple-200 md:w-10/12 md:left-1/2 md:transform -translate-x-1/2 md:rounded-full p-3 shadow-lg z-50">
      <div className="flex justify-between items-center">
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-purple-900 text-2xl font-bold">
            Smruti-Pankha
          </span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-purple-700 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
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

        {/* Explore More Button */}
        <div className="hidden md:block">
          <a
            href="#Research"
            className="bg-purple-500 flex items-center text-white px-4 py-2 rounded-full hover:bg-purple-600"
          >
            <BiSolidHandUp className="mx-2" />
            Explore ✨ More
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-3 space-y-4 bg-purple-300 p-4 rounded-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false); // Close menu on click
              }}
              className={`text-lg flex items-center font-medium px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${
                active === item.name
                  ? "bg-purple-500 text-white"
                  : "text-purple-700 hover:bg-purple-400 hover:text-white"
              }`}
            >
              {item.icons}
              {item.name}
            </a>
          ))}

          {/* Explore More Button in Mobile View */}
          <a
            href="#Research"
            className="bg-purple-500 flex items-center text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            <BiSolidHandUp className="mx-2" />
            Explore ✨ More
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
