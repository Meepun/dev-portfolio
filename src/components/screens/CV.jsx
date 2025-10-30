import { motion } from "framer-motion";

export default function CV() {
  return (
    <section className="p-8 flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen text-white">
      
      <motion.img
        src="/anime_book.png"
        alt="CV Illustration"
        className="w-64 md:w-192 drop-shadow-[0_0_0px_rgba(255,255,195,0.3)]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="flex flex-col items-center text-center">
        {/* Animated Glowing Heading */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Download My Documents ↓
        </motion.h1>

        {/* Download Buttons Container */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl 
                     bg-white/5 backdrop-blur-md shadow-lg border border-white/10 
                     hover:bg-white/10 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* CV Download */}
          <a
            href="/assets/CURRICULUM_VITAE_DOLLESIN.pdf"
            download="RJ_Dollesin_CV.pdf"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md 
                       hover:bg-yellow-300 transition-all duration-200"
          >
            Download CV
          </a>

          {/* Resume Download */}
          <a
            href="/assets/RESUME_DOLLESIN.pdf"
            download="RJ_Dollesin_Resume.pdf"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md 
                       hover:bg-yellow-300 transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
