import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMe() {
  // useState Logic for Button(Tab) switching
  const [activeTab, setActiveTab] = useState("bio");
  const [hoveredHobby, setHoveredHobby] = useState(null);
  
  // Constant for containing favorites for each hobby
  const favorites = {
    "🎮 Gaming": ["Wuthering Waves", "Final Fantasy VII: Remake", "Terraria", "Valorant"],
    "🎵 Music": ["natori", "ADO", "Le sserafim", "Eve", "Cup of Joe"],
    "🌸 Anime & Manga": ["Vinland Saga", "Eighty Six", "Vivy: Fluorite Eye’s Song", "Frieren", "Kono Oto Tomare", "Bocchi The Rock", "TenSura", "Kingdom", "Kaoru Hana"],
  };

  const content = {
    bio: (
      <div className="text-gray-300 text-justify leading-relaxed space-y-4">
        <p className="text-2xl font-bold italic text-yellow-400">“Carpe Diem”</p>

        <p>
          An aspiring software developer and tech enthusiast. Living in Bay, Laguna,
          21 yrs of age, currently taking Bachelor of Science in Computer Science at
          Laguna State Polytechnic University LBC.
        </p>

        <p>
          Aiming to create a wide variety of gaming and community projects, as well as
          to innovate aspects of programming such as automation and machine learning.
          I seek to gain much knowledge and experience through my work and accomplish
          my goals whilst contributing to the tech industry.
        </p>

        <p className="text-lg italic text-yellow-300 font-medium border-l-4 border-yellow-500 pl-4">
          “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”
          <br />
          <span className="text-sm not-italic text-gray-400">— Aristotle</span>
        </p>
      </div>
    ),
    // Hobbies
    hobbies: (
      <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full border-2 border-yellow-400 flex items-center justify-center">
        <p className="text-2xl text-yellow-300 italic font-semibold select-none">Hobbies</p>
        {/* Positioning of Hobbies (Relative to Circular Container) */}
        {[
          { text: "🎮 Gaming", top: "5%", left: "35%" }, 
          { text: "🎵 Music", top: "30%", left: "10%" },
          { text: "🎞️ Video Editing", top: "62%", left: "5%" },
          { text: "💻 Hardware", top: "88%", left: "35%" },
          { text: "🎨 Graphic Design", top: "62%", left: "55%" },
          { text: "🌸 Anime & Manga", top: "30%", left: "55%" },

          {/* Floating Box Logic */}
        ].map((hobby, i) => (
          <div
            key={i}
            style={{ top: hobby.top, left: hobby.left }}
            className="absolute group"
            onMouseEnter={() => setHoveredHobby(hobby.text)}
            onMouseLeave={() => setHoveredHobby(null)} 
          >
            <div
              className={`bg-gray-800 px-3 py-1 rounded-md shadow-md text-sm transition-all duration-300 transform
                ${hoveredHobby === hobby.text
                  ? "bg-yellow-400 text-gray-900 scale-110"
                  : "hover:bg-yellow-400 hover:text-gray-900 hover:scale-110"
                }`}
            >
              {hobby.text}
            </div>

            {hoveredHobby === hobby.text && favorites[hobby.text] && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-full -mt-3 bg-gray-900 border border-yellow-400 rounded-lg p-3 text-sm text-gray-200 shadow-lg w-48 z-10 animate-fadeIn"
              >
                <p className="font-semibold text-yellow-400 mb-1">Favorites</p>
                <ul className="list-disc list-inside text-left space-y-1">
                  {favorites[hobby.text].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    ),

    skills: (
      <div className="text-gray-300 space-y-2 text-left">
        <p>💻 <b>Programming Languages:</b> JavaScript, Python, Java, C#</p>
        <p>🌐 <b>Web Tech:</b> React, Astro, TailwindCSS</p>
        <p>⚙️ <b>Tools:</b> Git, Figma, VS Code</p>
        <p> <b>Other:</b> Proficiency in Graphic Design, Video Editing, Computer Hardware Knowledge, Leadership, Collaboration</p>
      </div>
    ),
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-transparent text-white">
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-10">
        <div className="relative">
        {/* Halo Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1B065E] via-[#FCC8C2] to-[#C29200] blur-3xl opacity-50 animate-rotate-fast" />

        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="RJ Dollesin"
          className="relative w-140 h-140 md:w-140 md:h-140 rounded-full object-cover shadow-lg border-2 border-yellow-400 z-10"
        />
      </div>

        {/* Animated Text Section */}
        <div className="max-w-xl min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tab Buttons */}
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
