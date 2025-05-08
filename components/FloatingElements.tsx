"use client"

import { motion } from "framer-motion"

const floatingElements = [
  { id: 1, size: "w-16 h-16", color: "bg-pink-200/30", delay: 0 },
  { id: 2, size: "w-24 h-24", color: "bg-lavender/30", delay: 2 },
  { id: 3, size: "w-12 h-12", color: "bg-mint/30", delay: 1 },
  { id: 4, size: "w-20 h-20", color: "bg-pink-100/30", delay: 3 },
  { id: 5, size: "w-8 h-8", color: "bg-ivory/50", delay: 0.5 },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${element.size} ${element.color} backdrop-blur-sm`}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
