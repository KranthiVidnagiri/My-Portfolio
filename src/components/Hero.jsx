import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiExternalLink, FiMail } from "react-icons/fi";
import heroImg from "../assets/profile.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-6 py-20 overflow-hidden"
    >
      <div className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl top-[-40px] left-[-40px] animate-pulse z-20"></div>
      {/* Floating Particles Behind Everything */}
      <div className="absolute w-full h-full z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              I'm Kranthi Kumar Vidnagiri
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            A passionate{" "}
            <span className="text-pink-400">Web Developer</span> crafting
            modern UIs & smooth user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-8 ml-6">
            <div className="flex gap-6 text-3xl items-center md:ml-48">
              <a
                href="https://github.com/KranthiVidnagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/KranthiVidnagiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start mt-6">
            <div className="flex gap-6 md:ml-28">
              <Link
                to="projects"
                smooth={true}
                duration={100}
                offset={-96}
                className="cursor-pointer no-underline bg-[#0b0f1e] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition duration-300 group"
              >
                Projects
                <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="#contact"
                className="no-underline bg-[#0b0f1e] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition duration-300 group"
              >
                Contact
                <FiMail className="group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 
                sm:flex-row sm:justify-start sm:ml-36 md:ml-15 lg:ml-20">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8555067676"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-full 
               bg-transparent text-white border border-pink-300/40 shadow-md shadow-pink-300/20
               transition-all duration-200
               hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600
               hover:shadow-pink-400/50 hover:scale-105
               active:bg-white active:text-black active:border-transparent active:shadow-lg active:scale-95"
            >
              <FaWhatsapp style={{ color: "#25D366", fontSize: "1rem" }}/> ping me on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Section - Image with Glowing Blobs */}
        <div className="relative flex justify-center md:justify-end">
          {/* Glowing Blobs */}
          <div className="absolute w-80 h-80 bg-pink-500 opacity-30 rounded-full blur-3xl bottom-[-40px] right-[-40px] animate-pulse z-20"></div>
          

          {/* Profile Image */}
          <img
            src={heroImg}
            alt="Profile illustration"
            className="relative z-10 w-72 sm:w-80 md:w-[400px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
