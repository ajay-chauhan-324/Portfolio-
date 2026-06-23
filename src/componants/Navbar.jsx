import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
  const links = [
    "Home",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
    "About",
  ];

  const [showmenu, setShowmenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className=" container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className=" text-3xl font-bold text-white">
            Ajay
            <span className="text-purple">Chauhan</span>
            <div className=" w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        {/* mobile buttons */}
        <div className="md:hidden">
          {showmenu ? (
            <FaXmark
              onClick={() => setShowmenu(!showmenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowmenu(!showmenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menus */}

      {showmenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          {links.map((link) => (
            <a
              onClick={() => setShowmenu(!showmenu)}
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
