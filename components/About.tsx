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

  const y = useTransform(scrollYProgress, [0, 1], [100, -50])

  return (
    <section id="about" ref={ref} className="section-padding px-4 md:px-0 bg-pink-50/50">
      <div className="container w-50 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-9">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dreamy Pisces with a passion for creating beautiful, intuitive designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>

            <div className="relative rounded-3xl shadow-xl mb-10  w-full max-w-[500px] mx-auto">
              <Image
                src="/placeholder.svg"
                alt="Tanishka"
                width={500}
                height={600}
                className="w-full h-auto mt-10 rounded-2xl" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 lg:p-8 md:p-2"
            

          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-pink-700 ">Hello, I'm Tanishka</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                I’m a multidisciplinary designer and B.Tech student specializing in AI & Data Science. With experience in branding, UI/UX, motion graphics, and illustration, I work at the intersection of design and technology. My projects often explore frontend development, user experience, and the role of psychology in creating intuitive, human-centered solutions.
              </p>

              <p>
                Beyond academics, I’m an active artist and content creator—I draw, paint, sculpt, make music, and code. This creative foundation allows me to approach problem-solving with both imagination and structure, crafting designs that are visually compelling and strategically effective.
              </p>

              <p>
                I’m excited to contribute to teams where design, technology, and user experience come together to create meaningful impact. I aim to work on products that are intuitive, visually thoughtful, and built through collaboration and purpose.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">UI/UX Design</span>
              <span className="px-3 py-1 bg-lavender text-indigo-800 rounded-full text-sm">Graphic Design</span>
              <span className="px-3 py-1 bg-mint text-green-800 rounded-full text-sm">Branding</span>
              <span className="px-3 py-1 bg-ivory text-amber-800 rounded-full text-sm">Illustration</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Web Development</span>
              
            </div>
            
          </motion.div>
        </div>

        <Timeline />
      </div>
    </section>
  )
}
