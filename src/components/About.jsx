import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Floating Grey Bubbles */}
      <div className="absolute w-full h-full z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl w-full text-center z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h2>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I'm a passionate <span className="text-pink-400 font-medium"> MERN Stack Developer </span>, 
          <span className="text-pink-400 font-medium">Java </span>, and 
          <span className="text-pink-400 font-medium"> AI Enthusiast</span> who thrives on building 
          clean, elegant, and responsive applications. I enjoy turning complex problems into 
          intuitive, user-friendly solutions that leave a lasting impact. A lifelong learner, I love 
          exploring new technologies and pushing creative boundaries. Always eager to collaborate on 
          meaningful projects that combine innovation with real-world impact.
        </p>

        {/* Resume Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://drive.google.com/file/d/1g-vkonKYN1r9cCj5EWBLPgHGv9ikV08o/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-full 
               bg-transparent text-white border border-pink-300/40 shadow-md shadow-pink-300/20
               transition-all duration-200
               hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600
               hover:shadow-pink-400/50 hover:scale-105
               active:bg-white active:text-black active:border-transparent active:shadow-lg active:scale-95"
          >
            <FaEye /> View Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1g-vkonKYN1r9cCj5EWBLPgHGv9ikV08o/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-full 
               bg-transparent text-white border border-pink-300/40 shadow-md shadow-pink-300/20
               transition-all duration-200
               hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600
               hover:shadow-pink-400/50 hover:scale-105
               active:bg-white active:text-black active:border-transparent active:shadow-lg active:scale-95"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
