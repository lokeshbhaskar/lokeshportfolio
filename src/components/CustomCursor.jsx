"use client"
import React, { useEffect, useState } from "react";
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", moveCursor);

    // Track hover on interactive elements
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      style={{
        left: position.x - 12 + "px",
        top: position.y - 12 + "px",
      }}
      className={`fixed w-10 h-10 z-50 rounded-full pointer-events-none transition-transform duration-150 ease-out bg-teal-800 mix-blend-difference ${
        isHovering ? "scale-150 bg-blue-400" : ""
      }`}
    ></div>
  );
};

export default CustomCursor;
