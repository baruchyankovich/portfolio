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

        {/* Social links — prominent buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
        >
          <a
            href="https://github.com/baruchyankovich"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-semibold">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/baruch-yankuvitz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-sm px-5 py-2.5 text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>
        </motion.div>

        {/* Proof Points — 3 domains of expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
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
          transition={{ duration: 0.5, delay: 0.8 }}
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
