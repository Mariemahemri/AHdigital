'use client';
import { motion } from "framer-motion";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white "
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      
      {/* Contenu principal */}
      <div className="z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d2ffd2]">
          L&apos;IA <span className="text-white">à votre service.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Maîtrisez et intégrez l&apos;IA générative pour augmenter la productivité de votre entreprise
          et améliorer la qualité de votre travail.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#services">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer border border-[#d2ffd2] rounded-lg px-6 py-3 hover:bg-[#d2ffd2]/10"
            >
            <span className="text-white hover:text-[#d2ffd2]">Nos services</span>
          </motion.div>
          </a>
          <a href="#contact">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 cursor-pointer border border-[#d2ffd2] rounded-lg px-6 py-3 hover:bg-[#d2ffd2]/10"
            >
              <span className="text-white hover:text-[#d2ffd2]">Nous contacter</span>
              <span className="text-[#d2ffd2]">→</span>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}