import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">Smruti-Pankha</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering lives with AI-driven solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Smruti-Pankha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
