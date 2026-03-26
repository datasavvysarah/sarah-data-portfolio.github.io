"use client";
import { useState } from "react";
import Image from "next/image";
import { Database, BarChart3, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  category: string;
  imageSrc: string;
  githubUrl: string;
  type: "all" | "engineering" | "analysis";
  description: string;
}

const projects: Project[] = [
  {
    title: "Coffee-Insights SQL Framework",
    category: "SQL / Database",
    imageSrc: "/images/Basicanalysis.jpg",
    githubUrl: "https://github.com/datasavvysarah/Coffee-Insights-Framework.git",
    type: "engineering",
    description: "A comprehensive SQL framework for analyzing coffee shop sales, tracking inventory, and optimizing pricing strategies."
  },
  {
    title: "Code to Care: ER Insights",
    category: "Python / ETL",
    imageSrc: "/images/I Thought I Could Handle My Asthma Attacks, Until I Ended Up in the ER.jpg",
    githubUrl: "https://github.com/datasavvysarah/er-dashboard-project.git",
    type: "engineering",
    description: "An ETL pipeline and data analysis project leveraging Python to extract insights from Emergency Room data and improve patient routing."
  },
  {
    title: "Employee Database Pipeline",
    category: "MongoDB / Python",
    imageSrc: "/images/Tips To Build a Business Based On Relationships - Mark R Graham.jpg",
    githubUrl: "https://github.com/datasavvysarah/mongodb_employee_datapipeline.git",
    type: "engineering",
    description: "A robust MongoDB data pipeline to manage employee records, synchronize HR systems, and generate automated performance reports."
  },
  {
    title: "Business Performance Dashboard",
    category: "Power BI / DAX",
    imageSrc: "/images/dashboard_screenshot.png",
    githubUrl: "https://github.com/datasavvysarah/Business-Performance-Dashboard.git",
    type: "analysis",
    description: "An interactive Power BI dashboard utilizing DAX to track KPIs, financial metrics, and operational efficiency across departments."
  },
  {
    title: "Restaurant Revenue Analyzer",
    category: "Python / Pandas",
    imageSrc: "/images/Streamline Your Operations with Expert Document Data Entry Services.jpg",
    githubUrl: "https://github.com/datasavvysarah/Restaurant_revenue_analyzer.git",
    type: "analysis",
    description: "A Pandas-based analysis tool that ingests restaurant POS data to forecast revenue trends and optimize menu profitability."
  },
  {
    title: "Supply Chain Analysis",
    category: "Advanced SQL",
    imageSrc: "/images/Mid-career growth avenues in logistics_ Exploring in-demand roles and skills.jpg",
    githubUrl: "https://github.com/datasavvysarah/transport-supply-chain-SQL.git",
    type: "analysis",
    description: "Advanced SQL queries and data exploration to identify bottlenecks in supply chain logistics and reduce transportation costs."
  },
  {
    title: "CommercePulse Event Pipeline",
    category: "Python / Data Eng",
    imageSrc: "/images/commerce_pulse_pipeline.png",
    githubUrl: "https://github.com/datasavvysarah/commercepulse_case_study",
    type: "engineering",
    description: "A robust, hybrid data pipeline for CommercePulse that handles both historical batch data and live event streams, using MongoDB and BigQuery."
  },
  {
    title: "Shopify Sales Dashboard",
    category: "Power BI / DAX",
    imageSrc: "/images/restaurant.jpg",
    githubUrl: "https://github.com/datasavvysarah/shopify-sales-dashboard",
    type: "analysis",
    description: "Interactive dashboards built in Power BI to analyze Shopify sales and customer data, providing quick insights into business performance."
  },
  {
    title: "SQL Data Warehouse",
    category: "TSQL / ETL",
    imageSrc: "/images/Intefacesql.jpg",
    githubUrl: "https://github.com/datasavvysarah/sql-data-warehouse-project",
    type: "engineering",
    description: "Building a modern data warehouse with SQL Server, including ETL processes, data modeling, and analytics."
  },
  {
    title: "Student AI Impact Analysis",
    category: "Python / ML",
    imageSrc: "/images/Sql1.jpg",
    githubUrl: "https://github.com/datasavvysarah/Student-AI-Impact-Analysis",
    type: "analysis",
    description: "An exploratory analysis of how AI tools impact student performance and learning behaviors using Python and Jupyter Notebooks."
  },
  {
    title: "MiniStore Database Analytics",
    category: "SQL / Analytics",
    imageSrc: "/images/ministore_analytics_project.png",
    githubUrl: "https://github.com/datasavvysarah/MiniStore_Database",
    type: "analysis",
    description: "Store operations analytics dashboard built with SQL. Analyzes retail transaction data to reveal sales trends, inventory patterns, and customer behavior insights."
  },
  {
    title: "EduHub MongoDB Platform",
    category: "MongoDB / PyMongo",
    imageSrc: "/images/eduhub_mongodb_project.png",
    githubUrl: "https://github.com/datasavvysarah/mongodb-eduhub-project",
    type: "engineering",
    description: "A comprehensive educational platform management system built with MongoDB and PyMongo, demonstrating advanced database operations, aggregations, and analytics."
  }
];

export function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | "engineering" | "analysis">("all");

  const filteredProjects = projects.filter(p => filter === "all" || p.type === filter);

  return (
    <section id="portfolio" className="w-full py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/30 relative overflow-hidden">
      {/* Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-zinc-800 pb-12"
        >
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects.</h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-x-auto shadow-inner">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${filter === "all" ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-white hover:bg-zinc-800/50"}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("engineering")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${filter === "engineering" ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-white hover:bg-zinc-800/50"}`}
            >
              <Database className="w-4 h-4" /> Engineering
            </button>
            <button
              onClick={() => setFilter("analysis")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${filter === "analysis" ? "bg-zinc-800 text-white shadow" : "text-zinc-500 hover:text-white hover:bg-zinc-800/50"}`}
            >
              <BarChart3 className="w-4 h-4" /> Analysis
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.a
                key={proj.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                href={proj.githubUrl}
                target="_blank" rel="noopener noreferrer"
                className="group block p-5 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors hover:shadow-2xl relative"
              >
                <div className="w-full aspect-[4/3] relative rounded-[1.5rem] overflow-hidden mb-6 bg-zinc-950">
                  <Image src={proj.imageSrc} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-30" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-zinc-200 text-sm leading-relaxed mb-4">
                      {proj.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded bg-zinc-950 border border-zinc-800 ${proj.type === "engineering" ? "text-indigo-400" : "text-teal-400"}`}>
                    {proj.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                  {proj.title}
                </h4>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
