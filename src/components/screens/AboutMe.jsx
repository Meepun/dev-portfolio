import { useState } from "react";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("bio");

  const content = {
    bio: `An aspiring game developer and tech enthusiast. 
Aiming to create a wide variety of gaming projects and innovate aspects of programming such as automation and machine learning. 
I seek to gain much knowledge and experience through my work and accomplish my goals whilst contributing to the tech industry.`,

    hobbies: `When I'm not coding, I enjoy playing and designing video games, exploring creative tech projects, 
and experimenting with visual design and AI tools. 
I also enjoy music, photography, and tinkering with hardware for fun.`,

    skills: `💻 Programming Languages: JavaScript, Python, C#, C++
🌐 Web Tech: React, Astro, TailwindCSS, Node.js
🎮 Game Dev: Unity, Godot
⚙️ Tools: Git, Blender, Figma, VS Code`
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-transparent text-white">
      {/* Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/public/profile.jpg"
          alt="RJ Dollesin"
          className="w-140 h-140 md:w-140 md:h-140 rounded-full object-cover shadow-lg border-2 border-yellow-400"
        />
        <p className="max-w-xl text-gray-300 text-justify leading-relaxed whitespace-pre-line">
          {content[activeTab]}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-12">
        {["bio", "hobbies", "skills"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200
              ${activeTab === tab
                ? "bg-yellow-400 text-gray-900 shadow-md"
                : "bg-gray-800 hover:bg-gray-700"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}
