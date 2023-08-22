import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faEnvelope,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as farEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importing the solid envelope icon
import logo from "../../assets/Images/logos/logo.png";
import logoName from "../../assets/Images/logos/logoname.png";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12 mt-[6%]">
      <div className="flex justify-center items-center mb-8">
        <img src={logo} alt="SMO Logo" className="w-[10vh] mr-2" />
        <img src={logoName} alt="SMO Logo Name" className="w-[17vh] h-auto" />
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="rounded-full bg-white text-stone-900 w-50 p-2 relative">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border-none focus:outline-none pr-12"
          />
          <button className="absolute top-0 right-0 bg-yellow-500 font-semibold text-stone-900 px-4 py-2 h-full rounded-r">
            EMAIL
          </button>
        </div>
      </div>
      <div className="mb-6">
        <nav className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Services
          </a>
          <a href="#" className="text-white hover:underline">
            Portfolio
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-yellow-500 hover:text-yellow-300">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-300">
          <FontAwesomeIcon icon={farEnvelope} size="lg" />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-300">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-300">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-300 text-center">
        &copy; {new Date().getFullYear()} SMOPL Architects. All Rights Reserved.
      </p>
      <p className="text-sm text-gray-300 text-center">
        Designed by Priyanka.
      </p>
    </footer>
  );
};

export default Footer;
