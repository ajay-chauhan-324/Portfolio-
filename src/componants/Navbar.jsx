import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const links = [
    "home",
    "skills",
    "projects",
    "experience",
    "contact",
    "about",
  ];

  const [showmenu, setShowmenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer flex items-center gap-2"
          >
            <h1 className="text-3xl font-bold text-white">
              Ajay <span className="text-purple">Chauhan</span>
            </h1>
            <div className="w-3 h-3 bg-purple rounded-full animate-pulse"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                spy={true}
                duration={500}
                offset={-80}
                activeClass="text-purple"
                className="cursor-pointer capitalize text-white/80 hover:text-purple transition duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowmenu(!showmenu)}
            className="md:hidden text-white text-2xl"
          >
            {showmenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            showmenu ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-dark-300 rounded-xl p-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setShowmenu(false)}
                className="cursor-pointer capitalize py-3 text-center rounded-lg text-white/80 hover:bg-purple hover:text-white transition duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;