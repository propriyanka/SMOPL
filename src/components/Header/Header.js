import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logos/logo.png";
import logoName from "../../assets/Images/logos/logoname.png";

const Header = () => {
  return (
    <header className="bg-stone-900 text-black">
      <div className="container mx-[80px] flex justify-between items-center py-1">
        <div className="flex items-center">
          <img src={logo} alt="SMO Logo" className="w-[9vh] mr-2" />
          <img src={logoName} alt="SMO Logo Name" className="w-[15vh] h-auto" />
        </div>
        <nav className="space-x-16 mr-[-150px]">
          {/* Navigation Links */}
          <Link
            to="/"
            className="hover:text-gray-300 text-xl text-yellow-500 font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 text-xl text-yellow-500 font-bold"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-300 text-xl text-yellow-500 font-bold"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-300 text-xl text-yellow-500 font-bold"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 text-xl text-yellow-500 font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
