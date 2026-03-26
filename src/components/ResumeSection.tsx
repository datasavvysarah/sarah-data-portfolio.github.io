"use client";
import { Download, Briefcase, Code, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function ResumeSection() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVars: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="resume" className="w-full py-32 px-6 md:px-12 lg:px-24 mb-12 relative overflow-hidden">
       {/* Accents */}
       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[150px] -z-10 rounded-full" />

       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Ready to collaborate?</h3>
            <p className="text-zinc-400 max-w-2xl text-lg md:text-xl mb-16 leading-relaxed font-light mx-auto">
              Whether you are looking to build robust data pipelines from the ground up or need deep analytical insights to drive your business forward, I am available.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24 max-w-5xl"
          >
             <motion.a variants={itemVars} href="mailto:ukosarahiniobong@gmail.com" className="p-8 rounded-[24px] bg-indigo-600 hover:bg-indigo-500 transition-colors flex flex-col items-center gap-4 group shadow-xl shadow-indigo-500/20 border border-indigo-400">
               <Mail className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
               <span className="text-white font-semibold text-lg">Email Me</span>
             </motion.a>

             <motion.a variants={itemVars} href="/Sarah_Iniobong_Resume.pdf" download className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all flex flex-col items-center gap-4 group">
               <Download className="w-8 h-8 text-zinc-300 group-hover:text-white group-hover:-translate-y-1 transition-all" />
               <span className="text-white font-semibold text-lg">Download CV</span>
             </motion.a>

             <motion.a variants={itemVars} href="https://linkedin.com/in/datasavysarah/" target="_blank" rel="noopener noreferrer" className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all flex flex-col items-center gap-4 group">
               <Briefcase className="w-8 h-8 text-[#0a66c2] group-hover:scale-110 transition-all" />
               <span className="text-white font-semibold text-lg">LinkedIn</span>
             </motion.a>

             <motion.a variants={itemVars} href="https://github.com/datasavvysarah" target="_blank" rel="noopener noreferrer" className="p-8 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all flex flex-col items-center gap-4 group">
               <Code className="w-8 h-8 text-zinc-300 group-hover:text-white group-hover:-translate-y-1 transition-all" />
               <span className="text-white font-semibold text-lg">Github</span>
             </motion.a>
          </motion.div>


       </div>
    </section>
  );
}
