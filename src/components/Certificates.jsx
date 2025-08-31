import React from "react";
import cybersecurity from "../assets/cybersecurity.png";
import JavaFoundationCert from "../assets/JavaFoundationCert.png";
import OracleSQLCert from "../assets/OracleSQLCert.png";

const certificates = [
  {
    title: "Foundation Of Cybersecurity",
    image: cybersecurity,
    link: "https://drive.google.com/file/d/17LHNow3rEEsfW3CNg6V6SCI5uGn2Q92e/view?usp=drive_link",
  },
  {
    title: "Java Foundation Certification",
    image: JavaFoundationCert,
    link: "https://drive.google.com/file/d/1axfhns-YsFrjV0bRSPzAffPKkQwhBrIj/view?usp=drive_link",
  },
  {
    title: "Database Programming with SQL",
    image: OracleSQLCert,
    link: "https://drive.google.com/file/d/1xHFLFSQNEiDMQ_-kjl_DS7EUsILDWStP/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mt-6">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-pink-500/30 hover:scale-[1.03] transition-all"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-48 object-contain rounded-md mb-4 border border-gray-700"
          />
          <h3 className="text-white text-lg font-semibold mb-4">
            {cert.title}
          </h3>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 px-6 py-3 rounded-full 
               bg-transparent text-white border border-pink-300/40 shadow-md shadow-pink-300/20
               transition-all duration-200
               hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600
               hover:shadow-pink-400/50 hover:scale-105
               active:bg-white active:text-black active:border-transparent active:shadow-lg active:scale-95"
          >
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
