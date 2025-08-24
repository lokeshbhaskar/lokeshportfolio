"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { TbSettings } from "react-icons/tb";
import { GoArrowUpRight } from 'react-icons/go'

const Navbar = () => {
    const [isRotate, setIsRotate] = useState(false)

    const handleSetting = () => {
        setIsRotate(!isRotate)
    }

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Work", path: "/pages/work" },
        { name: "About", path: "/pages/about" }
    ]

    return (
        <div className="w-full">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3  ">
                {/* Settings Button */}
                <TbSettings
                    size={26}
                    className={`text-gray-700 transition-transform duration-300 cursor-pointer 
                        ${isRotate ? "rotate-180" : ""}
                    `}
                    onClick={handleSetting}
                />
            </nav>

            {/* Dropdown Menu */}
            <div
                className={`flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out 
                    ${isRotate ? "max-h-60" : "max-h-0"}
                `}
            >
                <ul className="flex flex-col gap-4 px-6 py-4 transition-all duration-300 ">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 text-gray-800 text-lg md:text-xl font-semibold "
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <Link
                                href={item.path}
                                onClick={() => setIsRotate(false)}
                                className="flex items-center gap-2"
                            >
                                {item.name}
                                <GoArrowUpRight />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
