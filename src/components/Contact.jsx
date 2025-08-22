"use client"
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setStatus("please enter your email!!");
      return;
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "content-Type": "application/json" },
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
        setStatus("something went wrong!!");
      }
    } catch (error) {
      setStatus("something went wrong!!");
    }
  };
  return (
    <div className="bg-black text-white w-full min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-black p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          LET’S DEVELOP <br /> YOUR IDEA
        </h1>
        {/* Email Subscription */}
        <div className="mb-12">
          <p className="text-gray-400 mb-2">Keep It Your Idea Fresh</p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-sm focus:outline-none"
            />
            <button
              className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition"
              onClick={handleSubmit}
            >
              Get Started
            </button>
          </div>
          {status && <p className="mt-2 text-sm text-gray-400">{status}</p>}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="icon-box bg-gray-800 p-2 rounded-full    ">
              <BsGithub size={25} className="icon" />
            </a>
            <a
              href="#"
              className="icon-box bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <LiaLinkedin className="icon text-blue-400" size={25} />
            </a>
            <a
              href="#"
              className="icon-box bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <FaInstagram className="icon text-pink-400" size={25} />
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <p>
              Phone:{" "}
              <a href="tel:7654463578" className="text-blue-400">
                91+ 7654463578
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:lokeshbhaskar28@gmail.com"
                className="text-blue-400"
              >
                lokeshbhaskar28@gmail.com
              </a>
            </p>
            <p>Address: siwan , Bihar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
