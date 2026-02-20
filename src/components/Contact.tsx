"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-300">{t.contact.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {/* Email */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)" }}
            href="mailto:baruchyankovitz@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-colors"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 text-xl">
              @
            </div>
            <div>
              <p className="text-sm text-gray-300">{t.contact.email}</p>
              <p className="font-medium text-white">baruchyankovitz@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)" }}
            href="tel:+972556782035"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-colors"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 text-xl">
              {"\u{1f4de}"}
            </div>
            <div>
              <p className="text-sm text-gray-300">{t.contact.phone}</p>
              <p className="font-medium text-white">055-678-2035</p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)" }}
            href="https://github.com/baruchyankovich"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-colors"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 text-xl">
              <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-300">GitHub</p>
              <p className="font-medium text-white">baruchyankovich</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)" }}
            href="https://www.linkedin.com/in/baruch-yankuvitz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-colors"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-xl font-bold text-white">
              in
            </div>
            <div>
              <p className="text-sm text-gray-300">LinkedIn</p>
              <p className="font-medium text-white">Baruch Yankovitz</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-24 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-gray-500">{t.footer.built}</p>
          <p className="mt-2 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Baruch Yankovitz. {t.footer.rights}.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
