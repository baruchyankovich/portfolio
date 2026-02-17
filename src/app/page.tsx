"use client";

import { useState, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { Lang, translations } from "@/lib/i18n";
import { LanguageContext } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      <div dir={lang === "he" ? "rtl" : "ltr"} className="relative min-h-screen">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>

        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
