"use client"

import React from "react";
const projects = [
    {
        title: "AI Event Planner",
        description:
            "An AI-powered platform that helps users plan events by suggesting venues, themes, food, and budgets.",
        tech: ["React", "Node.js", "MongoDB", "Gemini-Ai"],
        status: "80% Complete",
        link: "https://ai-vent-planner-1.onrender.com/#/",
        images: [
            "/ai2.png",
            "/ai3.png",
            "/ai4.png",
            "/ai5.png",
        ],
    },

];
export default function OngoingProjects() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <section id="ongoing" className="py-16 bg-[#131315] mt-6 rounded-4xl">
            <div className="container  mx-auto px-6">
                <h2 className="text-3xl text-white font-bold mb-12 text-center">
                    🚧 Ongoing Projects
                </h2>

                <div className="flex flex-col gap-12  ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Left side - content */}
                            <div className="w-full md:w-1/3 p-6 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
                                <p className="mt-3 text-gray-600">{project.description}</p>
                                <p className="mt-3 text-sm text-gray-500">
                                    <strong>Tech:</strong> {project.tech.join(", ")}
                                </p>
                                <p className="mt-3 text-sm font-medium text-yellow-600">
                                    Status: {project.status}
                                </p>
                                {project.link && project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-blue-600 hover:underline"
                                    >
                                        Visit on Deployed Link →
                                    </a>
                                )}
                            </div>

                            {/* Right side - multiple images */}
                            <div className="w-full md:w-2/3  p-4">
                                <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg bg-gray-100">
                                    <img
                                        src={project.images[currentIndex]}
                                        alt={`${project.title}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
