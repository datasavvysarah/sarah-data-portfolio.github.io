"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, Database, BarChart3, X, ChevronRight, Code } from "lucide-react";
import Image from "next/image";

interface ProjectSlideProps {
  title: string;
  type: "engineering" | "analysis";
  imageSrc: string;
  githubUrl: string;
  techStack: string[];
  engineeringBuild: string;
  analyticalInsight: string;
}

export function ProjectSlide({
  title,
  type,
  imageSrc,
  githubUrl,
  techStack,
  engineeringBuild,
  analyticalInsight
}: ProjectSlideProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isEng = type === "engineering";
  const glassClass = isEng ? "glass-indigo" : "glass-teal";
  const textColor = isEng ? "text-indigo-400" : "text-teal-400";
  const btnClass = isEng ? "bg-indigo-500/20 hover:bg-indigo-500/30 border-indigo-500/30 text-indigo-100" : "bg-teal-500/20 hover:bg-teal-500/30 border-teal-500/30 text-teal-100";

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-6 sm:p-12 relative z-10 max-w-7xl mx-auto gap-8 overflow-y-auto md:overflow-hidden">
      {/* Left Column: Image & Stack */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${glassClass} flex items-center justify-center p-2`}>
           <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-900 border border-white/5">
             <Image src={imageSrc} alt={title} fill className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
           </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-mono bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right Column: Description & Links */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`w-full md:w-1/2 ${glassClass} rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl`}
      >
        <div className={`text-xs uppercase tracking-widest font-mono mb-3 font-semibold ${textColor}`}>
          {isEng ? "Data Engineering Focus" : "Data Analysis Focus"}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          {title}
        </h2>

         <div className="space-y-5 mb-8">
            <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
               <div className="flex items-center gap-3 mb-2 text-white font-medium">
                  <Database className={`w-5 h-5 ${textColor}`} />
                  <h3>The Engineering Build</h3>
               </div>
               <p className="text-slate-300 text-sm leading-relaxed">{engineeringBuild}</p>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
               <div className="flex items-center gap-3 mb-2 text-white font-medium">
                  <BarChart3 className={`w-5 h-5 ${textColor}`} />
                  <h3>The Analytical Insight</h3>
               </div>
               <p className="text-slate-300 text-sm leading-relaxed">{analyticalInsight}</p>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              onClick={() => setModalOpen(true)}
              className={`px-6 py-3 rounded-full border ${btnClass} transition-colors flex items-center justify-center gap-2 text-sm font-medium`}
            >
              <Layers className="w-4 h-4" />
              View Pipeline Architecture
            </button>
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Code className="w-4 h-4" />
              GitHub
            </a>
         </div>
      </motion.div>

      {/* Deep-Dive Modal Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-4xl p-8 rounded-3xl ${glassClass} border border-white/20 shadow-2xl z-10`}
            >
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Pipeline Architecture</h3>
              <p className="text-slate-400 mb-8">Simplified flow diagram from raw data to insight.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-12 px-4 bg-black/40 rounded-2xl border border-white/5">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mx-auto mb-4 border-white/10">
                        <Database className="w-8 h-8 text-slate-300" />
                    </div>
                    <div className="text-white font-medium">Raw Data</div>
                    <div className="text-xs text-slate-400 mt-1">Extraction</div>
                  </div>
                  
                  <ChevronRight className={`hidden md:block w-8 h-8 ${textColor} opacity-50`} />
                  <div className="md:hidden w-1 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-2xl ${glassClass} flex items-center justify-center mx-auto mb-4 border border-white/10`}>
                        <Layers className={`w-8 h-8 ${textColor}`} />
                    </div>
                    <div className="text-white font-medium">Process Pipeline</div>
                    <div className="text-xs text-slate-400 mt-1">Transform & Load (ETL)</div>
                  </div>
                  
                  <ChevronRight className={`hidden md:block w-8 h-8 ${textColor} opacity-50`} />
                  <div className="md:hidden w-1 h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mx-auto mb-4 border-white/10">
                        <BarChart3 className="w-8 h-8 text-slate-300" />
                    </div>
                    <div className="text-white font-medium">Business Insight</div>
                    <div className="text-xs text-slate-400 mt-1">Dashboard & KPIs</div>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
