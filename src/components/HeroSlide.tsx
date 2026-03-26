"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

export function HeroSlide() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 relative z-10 max-w-7xl mx-auto">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">

        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-left w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-sm md:text-lg font-medium tracking-[0.2em] mb-4 uppercase"
          >
            Welcome To My World
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.2]">
            Hi, I’m <span className="text-accent-indigo">Sarah Uko</span><br />
            a <TypewriterText text="Data Engineer | Analyst" />
          </h1>

          <p className="text-slate-400 text-base md:text-lg font-light mb-12 max-w-xl leading-relaxed">
            I use data as a third dimension by which to simplify experiences and build robust architectures through each and every interaction. Finding truth in data is my passion.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Find Me</p>
              <div className="flex gap-4 mb-2">
                <a href="https://linkedin.com/in/datasavysarah/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex flex-col items-center justify-center neu-flat hover:neu-inset transition-shadow rounded-2xl text-white">
                  <span className="font-bold">in</span>
                </a>
                <a href="https://github.com/datasavvysarah" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex flex-col items-center justify-center neu-flat hover:neu-inset transition-shadow rounded-2xl text-white">
                  <span className="font-bold">GH</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Best Skill On</p>
              <div className="flex gap-4 mb-2">
                <div className="w-14 h-14 neu-flat flex flex-col items-center justify-center rounded-2xl text-accent-indigo font-bold text-sm shadow-sm transition-all hover:neu-inset">
                  SQL
                </div>
                <div className="w-14 h-14 neu-flat flex flex-col items-center justify-center rounded-2xl text-teal-400 font-bold text-sm shadow-sm transition-all hover:neu-inset">
                  Py
                </div>
                <div className="w-14 h-14 neu-flat flex flex-col items-center justify-center rounded-2xl text-yellow-500 font-bold text-xs shadow-sm transition-all hover:neu-inset">
                  PBI
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Image Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 w-full max-w-[320px] md:w-[400px] lg:w-[450px]"
        >
          <div className="neu-flat p-4 rounded-[30px] relative aspect-[4/5] md:h-[650px] w-full flex items-end justify-center overflow-hidden group">
            {/* Profile Photo - Replace src with your actual photo */}
            <div className="absolute bottom-0 w-full h-[95%] rounded-b-xl overflow-hidden shadow-inner border border-white/5 bg-[#2a2d32]">
              <Image src="/images/1767439514504~2.jpg" alt="Sarah Iniobong Uko" width={500} height={800} className="object-cover object-top h-full w-full opacity-90 hover:opacity-100 transition-opacity" priority />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
