"use client";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setStatus("Please enter your email!");
      return;
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Welcome to Lokesh's Portfolio",
          message: "Thanks for subscribing! We'll keep your idea fresh 🚀",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Email sent successfully!");
        setEmail("");
      } else {
        setStatus("Something went wrong!");
      }
    } catch (error) {
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="bg-[#131315] text-white w-full min-h-screen flex items-center justify-center px-6 mt-6 rounded-4xl">
      <div className="max-w-5xl w-full p-8 md:p-12">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          LET’S DEVELOP <br /> YOUR IDEA
        </motion.h1>

        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-3">Keep Your Idea Fresh</p>
          <div className="flex flex-col sm:flex-row shadow-lg rounded-lg overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 bg-gray-900 text-white focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-black px-6 py-3 font-semibold hover:bg-amber-300 transition"
              onClick={handleSubmit}
            >
              Get Started
            </motion.button>
          </div>
          {status && <p className="mt-2 text-sm text-gray-400">{status}</p>}
        </motion.div>

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              { icon: <BsGithub size={24} />, link: "https://github.com/lokeshbhaskar?tab=repositories", color: "hover:text-gray-300" },
              { icon: <LiaLinkedin size={24} />, link: "https://www.linkedin.com/in/lokesh-kumar-3369a8219/", color: "text-blue-400" },
              { icon: <FaInstagram size={24} />, link: "#", color: "text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact Details */}
          <div className="space-y-2 text-gray-300">
            <p>
              Phone:{" "}
              <a href="tel:7654463578" className="text-amber-400">
                +91 7654463578
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:lokeshbhaskar28@gmail.com"
                className="text-amber-400"
              >
                lokeshbhaskar28@gmail.com
              </a>
            </p>
            <p>Address: Siwan, Bihar</p>
          </div>
          <motion.div
            className="flex items-center justify-center md:justify-end"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="mailto:lokeshbhaskar28@gmail.com"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Let’s Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
