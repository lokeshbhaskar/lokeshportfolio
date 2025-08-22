"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { TbSettings } from "react-icons/tb";
import { GoArrowUpRight } from 'react-icons/go'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const [isRotate, setIsRotate] = useState(false)
    const handleSetting = () => {
        setIsRotate(!isRotate);
    }
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Work", path: "/pages/work" },
        { name: "About", path: "/pages/about" }
    ];
    return (
        <>
            {isRotate && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm z-10  "
                    onClick={() => setIsRotate(false)}  
                />
            )}
            {/* Dropdown menu */}
            <div className="fixed top-14 left-20 p-3 rounded-md z-50 ">
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`flex  items-center gap-12 text-white text-xl cursor-pointer transform transition-all duration-500 ease-in
                ${isRotate ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-20 "}
              `}
                            style={{
                                transitionDelay: `${index * 0.3}s` // adjust: 0.5s per item, change to 1.5s if you want slower
                            }}
                        >
                            <Link href={item.path} className={`flex   items-center w-full gap-2 auto-underline ${isRotate ? "active" : ""}`} 
                            onClick={()=>setIsRotate(false) }
                            >
                                {item.name}
                                <GoArrowUpRight />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <nav className="w-full flex justify-between items-center px-8 py-4 text-sm fixed backdrop-blur-[16px] backdrop-saturate-[123%] bg-[rgba(0,0,0,0.29)] rounded-[12px] border border-[rgba(209,213,219,0.3)] z-30 ">

                {/* Settings button */}
                <button onClick={handleSetting} className="">
                    <TbSettings
                        size={40}
                        className={`text-pink-800  font-bold transition-transform duration-300 cursor-pointer 
            ${isRotate ? "rotate-180" : ""}
          `}
                    />
                </button>

                {/* Logo */}
                <div className={`w-full md:w-auto font-bold text-3xl md:text-2xl text-white text-center auto-underline ${isRotate ? "" : "active"}`}>
                    Lokesh Portfolio
                </div>
                {/* Connect button */}
                <div className="hidden md:block">
                    <Link href="/pages/contact">
                        {/* <button className="bg-white text-lg text-green-400 px-4 py-2 hover:bg-gray-300 transition cursor-pointer font-medium rounded">
                            Let's Connect
                        </button> */}
                        <Button variant="secondary" size="lg" >
                            Let's Connect
                        </Button>
                    </Link>
                </div>
            </nav>
        </>

    )
}

export default Navbar;
