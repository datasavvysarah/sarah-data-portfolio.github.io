"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Database, BarChart3 } from "lucide-react";

interface Project {
  title: string;
  category: string;
  imageSrc: string;
  githubUrl: string;
  buildText: string;
  insightText: string;
  type: "engineering" | "analysis";
}

const projects: Project[] = [
  {
    title: "Coffee-Insights SQL Framework",
    category: "SQL / Database",
    imageSrc: "/images/Basicanalysis.jpg",
    githubUrl: "https://github.com/datasavvysarah/Coffee-Insights-Framework.git",
    buildText: "Architected relational schemas and rigorous SQL cleaning pipelines.",
    insightText: "Enabled discovery of key sales trends and localized behaviors.",
    type: "engineering"
  },
  {
    title: "Code to Care: ER Insights",
    category: "Python / ETL",
    imageSrc: "/images/I Thought I Could Handle My Asthma Attacks, Until I Ended Up in the ER.jpg",
    githubUrl: "https://github.com/datasavvysarah/er-dashboard-project.git",
    buildText: "Python data generation to produce realistic healthcare data.",
    insightText: "Uncovered critical peak-load patterns for the ER.",
    type: "engineering"
  },
  {
    title: "Employee Database Pipeline",
    category: "MongoDB / Python",
    imageSrc: "/images/Tips To Build a Business Based On Relationships - Mark R Graham.jpg",
    githubUrl: "https://github.com/datasavvysarah/mongodb_employee_datapipeline.git",
    buildText: "Advanced PyMongo infrastructure with schema-less ingestion.",
    insightText: "Streamlined HR record access and rapid querying.",
    type: "engineering"
  },
  {
    title: "Business Performance Dashboard",
    category: "Power BI / DAX",
    imageSrc: "/images/Pizza - food commercial photography.jpg",
    githubUrl: "https://github.com/datasavvysarah/Business-Performance-Dashboard.git",
    buildText: "Integrated transactional feeds with complex DAX measures.",
    insightText: "Transformed raw pizza sales into high-clarity visualizations.",
    type: "analysis"
  },
  {
    title: "Restaurant Revenue Analyzer",
    category: "Python / Pandas",
    imageSrc: "/images/Streamline Your Operations with Expert Document Data Entry Services.jpg",
    githubUrl: "https://github.com/datasavvysarah/Restaurant_revenue_analyzer.git",
    buildText: "Pandas logic to clean missing values and normalize dates.",
    insightText: "Isolated product success metrics and payment trends.",
    type: "analysis"
  },
  {
    title: "Transport Supply Chain Exploratory",
    category: "Advanced SQL",
    imageSrc: "/images/Mid-career growth avenues in logistics_ Exploring in-demand roles and skills.jpg",
    githubUrl: "https://github.com/datasavvysarah/transport-supply-chain-SQL.git",
    buildText: "Synthesized distinct supplier datasets via window functions.",
    insightText: "Delivered dashboards analyzing inventory risks and costs.",
    type: "analysis"
  }
];

export function ProjectGridSlide() {
  return (
    <div id="portfolio" className="w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 relative z-10 max-w-[1400px] mx-auto">
      <div className="mb-12 text-center">
        <p className="text-accent-indigo uppercase tracking-[0.2em] font-medium text-sm mb-4">Visit my portfolio and keep your feedback</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">My Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="neu-flat p-6 rounded-[24px] group relative flex flex-col h-full bg-[#212428]"
          >
            {/* Top Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 neu-inset">
              <Image src={proj.imageSrc} alt={proj.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>

            {/* Category Tag */}
            <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider uppercase">
              <span className={proj.type === "engineering" ? "text-accent-indigo" : "text-accent-teal"}>{proj.category}</span>
              <Code className="w-5 h-5 text-slate-500 hover:text-white transition-colors cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent-indigo transition-colors duration-300 pr-4 leading-snug">
              {proj.title}
            </h3>

            {/* Micro-Summary 2-column */}
            <div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-300">
                  <Database className="w-3.5 h-3.5 text-accent-indigo" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">The Build</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pr-2">{proj.buildText}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-300">
                  <BarChart3 className="w-3.5 h-3.5 text-accent-teal" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">The Insight</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pr-2">{proj.insightText}</p>
              </div>
            </div>

            {/* Hover Github Button Overlay */}
            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-10 right-10 neu-button px-5 py-2.5 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 z-20 hover:scale-105"
            >
              <Code className="w-4 h-4" /> View GitHub
            </a>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
