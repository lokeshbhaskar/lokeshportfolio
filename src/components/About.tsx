"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-20 py-2 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Index */}
        <motion.div className="flex flex-col  md:flex-row md:justify-around items-center h-auto md:h-screen transition duration-300 gap-4 md:gap-0 "
          initial={{ opacity: 0, x: -200 }}       // start hidden + moved down
          whileInView={{ opacity: 1, x: 0 }}    // animate when in view
          transition={{ duration: 0.7,ease: "linear" }}
          viewport={{ once: false, amount: 0.2 }} // trigger once, when 20% visible
        >
          <p className="text-3xl text-gray-400 cursor-pointer">[ 01 ]</p>
          <p className="text-3xl md:text-5xl mt-0 md:mt-10 hover:text-amber-200 text-gray-300 font-extrabold cursor-pointer md:[writing-mode:vertical-lr]">ABOUT ME</p>
        </motion.div>
        {/* Center Content */}
        <motion.div className="space-y-6"
          initial={{ opacity: 0, y: 200 }}       // start hidden + moved down
          whileInView={{ opacity: 1, y: 30 }}    // animate when in view
          transition={{ duration: 1, delay:0.3,ease: "linear" }}
          viewport={{ once: false, amount: 0.1 }} // trigger once, when 20% visible
        >
          <h2 className="text-lg font-semibold hidden md:block">About</h2>
          <p className="text-sm leading-relaxed text-gray-300 transition duration-300   cursor-pointer">
            I'm Lokesh, a passionate full-stack web developer with a strong focus on creating dynamic and responsive web applications. I specialize in technologies like React, Node.js, Express.js, MongoDB, Tailwind CSS, and PHPMyAdmin.
          </p>
          <p className="text-sm leading-relaxed text-gray-300 mt-4">
            I’ve built several real-world projects that reflect my ability to design, develop, and deploy complete applications. Some of my key works include:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-300 mt-2 space-y-1">
            <li><strong>UpdateX4</strong> – A modern news aggregator app using APIs to fetch and display daily updates.</li>
            <li><strong>ExpenseEase</strong> – A budget management dashboard with login/signup, database integration, and user analytics.</li>
            <li><strong>Resume Analyzer</strong> – A smart resume evaluator with ATS scoring, PDF parsing, and skill matching.</li>
          </ul>

          <p className="text-sm leading-relaxed text-gray-300 mt-4">
            With a commitment to clean code, user-first design, and continuous learning, I aim to contribute to teams where creativity and technology meet. I'm currently looking for opportunities to grow as a developer and be part of projects that make a real impact.
          </p>

        </motion.div>

        {/* Right Content */}
        <motion.div className="space-y-6 mt-6"
          initial={{ opacity: 0, x: 200 }}       // start hidden + moved down
          whileInView={{ opacity: 1, x: 0 }}    // animate when in view
          transition={{ duration: 0.7, ease: "linear" }}
          viewport={{ once: false, amount: 0.1 }} // trigger once, when 20% visible
        >
          <h2 className="text-lg font-semibold">Approach Angle</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            I approach every project with a blend of logic, creativity, and usability. Whether it’s building scalable dashboards or analyzing resumes with precision, I focus on creating solutions that not only work technically but also provide real value to users.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            My process involves understanding the problem deeply, planning the architecture, and ensuring every line of code contributes to a clean, optimized, and responsive application.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About