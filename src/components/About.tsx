"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const highlights = [
  { key: "highlight1" as const, icon: ">_", color: "from-green-400 to-emerald-400" },
  { key: "highlight2" as const, icon: "\u{1f9e0}", color: "from-purple-400 to-pink-400" },
  { key: "highlight3" as const, icon: "\u{1f680}", color: "from-blue-400 to-cyan-400" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
            {t.about.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {highlights.map(({ key, icon, color }) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.2)" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors"
            >
              <div
                className={`mb-4 inline-block rounded-xl bg-gradient-to-br ${color} p-3 text-2xl`}
              >
                {icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {t.about[key]}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {t.about[`${key}desc`]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
