'use client'
import Image from 'next/image';
import React from 'react';


export default function Hero() {
  return (
    <div className="bg-black">
      <section className="flex flex-col md:flex-row justify-around items-center px-8 min-h-screen">
        {/* Left side content */}
        <div className="flex flex-col space-y-6 left-side max-w-lg"
        >
          <p
            className="text-lg text-gray-400 pt-2 mt-16 md:mt-3"
          >
            Hi, I'm Lokesh — a passionate Full-Stack Developer specializing in
            modern web experiences using Next.js, React, and Tailwind CSS. Let's
            turn ideas into reality.
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-300 ">
            BUILDING <br />
            VISUAL <br />
            EXPERIENCES
          </h1>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-20 right-side">
          <Image
            src="/lokeshportfolio.jpg" // from public folder
            width={300}
            height={300}
            alt="hero_img"
            className="shadow-[0_4px_30px_rgba(255,255,255,0.25)] object-contain w-full md:w-[80%] rounded-3xl"
          />
        </div>
      </section>

      {/* <HomeSection /> */}
    </div>
  )
}
