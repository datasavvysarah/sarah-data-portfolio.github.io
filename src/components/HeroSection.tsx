"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Database, Code, LineChart } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative pt-24 md:pt-32">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10"
      >

        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col items-start text-left w-full mt-10 lg:mt-0">

          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-zinc-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Welcome to my world
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2] drop-shadow-sm">
            Hi, I&apos;m <span className="text-indigo-400">Sarah Iniobong Uko</span><br />
            <span className="text-white flex items-center gap-4">
              a Data Engineer & Analyst.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
            A highly analytical Data Professional specializing in building scalable <strong>ETL/ELT pipelines</strong>, optimizing databases using <strong>Snowflake and BigQuery</strong>, and designing interactive dashboards. Proficient with <strong>Python, Airflow, and dbt</strong> to transform complex data into actionable business strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-12 w-full mt-4">
            {/* Find With Me */}
            <div>
              <span className="text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-5 block">
                Find me
              </span>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/datasavysarah/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 hover:text-[#ff014f] hover:-translate-y-1 transition-all duration-300 border border-zinc-800 group">
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,1,79,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/datasavvysarah" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 hover:text-[#ff014f] hover:-translate-y-1 transition-all duration-300 border border-zinc-800 group">
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,1,79,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://x.com/datasavysarah_" className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 hover:text-[#ff014f] hover:-translate-y-1 transition-all duration-300 border border-zinc-800 group">
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,1,79,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
              </div>
            </div>

            {/* Best Skill On */}
            <div>
              <span className="text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-5 block">
                Best skill on
              </span>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 border border-zinc-800 transition-all hover:-translate-y-1">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 border border-zinc-800 transition-all hover:-translate-y-1">
                  <Code className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl shadow-black/40 text-zinc-300 border border-zinc-800 transition-all hover:-translate-y-1">
                  <LineChart className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[450px] aspect-[4/5] lg:aspect-[3/4] relative rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl shadow-black/50 border border-zinc-700/50 flex items-end justify-center overflow-hidden">
            <Image src="/images/1767439514504~2.jpg" alt="Sarah Iniobong Uko" width={600} height={800} className="object-cover object-top h-full w-full opacity-90 hover:opacity-100 transition-opacity" priority />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
