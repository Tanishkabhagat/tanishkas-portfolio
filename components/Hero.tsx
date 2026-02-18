"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion"

// Helper to safely handle window-based transformations
const useSafeTransform = (value: MotionValue<number>, factor: number, mounted: boolean, dimension: 'width' | 'height' = 'width') => {
  return useTransform(value, (val) => {
    if (!mounted || typeof window === "undefined") return 0
    const center = dimension === 'width' ? window.innerWidth / 2 : window.innerHeight / 2
    return (val - center) * factor
  })
}

const AbstractDesign = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 40, stiffness: 100, mass: 1 }
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)
  const translateZ = useSpring(useMotionValue(0), springConfig)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    rotateX.set(((e.clientY - centerY) / (rect.height / 2)) * 5)
    rotateY.set(((e.clientX - centerX) / (rect.width / 2)) * -5)
    translateZ.set(Math.abs(Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)) / 10))
    
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <motion.div
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ rotateX, rotateY, z: translateZ }}
      >
        <motion.img
          src="/fish.png"
          alt="Rotating design element"
          className="absolute w-[280px] h-[280px] md:w-[330px] md:h-[330px] opacity-80 z-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-full h-full rounded-full bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[75%] h-[75%] rounded-full border-2 border-pink-200/20"
          style={{ 
            x: useSafeTransform(mouseX, 0.02, hasMounted), 
            y: useSafeTransform(mouseY, 0.02, hasMounted, 'height') 
          }}
        />

        <motion.div
          className="absolute w-[45%] h-[70%] bg-gradient-to-b from-pink-200/40 to-purple-200/40 rounded-full backdrop-blur-md"
          style={{ 
            x: useSafeTransform(mouseX, 0.015, hasMounted), 
            y: useSafeTransform(mouseY, 0.015, hasMounted, 'height') 
          }}
        />
      </motion.div>
    </motion.div>
  )
}

const FloatingElement = ({ size, color, left, top, depth, delay = 0 }: any) => {
  const [hasMounted, setHasMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setHasMounted(true)
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mouseX, mouseY])

  const x = useSafeTransform(mouseX, 0.01 * depth, hasMounted)
  const y = useSafeTransform(mouseY, 0.01 * depth, hasMounted, 'height')

  return (
    <motion.div
      className={`absolute rounded-full backdrop-blur-sm ${size} ${color}`}
      style={{ left, top, x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -20, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const backgroundElements = [
    { size: "w-16 h-16", color: "bg-pink-100/20", left: "10%", top: "20%", depth: 0.5, delay: 0 },
    { size: "w-24 h-24", color: "bg-purple-100/20", left: "75%", top: "15%", depth: 0.8, delay: 1 },
    { size: "w-20 h-20", color: "bg-pink-200/10", left: "25%", top: "70%", depth: 1.2, delay: 0.5 },
    { size: "w-32 h-32", color: "bg-purple-200/10", left: "15%", top: "40%", depth: 0.9, delay: 2 },
  ]

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-50 via-white to-purple-50" />

      {backgroundElements.map((element, index) => (
        <FloatingElement key={index} {...element} />
      ))}

      <motion.div 
        className="container mx-auto px-6 z-10 relative" 
        style={{ y, opacity, scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <AbstractDesign />
          </div>

          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-gray-800">
              <span className="block text-xl md:text-2xl text-gray-400 mb-2 font-light">Hello, I'm</span>
              <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Tanishka
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start text-sm md:text-base text-gray-500 mb-8 gap-3">
              <span>Graphic Designer</span>
              <span className="text-pink-300">✦</span>
              <span>Video Editor</span>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I craft dreamy visual identities and high-impact motion content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#portfolio"
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-lg shadow-pink-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="px-10 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold hover:border-pink-300 hover:text-pink-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}