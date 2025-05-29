"use client"

import { motion } from "framer-motion"

const timelineItems = [
  {
    year: "2025",
    title: "Content & Brand Designer",
    company: "Alekhya Design Studio (Pune)",
    description: "Led the visual branding for the studio, including logo design, brand identity, and social media creatives. ",
  },
  {
    year: "2024",
    title: "Core Team (Content Creation)",
    company: "Friends of Figma (Indore)",
    description: " Created reels, handled event videography, and contributed to design discussions during local meetups.",
  },
  {
    year: "2024",
    title: "Social media & Design Head",
    company: "Google Developer Groups On Campus CDGI",
    description: "Led the visual branding and social media strategy for campus tech events. Created engaging posts, reels, and design assets to boost outreach and community involvement.",
  },
  {
    year: "2022",
    title: "Bachelor of Technology (2022-2026)",
    institute: "Chameli Devi Group of Institutions",
    description: "Specializing in Artificial Intelligence and Data Science with a focus on machine learning, deep learning, data analytics, and intelligent systems. ",
  },
  {
    year: "2021",
    title: "10+2(PCM) ",
    company: "GOLDEN INTERNATIONAL SCHOOL",
    description: "Completed senior secondary education with Physics, Chemistry, and Mathematics as core subjects.",
  },
]

export default function Timeline() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-10 text-center text-pink-700"
      >
        My Journey
      </motion.h3>

      <div className="relative px-4 md:px-0">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-pink-200"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className={`bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                  <h4 className="text-xl font-bold text-pink-700 mb-2">{item.title}</h4>
                  <p className="text-gray-600 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-pink-300 border-4 border-white shadow flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{item.year}</span>
                </div>
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
