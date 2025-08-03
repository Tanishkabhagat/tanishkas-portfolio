// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// type ElementType = {
//   id: number
//   size: string
//   color: string
//   delay: number
//   initialX?: string
//   initialY?: string
//   animateX?: string[]
//   animateY?: string[]
// }

// const baseElements = [
//   { id: 1, size: "w-16 h-16", color: "bg-pink-200/30", delay: 0 },
//   { id: 2, size: "w-24 h-24", color: "bg-lavender/60", delay: 2 },
//   { id: 3, size: "w-12 h-12", color: "bg-pink/30", delay: 1 },
//   { id: 4, size: "w-20 h-20", color: "bg-pink-100/30", delay: 3 },
//   { id: 5, size: "w-8 h-8", color: "bg-pink/50", delay: 0.5 },
// ]

// export default function FloatingElements() {
//   const [elements, setElements] = useState<ElementType[]>([])

//   useEffect(() => {
//     // Only runs on client
//     const withRandomPositions = baseElements.map((el) => ({
//       ...el,
//       initialX: `${Math.random() * 100}%`,
//       initialY: `${Math.random() * 100}%`,
//       animateX: [
//         `${Math.random() * 100}%`,
//         `${Math.random() * 100}%`,
//         `${Math.random() * 100}%`,
//       ],
//       animateY: [
//         `${Math.random() * 100}%`,
//         `${Math.random() * 100}%`,
//         `${Math.random() * 100}%`,
//       ],
//     }))
//     setElements(withRandomPositions)
//   }, [])

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//       {elements.map((element) => (
//         <motion.div
//           key={element.id}
//           className={`absolute rounded-full ${element.size} ${element.color} backdrop-blur-sm`}
//           initial={{
//             x: element.initialX,
//             y: element.initialY,
//             opacity: 0,
//           }}
//           animate={{
//             x: element.animateX,
//             y: element.animateY,
//             opacity: [0.3, 0.7, 0.3],
//           }}
//           transition={{
//             duration: 20 + Math.random() * 10,
//             delay: element.delay,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   )
// }
