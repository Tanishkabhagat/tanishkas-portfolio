"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

// Abstract geometric design component that responds to cursor
const AbstractDesign = () => {
  // Mouse position values for interactive elements
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smoother movement
  const springConfig = { damping: 40, stiffness: 100, mass: 1 }
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)
  const translateZ = useSpring(useMotionValue(0), springConfig)

  // Handle mouse movement for the interactive effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center (normalized to -1 to 1)
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 5
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * -5
    const translateZValue = Math.abs(
      Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)) / 10,
    )

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    translateZ.set(translateZValue)
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <motion.div
      className="relative w-[400px] h-[400px] mx-auto"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        perspective: 1000,
      }}
    >
      {/* Main abstract shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          z: translateZ,
        }}
      >
        {/* Circle */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Geometric elements */}
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full border-2 border-gold/20"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.02),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.02),
          }}
        />

        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full border border-purple-200/40"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * -0.01),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * -0.01),
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Stylized silhouette suggestion */}
        <motion.div
          className="absolute w-[180px] h-[280px] bg-gradient-to-b from-pink-200/60 to-purple-200/60 rounded-full backdrop-blur-sm"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.015),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.015),
          }}
        />

        {/* Abstract design elements */}
        <motion.div
          className="absolute top-[20%] left-[30%] w-[40px] h-[40px] rounded-full bg-gold/30 backdrop-blur-sm"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.03),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.03),
          }}
        />

        <motion.div
          className="absolute bottom-[25%] right-[35%] w-[60px] h-[60px] rounded-full bg-purple-200/40 backdrop-blur-sm"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.025),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.025),
          }}
        />

        <motion.div
          className="absolute top-[40%] right-[25%] w-[30px] h-[30px] rounded-full bg-pink-300/30 backdrop-blur-sm"
          style={{
            x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.035),
            y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.035),
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// Floating element with parallax effect
const FloatingElement = ({
  size,
  color,
  left,
  top,
  depth,
  delay = 0,
}: {
  size: string
  color: string
  left: string
  top: string
  depth: number
  delay?: number
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className={`absolute rounded-full backdrop-blur-sm ${size} ${color}`}
      style={{
        left,
        top,
        x: useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.01 * depth),
        y: useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.01 * depth),
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Animation values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  // Background elements for parallax effect
  const backgroundElements = [
    { size: "w-16 h-16", color: "bg-pink-100/20", left: "10%", top: "20%", depth: 0.5, delay: 0 },
    { size: "w-24 h-24", color: "bg-purple-100/20", left: "75%", top: "15%", depth: 0.8, delay: 1 },
    { size: "w-20 h-20", color: "bg-gold/10", left: "25%", top: "70%", depth: 1.2, delay: 0.5 },
    { size: "w-12 h-12", color: "bg-pink-200/20", left: "80%", top: "60%", depth: 0.7, delay: 1.5 },
    { size: "w-32 h-32", color: "bg-purple-200/10", left: "15%", top: "40%", depth: 0.9, delay: 2 },
  ]

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sophisticated background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(253,242,248,0.8)_0%,rgba(255,255,255,0)_70%)]"></div>
      </div>

      {/* Background floating elements with parallax */}
      {backgroundElements.map((element, index) => (
        <FloatingElement
          key={index}
          size={element.size}
          color={element.color}
          left={element.left}
          top={element.top}
          depth={element.depth}
          delay={element.delay}
        />
      ))}

      {/* Background "PORTFOLIO" text */}
      <motion.div
        className="absolute text-[15vw] font-bold tracking-tighter z-0 select-none text-pink-100/30"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]),
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        PORTFOLIO
      </motion.div>

      {/* Main content container */}
      <motion.div className="container mx-auto px-4 z-10 text-center relative  mt-20 md:mt-0" style={{ y, opacity, scale }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Abstract design on the left for larger screens, centered on mobile */}
          <div className="order-1 flex justify-center">
            <AbstractDesign />
          </div>

          {/* Text content on the right for larger screens, top on mobile */}
          <motion.div
            className="order-2 text-left lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-light mb-2 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block font-light text-gray-400 text-xl md:text-2xl mb-2">Hello, I'm</span>
              <span className="font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Tanishka
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center text-sm md:text-base text-gray-500 mb-6 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span>Selected Works & Projects</span>
              <span className="mx-2 text-gold">✦</span>
              <span>2023-2024</span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
            Design generalist with a specialist's eye — blending UI/UX, visuals, and motion into seamless, soulful experiences that look as good as they feel.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium 
                         shadow-md transition-all duration-300 hover:shadow-lg hover:from-pink-500 hover:to-purple-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-transparent text-gray-700 border border-gray-300 rounded-full 
                         font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-300 hover:text-pink-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle decorative element at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
        }}
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9A8D4" />
              <stop offset="1" stopColor="#C4B5FD" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.section>
  )
}
