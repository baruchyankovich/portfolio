"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const navItems = ["about", "skills", "projects", "contact"] as const;

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    // Active section detection
    const sections = navItems.map((id) => document.getElementById(id));
    let current = "";
    for (const section of sections) {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          B.Y.
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t.nav[item]}
              {activeSection === item && (
                <motion.div
                  layoutId="activeNav"
                  className="mt-1 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                />
              )}
            </button>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            {lang === "en" ? "HE" : "EN"}
          </button>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            {lang === "en" ? "HE" : "EN"}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeSection === item
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {t.nav[item]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
