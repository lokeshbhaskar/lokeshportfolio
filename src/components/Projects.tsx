"use client";

import React from "react";
import Image from "next/image";
import projectdata from "../../src/data/projects.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#131315] text-white  mt-6 rounded-4xl">
      {/* Left Section Label */}
      <div className="absolute left-4 top-10 hidden md:flex flex-col items-center z-10">
        <p className="text-3xl text-gray-400">[ 02 ]</p>
        <p className="text-5xl font-extrabold text-gray-300 hover:text-amber-200    ">
          Projects
        </p>
      </div>

      {/* Fullscreen Swiper for Projects */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-screen"
      >
        {projectdata.map((project) => (
          <SwiperSlide key={project.id} className="flex items-center justify-center h-screen px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center w-full h-full">
              
              {/* Project Image */}
              <div className="relative w-full h-[200px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={project.images[0]} // first image as main
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
              </div>
              {/* Project Details */}
              <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20">
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Thumbnails */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                  {project.images.map((img, index) => (
                    <div key={index} className="relative w-24 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`thumbnail ${index}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
                >
                  <FaLink /> Visit Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center text-lg text-gray-400">
        Scroll or Swipe → Featured Projects
      </div>
    </div>
  );
};

export default Projects;
