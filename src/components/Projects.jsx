import React from 'react';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import Diabetes from '../assets/Diabetes.jpg';
import FaceTrack from '../assets/FaceTrack.png';
import EcoEyes from '../assets/EcoEyes.png';

const projects = [
  {
    title: "FaceTrack | Smart Face Recognition Attendance System",
    description: "Developed a real-time Face Recognition Attendance System (FRS) to automate student and faculty attendance with accurate detection and reporting.",
    image: FaceTrack,
    demoLink: "#",
    detailsLink: "https://github.com/KranthiVidnagiri/FaceTrack-Smart-Face-Recognition-Attendance-Systemt",
    tech: ["ReactJS", "Tailwind CSS", "Node.js (Express)", "MongoDB", "OpenCV", "DeepFace"]
  },
  {
    title: "Diabetes-Prediction-Using-Machine-Learning-Model",
    description: "Web application to predict whether a user has diabetes using key health parameters; provides a simple interface for input and displays prediction results clearly.",
    image: Diabetes,
    demoLink: "#",
    detailsLink: "https://github.com/KranthiVidnagiri/Diabetes-Prediction-Using-Machine-Learning-Model",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "Python", "scikit-learn"]
  },
  {
    title: "Online Leave Management System (OLMS)",
    description: "Online Leave Management System to apply, track, and approve employee leaves efficiently within an organization..",
    image: EcoEyes,
    demoLink: "#",
    detailsLink: "https://github.com/KranthiVidnagiri/OLMS",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-pink-500/30 hover:scale-[1.03] transition-all"
        >
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

          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-between items-center">
          {/* Live Demo */}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-1 text-pink-400 hover:text-white transition hover:underline"
          >
          Live Demo <FaExternalLinkAlt size={12} />
          </a>

          {/* Transparent Details Button */}
          <a
            href={project.detailsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center gap-2 border border-pink-500 text-pink-400 px-4 py-1 rounded-full text-sm hover:bg-pink-500 hover:text-white transition"
          >
          Details <FaArrowRight size={12} />
          </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;
