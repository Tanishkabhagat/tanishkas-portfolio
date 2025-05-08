"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"

interface PortfolioCardProps {
  project: Project
  index: number
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative overflow-hidden rounded-xl card-hover">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent p-6 flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.category}</p>

              <div className="flex items-center text-white">
                <span className="mr-2">View Project</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
