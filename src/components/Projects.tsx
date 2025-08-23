"use client";

import React from 'react';
import Image from 'next/image';
import projectdata from '../../src/data/projects.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaLinkSlash } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="flex w-full flex-col md:flex-row min-h-screen bg-black text-white px-2 md:px-8 py-20 gap-8 ">
      {/* Left Section */}
      <div className="w-full md:w-1/6 flex flex-col md:flex-row justify-around items-center ">
        <p className="text-3xl text-gray-400 cursor-pointer">[02]</p>
        <p className="text-3xl mt-3 md:text-5xl hover:text-amber-200 text-gray-300 font-extrabold cursor-pointer md:[writing-mode:vertical-lr]">
          Projects
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-5/6 px-0 md:px-4  gap-2 overflow-hidden">
        <div className="grid  md:grid-cols-2 gap-6">
          {projectdata.map((project) => (
            <div key={project.id} className="border p-1 md:p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              {/* Mobile Swiper */}
              <div className="w-full md:hidden mt-3 overflow-hidden rounded-md px-4">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                   width={250}
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}
                    >
                      <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                        <Image
                          src={img}
                          alt={`project image ${index}`}
                          fill
                          sizes="100vw"
                          className="object-contain rounded-md"
                          priority
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Desktop Swiper */}
              <div className="hidden md:block mt-3">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  loop={true}
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={img}
                        width={400}
                        height={300}
                        alt={`${project.title} ${index}`}
                        className="object-contain rounded-md transition"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <a className='text-md text-gray-200' href={project.link}>visit {project.title}   </a>
            </div>
          ))}
        </div>
        <div className='w-full text-center mt-8' >
          <h2 className='font-bold text-3xl'>Featured Projects...</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
