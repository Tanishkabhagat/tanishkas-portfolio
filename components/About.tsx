"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Timeline from "./Timeline"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Subtle parallax effect for the background elements
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section id="about" ref={ref} className="section-padding px-4 md:px-0 bg-pink-50/30 relative">
      {/* Decorative blurred blob for Pisces/Dreamy vibe */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating animation for the image */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-3xl shadow-2xl overflow-hidden max-w-[450px] mx-auto border-8 border-white"
            >
              <Image
                src="/tanishka.jpg"
                alt="Tanishka Bhagat"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
            {/* Background accent box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-pink-200 rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-4"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-pink-700">Tanishka Bhagat</h3>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Designing and editing since I was a teen. Today, I help brands and creators build their visual identity. 
                I know what works because I do it myself—my own content has racked up <span className="font-bold text-pink-600">900k+ views</span>.
              </p>

              <div>
                <h4 className="font-bold text-xl text-pink-600 mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-pink-600 inline-block"></span>
                  What I do
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-pink-500">✦</span>
                    <span><strong className="text-gray-900">Design for digital:</strong> social posts, branding, layouts, promo graphics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-pink-500">✦</span>
                    <span><strong className="text-gray-900">Edit videos:</strong> short-form, long-form, content cuts, promo edits</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-pink-500">✦</span>
                    <span><strong className="text-gray-900">Add motion:</strong> animated text, smooth transitions, logo builds</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tags with improved styling */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Graphic Design", "Branding", "Illustration", "Video Editing", "Content Strategy"].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white border border-pink-100 text-pink-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-pink-50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* This Timeline already contains your Testimonial Marquee! */}
        <Timeline />
      </div>
    </section>
  )
}