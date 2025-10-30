import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="p-8 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Let's Get in Touch ✉️
      </motion.h1>

      {/* Contact Container */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 p-8 rounded-2xl bg-white/5 
                   backdrop-blur-md shadow-lg border border-white/10 
                   hover:bg-white/10 transition duration-300 max-w-5xl w-full justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side – Contact Info */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Contact Information</h2>

          <div className="flex items-center gap-4">
            <Mail className="text-yellow-400 w-6 h-6" />
            <p className="text-gray-300">raymondjaydollesin@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-yellow-400 w-6 h-6" />
            <p className="text-gray-300">+63 993 524 0347</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-yellow-400 w-6 h-6" />
            <p className="text-gray-300">Sto. Domingo, Bay, Laguna, Philippines</p>
          </div>

          <p className="text-gray-400 mt-4 text-sm">
            Feel free to reach out for collaborations, freelance work, or tech discussions!
          </p>
        </div>

        {/* Right Side – Image */}
        <motion.img
          src="/anime_ok.png"
          alt="Contact Illustration"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-yellow-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
