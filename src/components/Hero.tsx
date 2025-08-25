'use client'
import Image from 'next/image';
import React from 'react';
import ContactButton from "@/components/ContactButton"
import SkillsSection from "@/components/SkillsSection"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-[#131315] min-h-screen  rounded-4xl  flex flex-col justify-around items-center px-8 pb-4 ">
      {/* top side content */}
      <div className="flex flex-col space-y-6 text-center max-w-3xl"
      >
        <motion.h1
          className="w-full text-5xl md:text-5xl font-extrabold leading-tight text-[#ffffff]  mt-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          BUILDING
          VISUAL
          EXPERIENCES
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm Lokesh — a passionate Mern-Stack Developer specializing in
          modern web experiences using Next.js, React, and Tailwind CSS. Let's
          turn ideas into reality.
        </motion.p>
      </div>
      <div>
        <ContactButton />
      </div>
      <SkillsSection />

    </section>
  )
}
