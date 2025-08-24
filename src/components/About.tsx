"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#131315] min-h-screen text-white px-6 md:px-12 py-12 flex items-center mt-6 rounded-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center w-full overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            I'm Lokesh, a passionate full-stack web developer with a strong focus
            on creating dynamic and responsive web applications. I specialize in
            technologies like React, Node.js, Express.js, MongoDB, Tailwind CSS.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            I’ve built several real-world projects that reflect my ability to
            design, develop, and deploy complete applications:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>
              <strong>UpdateX4</strong> – A modern news aggregator app using
              APIs to fetch and display daily updates.
            </li>
            <li>
              <strong>ExpenseEase</strong> – A budget management dashboard with
              login/signup, database integration, and user analytics.
            </li>
            <li>
              <strong>Resume Analyzer</strong> – A smart resume evaluator with
              ATS scoring, PDF parsing, and skill matching.
            </li>
          </ul>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/lokeshportfolio.jpg"
            width={300}
            height={300}
            alt="Lokesh Portfolio"
            className="shadow-[0_4px_30px_rgba(255,255,255,0.25)] object-contain w-full max-w-[300px] rounded-3xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-lg font-semibold">Approach Angle</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            I approach every project with a blend of logic, creativity, and
            usability. Whether it’s building scalable dashboards or analyzing
            resumes with precision, I focus on creating solutions that not only
            work technically but also provide real value to users.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            My process involves understanding the problem deeply, planning the
            architecture, and ensuring every line of code contributes to a clean,
            optimized, and responsive application.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
