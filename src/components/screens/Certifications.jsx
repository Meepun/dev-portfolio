import { motion } from "framer-motion";

export default function Certifications() {
  // Constant for containing each certification information
  const certifications = [
    {
      title: "AWS GenAI Innovator",
      description: `
      May 2024
      PointWest Inc.`,
    },
    {
      title: "AppCon 2024: Certificate of Participation",
      description: `
      June 2025
      OTIS Japan Inc.`,
    },
  ];

  return (
    <section
      className="p-8 h-screen text-white scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent"
      style={{ scrollbarGutter: "stable", scrollBehavior: "smooth" }}
    >
      <h1 className="text-4xl text-center font-bold mt-10 mb-10">Certifications</h1>

      {/* Slide in Animation for Certification Containers */}
      <div className="flex flex-col gap-8">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10 hover:bg-white/10 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

             {/* Certification Container Structure */}
            <div className="text-left max-w-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                {certification.title}
              </h3>
              <p className="text-gray-300 text-justify leading-relaxed whitespace-pre-line">
                {certification.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
