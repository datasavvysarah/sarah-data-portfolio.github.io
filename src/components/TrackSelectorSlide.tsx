"use client";
import { motion } from "framer-motion";
import { Database, BarChart3 } from "lucide-react";
export function TrackSelectorSlide() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 relative z-10 max-w-7xl mx-auto">
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         className="mb-12"
      >
        <p className="text-accent-indigo uppercase tracking-[0.2em] font-medium text-sm mb-4">Features</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white">What I Do</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        
        {/* Engineering Card */}
        <motion.div 
           whileHover={{ y: -10 }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="neu-flat p-10 md:p-14 rounded-[30px] group hover:bg-[#25282c] transition-colors"
        >
           <div className="text-accent-indigo mb-6">
              <Database className="w-12 h-12 stroke-[1.5]" />
           </div>
           <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent-indigo transition-colors duration-300">Data Engineering</h3>
           <p className="text-slate-400 text-lg leading-relaxed">
             I throw myself down among the tall grass by the stream of data integration. From raw abstraction using Python to robust SQL modeling and rigorous ETL pipelines in scalable environments.
           </p>
        </motion.div>

        {/* Analysis Card */}
        <motion.div 
           whileHover={{ y: -10 }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="neu-flat p-10 md:p-14 rounded-[30px] group hover:bg-[#25282c] transition-colors"
        >
           <div className="text-accent-teal mb-6">
              <BarChart3 className="w-12 h-12 stroke-[1.5]" />
           </div>
           <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent-teal transition-colors duration-300">Data Analysis</h3>
           <p className="text-slate-400 text-lg leading-relaxed">
             Extracting meaning from the noise. I build comprehensive Power BI dashboards, conduct Python-based cleaning, and transform business ambiguity into concrete, actionable insights.
           </p>
        </motion.div>

      </div>
    </div>
  );
}
