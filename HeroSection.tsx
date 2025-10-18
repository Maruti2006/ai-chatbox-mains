import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4" style={{ zIndex: 10 }}>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-indigo-400 mb-6"
      >
        Welcome to LegalHelp AI
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-xl max-w-xl"
      >
        India’s first AI-powered legal assistant platform providing instant legal guidance, multilingual support, and comprehensive legal rights information.
      </motion.p>
    </section>
  );
}
