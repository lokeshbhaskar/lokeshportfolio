"use client";
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      console.log(scrolled);
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const radius = 20; // Circle radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="fixed bottom-10 right-10 z-10">
      <svg className="transform -rotate-90" width="80" height="80">
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#e5e7eb" // background circle (gray-200)
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#115e59"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.2s ease",
          }}
        />
        <text
          x="38%"
          y="60%"
          textAnchor="middle"
          dy=".5em"
          fontSize="14"
          fill="#FFFFFF"
          transform="rotate(90, 40, 40)"
          fontWeight="bold"
        >
          {Math.round(scrollPercent)}
        </text>
        
      </svg>
    </div>
  );
};

export default ScrollProgress;
