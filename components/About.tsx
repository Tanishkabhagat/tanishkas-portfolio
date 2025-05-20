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
    <section id="about" ref={ref} className="section-padding bg-pink-50/50">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div>

            <div className="relative rounded-3xl shadow-xl mb-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
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
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">Hello, I'm Tanishka</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                As a Pisces, I bring a dreamy, intuitive approach to my design work. I believe in creating interfaces
                that not only look beautiful but also evoke emotion and provide seamless experiences.
              </p>

              <p>
                With over 5 years of experience in graphic design and UI/UX development, I've worked with clients across
                various industries to bring their visions to life. My approach combines artistic sensibility with
                technical expertise to create designs that are both aesthetically pleasing and functionally effective.
              </p>

              <p>
                When I'm not designing, you can find me exploring art galleries, practicing yoga, or getting lost in a
                good book. I draw inspiration from nature, art, and the emotional connections we form with the world
                around us.
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
