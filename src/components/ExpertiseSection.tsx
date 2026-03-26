"use client";
import { Database, BarChart3, Server, LineChart } from "lucide-react";
import { motion, Variants } from "framer-motion";

const expertiseAreas = [
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    description: "Designing and maintaining scalable database architectures, optimizing schemas, and ensuring data integrity across complex systems.",
    tools: ["PostgreSQL", "Snowflake", "dbt", "BigQuery"]
  },
  {
    title: "ETL Pipelines",
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    description: "Building automated data extraction, transformation, and loading workflows to move data reliably from source to warehouse.",
    tools: ["Python", "Airflow", "AWS", "Databricks"]
  },
  {
    title: "Data Analysis",
    icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
    description: "Conducting rigorous exploratory data analysis to isolate trends, identify bottlenecks, and validate business hypotheses.",
    tools: ["Python", "SQL", "Pandas"]
  },
  {
    title: "Business Intelligence",
    icon: <LineChart className="w-6 h-6 text-teal-400" />,
    description: "Transforming raw analytical output into highly visual, interactive dashboards that communicate clear narratives to stakeholders.",
    tools: ["Power BI", "Tableau", "Looker"]
  }
];

export function ExpertiseSection() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, bounce: 0.4 } }
  };

  return (
    <section id="expertise" className="w-full py-24 px-6 md:px-12 lg:px-24 mb-12 relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-10 w-px h-32 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-800 pb-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-4">Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Turning raw data <br /> into <span className="text-zinc-500 drop-shadow-md">clear insights</span>.</h3>
          </div>
          <p className="text-zinc-400 max-w-md text-lg font-light leading-relaxed">
            I build automated data pipelines that eliminate manual work and fix reporting bottlenecks. By organizing scattered data into reliable dashboards, I help teams make faster, more confident business decisions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {expertiseAreas.map((area, idx) => (
            <motion.div key={idx} variants={itemVars} className="group p-8 md:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-800/50 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">{area.title}</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-8 font-light">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-full group-hover:border-zinc-600 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
