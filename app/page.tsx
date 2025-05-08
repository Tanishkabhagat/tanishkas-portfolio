import type { Metadata } from "next"
import Hero from "@/components/Hero"
import PortfolioGrid from "@/components/PortfolioGrid"
import About from "@/components/About"
import Contact from "@/components/Contact"
import FloatingElements from "@/components/FloatingElements"

export const metadata: Metadata = {
  title: "Tanishka | Graphic Designer & UI/UX Developer",
  description: "Crafting dreamy interfaces with a touch of Pisces energy",
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
    </main>
  )
}
