import React from 'react';
import { motion } from 'framer-motion';
import vishnuLogo from '../assets/image.png';
import polytechnicLogo from '../assets/image.png';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Education = () => {
  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative snap-start min-h-screen bg-[#0a192f] text-white px-6 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Big Hero-like glowing blobs */}
        <div className="absolute w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-600 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        {/* Small grey floating bubbles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-4xl w-full text-center z-10 relative">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Education
        </h2>

        <motion.div
          className="space-y-10 text-left"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* B.Tech Card */}
          <motion.div
            variants={cardVariant}
            className="flex flex-col md:flex-row items-center bg-white/5 p-6 rounded-xl border border-white/10 shadow-md gap-6 hover:shadow-pink-500/20 transition duration-300"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src={vishnuLogo} alt="Vishnu Logo" className="w-full h-full object-cover" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-pink-400">Bachelor of Technology</h3>
              <p className="text-gray-300">CSE(Artificial Intelligence & Data Science)</p>
              <p className="text-gray-300">Vishnu Institute of Technology, Bhimavaram</p>
              <p className="text-gray-400">2023 - 2026</p>
              <p className="text-gray-400 mt-1">CGPA: <span className="text-white font-medium">8.59</span></p>
            </div>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            variants={cardVariant}
            className="flex flex-col md:flex-row items-center bg-white/5 p-6 rounded-xl border border-white/10 shadow-md gap-6 hover:shadow-pink-500/20 transition duration-300"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src={polytechnicLogo} alt="Polytechnic Logo" className="w-full h-full object-cover" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-pink-400">Diploma - CME</h3>
              <p className="text-gray-300">Computer Engineering</p>
              <p className="text-gray-300">Smt. B. Seetha Polytechnic College</p>
              <p className="text-gray-400">2020 - 2023</p>
              <p className="text-gray-400 mt-1">Percentage: <span className="text-white font-medium">90.58%</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
