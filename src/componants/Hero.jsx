import React from "react";
import { assets } from "../../assets/assets";

import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Ajay Chauhan</span>
          </h1>

          <h2 className="text-2xl md:text-4xl sm:text-center font-semibold mb-6 typewriter">
            ⚛️ React Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Frontend Developer specializing in React.js, with a growing focus on
            Full-Stack Development. Passionate about building responsive,
            user-friendly, and modern web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            
            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple to-pink-500 rounded-lg font-medium shadow-lg hover:scale-105 transition-all duration-300"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="/RESUME.pdf"
              download="Ajay_Chauhan_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 border-2 border-purple rounded-lg font-medium hover:bg-purple/20 hover:scale-105 transition-all duration-300"
            >
              <FaDownload />
              Download Resume
            </a>
            
<a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'> View Work </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-40 blur-2xl"></div>

            <motion.img
              src={assets.profileImg}
              alt="Ajay Chauhan"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-purple shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default Hero;