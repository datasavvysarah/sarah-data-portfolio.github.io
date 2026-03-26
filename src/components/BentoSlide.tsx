"use client";
import { motion } from "framer-motion";
import { Download, Briefcase, Code } from "lucide-react";

export function BentoSlide() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 relative z-10 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <p className="text-accent-indigo uppercase tracking-[0.2em] font-medium text-sm mb-4">Professional</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume & Links</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 h-auto md:h-[60vh] max-h-[800px]">
        
        {/* CV Preview (Left - 2 Columns wide) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 neu-flat p-4 md:p-6 rounded-[30px] flex flex-col h-[50vh] md:h-full border border-white/5"
        >
           <div className="neu-inset w-full h-full rounded-[20px] overflow-hidden relative bg-white">
              <iframe src="/Sarah_Uko_CV.pdf" className="w-full h-full border-0 absolute inset-0 z-10" title="CV PDF Viewer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                <p>Loading CV Viewer...</p>
              </div>
           </div>
        </motion.div>

        {/* Action Buttons (Right - 1 Column) */}
        <div className="md:col-span-1 flex flex-col gap-6 justify-center">
           <motion.a 
             href="/Sarah_Uko_CV.pdf" 
             download
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="neu-button hover:neu-button-active p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 group h-[160px] text-center"
           >
             <Download className="w-8 h-8 text-accent-indigo group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
             <span className="text-white font-semibold text-lg tracking-wide">Download CV</span>
           </motion.a>

           <motion.a 
             href="https://linkedin.com/in/datasavysarah/" 
             target="_blank" rel="noopener noreferrer"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="neu-button hover:neu-button-active p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 group h-[160px] text-center"
           >
             <Briefcase className="w-8 h-8 text-[#0a66c2] group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
             <span className="text-white font-semibold text-lg tracking-wide">LinkedIn</span>
           </motion.a>

           <motion.a 
             href="https://github.com/datasavvysarah" 
             target="_blank" rel="noopener noreferrer"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="neu-button hover:neu-button-active p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 group h-[160px] text-center"
           >
             <Code className="w-8 h-8 text-slate-200 group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
             <span className="text-white font-semibold text-lg tracking-wide">GitHub Hub</span>
           </motion.a>
        </div>

      </div>
    </div>
  );
}
