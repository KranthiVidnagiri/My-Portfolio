import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kc2bptt",
        "template_lbl1gpp",
        form.current,
        "UsWhuEvEmctfH7Ynd"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to Send Message, Try Again!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-[#0a192f] via-[#111827] to-[#0a192f] text-white px-4 py-20 flex flex-col items-center"
    >
      {/* Floating Bubbles */}
      <div className="absolute w-full h-full z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${
              i % 3 === 0
                ? "bg-pink-500/20"
                : i % 3 === 1
                ? "bg-purple-500/20"
                : "bg-white/20"
            } animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse z-10 relative">
        Contact Me
      </h2>
      <p className="text-gray-400 text-center mb-14 text-base sm:text-lg z-10 relative">
        Let’s collaborate! Drop a message or connect with me 👇
      </p>

      {/* Contact Card */}
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6 hover:shadow-purple-700/30 transition z-10 relative">
        <h3 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get in Touch
        </h3>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:scale-105 transition"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105 transition"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:scale-105 transition"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 py-3 rounded-xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🚀 Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-center">Connect With Me</h4>

          <a
            href="https://www.linkedin.com/in/kranthividnagiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white/10 hover:bg-gradient-to-r from-blue-500 to-gray-700 hover:scale-105 rounded-xl transition text-white font-semibold no-underline"
          >
            <FaLinkedin className="text-blue-400 text-2xl" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/medicine_friend_192?igsh=MmthNXNiZ3gwY3h1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white/10 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 rounded-xl transition text-white font-semibold  no-underline"
          >
            <FaInstagram className="text-pink-400 text-2xl" />
            <span className="font-medium">Instagram</span>
          </a>

          <a
            href="mailto:vidnagiri@gmail.com"
            className="flex items-center gap-3 p-3 bg-white/10 hover:bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 rounded-xl transition text-white font-semibold  no-underline"
          >
            <FaEnvelope className="text-red-400 text-2xl" />
            <span className="font-medium">Email</span>
          </a>

          <a
            href="https://github.com/KranthiVidnagiri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white/10 hover:bg-gradient-to-r from-gray-500 to-gray-700 hover:scale-105 rounded-xl transition text-white font-semibold  no-underline"
          >
            <FaGithub className="text-gray-300 text-2xl" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-10 text-center z-10 relative">
        Made by <span className="text-pink-400">KranthiVidnagiri</span> © 2025 - All Rights Reserved.
      </p>
    </section>
  );
};

export default Contact;
