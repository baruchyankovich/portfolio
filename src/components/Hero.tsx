"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Tagline — visible IMMEDIATELY, no delay */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide">
          {t.hero.tagline}
        </p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </motion.h1>

        {/* Subtitle — static, instant clarity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 font-mono"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Proof Points — 3 domains of expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {t.hero.proofPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              <span className="text-lg">{point.icon}</span>
              <span className="text-sm sm:text-base text-gray-200 font-medium">
                {point.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#00d4ff] to-[#a855f7]
              hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300
              hover:scale-105 active:scale-95"
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-white
              border border-gray-500 hover:border-[#00d4ff]
              transition-all duration-300 hover:scale-105 active:scale-95
              hover:shadow-lg hover:shadow-[#00d4ff]/10"
          >
            {t.hero.contact}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            const main = document.querySelector("section:nth-of-type(2)") ||
              document.getElementById("about");
            main?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
