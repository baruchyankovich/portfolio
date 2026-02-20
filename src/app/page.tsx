"use client";

import { useState, useMemo, useEffect } from "react";
import { Lang, translations } from "@/lib/i18n";
import { LanguageContext } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        {mounted && <ParticleFieldLazy />}
        {mounted && <MouseGlow />}

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

function ParticleFieldLazy() {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@/components/ParticleField").then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) return null;
  return <Component />;
}
