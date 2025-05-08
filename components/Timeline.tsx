"use client"

import { motion } from "framer-motion"

const timelineItems = [
  {
    year: "2023",
    title: "Senior UI/UX Designer",
    company: "DreamCanvas Studio",
    description: "Leading design projects for major clients and mentoring junior designers.",
  },
  {
    year: "2021",
    title: "UI/UX Designer",
    company: "Pixel Perfect Agency",
    description: "Created user-centered designs for web and mobile applications.",
  },
  {
    year: "2019",
    title: "Graphic Designer",
    company: "Creative Minds Inc.",
    description: "Developed brand identities and marketing materials for various clients across different industries.",
  },
  {
    year: "2018",
    title: "Design Intern",
    company: "Visionary Designs",
    description: "Assisted senior designers and learned the fundamentals of UI/UX design.",
  },
  {
    year: "2017",
    title: "Bachelor of Fine Arts",
    company: "Design Institute",
    description: "Graduated with honors, specializing in digital media and interactive design.",
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

      <div className="relative">
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
