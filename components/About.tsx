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
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto></p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>

            <div className="relative rounded-3xl shadow-xl mb-10  w-full max-w-[500px] mx-auto">
              <Image
                src="/tanishka.jpg"
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
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-pink-700 ">Tanishka Bhagat</h3>

            <div className="space-y-4 text-gray-700">
              
              <p>
                Designing and editing since I was a teen. Today, I help brands and creators build their visual identity. I know what works because I do it myself, my own content has racked up 900k+ views. Whether it's branding or motion, I create visuals that get attention
              </p>
              <h1 className="font-bold text-lg text-pink-600"> What I do </h1>
              <li className=""> <b>Design for digital:</b> social posts, branding, layouts, promo graphics</li>
              <li> <b>Edit videos:</b>  short-form, long-form, content cuts, promo edits</li>
              <li> <b>Add motion:</b> animated text, smooth transitions, logo builds</li>

            
            

            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">UI/UX Design</span> */}
              <span className="px-3 py-1 bg-lavender text-indigo-800 rounded-full text-sm">Graphic Design</span>
              <span className="px-3 py-1 bg-mint text-green-800 rounded-full text-sm">Branding</span>
              <span className="px-3 py-1 bg-orange-200 text-amber-800 rounded-full text-sm">Illustration</span>
              {/* <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Web Development</span> */}
              <span className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-sm">Video Editing</span>
            </div>
            
          </motion.div>
        </div>

        <Timeline />
      </div>
    </section>
  )
}
