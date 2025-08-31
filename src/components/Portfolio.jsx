import React, { useState } from 'react';
import { FaCode, FaAward, FaTools } from 'react-icons/fa';
import Projects from './Projects';
import Certificates from './Certificates';
import TechStack from './TechStack';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const tabs = ["Projects", "Certificates", "Tech Stack"];

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 min-h-screen text-white px-6 py-20 flex flex-col items-center overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#131c31] to-[#0a192f] bg-[length:400%_400%] animate-[gradient_10s_ease_infinite]"
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

      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Portfolio Showcase
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-10">
        Explore my journey through projects, certifications, and technical expertise.
      </p>

      {/* Background Glowing Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 z-10 relative">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`no-underline inline-flex items-center gap-2 px-6 py-3 rounded-full 
        bg-transparent text-white border border-pink-300/40 shadow-md shadow-pink-300/20
        transition-all duration-200 font-medium
        hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600
        hover:shadow-pink-400/50 hover:scale-105
        ${activeTab === tab ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg" : ""}
        active:bg-white active:text-black active:border-transparent active:shadow-lg active:scale-95`}
    >
      {tab === "Projects" && <FaCode />}
      {tab === "Certificates" && <FaAward />}
      {tab === "Tech Stack" && <FaTools />}
      {tab}
    </button>
  ))}
</div>


      {/* Active Tab Content */}
      <div className="z-10 relative w-full max-w-6xl">
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Certificates" && <Certificates />}
        {activeTab === "Tech Stack" && <TechStack />}
      </div>
    </section>
  );
};

export default Portfolio;
