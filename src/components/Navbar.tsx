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
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
                    onClick={() => setIsRotate(false)}  
                />
            )}
            
            {/* Dropdown menu */}
            <div className={`fixed top-20 left-4 md:left-20 p-3 rounded-md z-50 transition-all duration-300 
                ${isRotate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}>
                <ul className="space-y-4 md:space-y-0">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center gap-6 md:gap-12 text-white text-lg md:text-xl cursor-pointer transform transition-all duration-500 ease-in
                                ${isRotate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
                            `}
                            style={{
                                transitionDelay: `${index * 0.2}s`
                            }}
                        >
                            <Link 
                                href={item.path} 
                                className={`flex items-center w-full gap-2 auto-underline ${isRotate ? "active" : ""}`} 
                                onClick={()=>setIsRotate(false)}
                            >
                                {item.name}
                                <GoArrowUpRight />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar */}
            <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4 text-sm fixed top-0 left-0
                backdrop-blur-[16px] backdrop-saturate-[123%] bg-[rgba(0,0,0,0.29)] rounded-[12px] 
                border border-[rgba(209,213,219,0.3)] z-30">
                <button onClick={handleSetting}>
                    <TbSettings
                        size={30}
                        className={`text-white transition-transform duration-300 cursor-pointer 
                            ${isRotate ? "rotate-360" : ""}
                        `}
                    />
                </button>

                {/* Logo */}
                <div className={`font-bold text-xl md:text-2xl text-white text-center auto-underline`}>
                    Lokesh Portfolio
                </div>

                {/* Connect button (desktop only) */}
                <div className="hidden md:block">
                    <Link href="/pages/contact">
                        <Button variant="secondary" size="lg">
                            Let's Connect
                        </Button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
