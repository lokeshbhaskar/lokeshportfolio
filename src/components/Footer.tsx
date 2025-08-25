import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400 py-8 px-6 rounded-4xl mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6 gap-6 md:gap-0">
          {/* Logo or Title */}
          <h1 className="text-xl font-bold text-white tracking-wide">Lokesh.dev</h1>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition"><Github size={18} /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-xs text-gray-500">
          <p>© 2025 Lokesh. All rights reserved.</p>
          <p>Built with ❤️ using Nextjs & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
