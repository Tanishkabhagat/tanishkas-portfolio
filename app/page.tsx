import type { Metadata } from "next"
import Hero from "@/components/Hero"
import PortfolioGrid from "@/components/PortfolioGrid"
import About from "@/components/About"
import Contact from "@/components/Contact"
import LogoLoop from "@/components/LogoLoop"
// import FloatingElements from "@/components/FloatingElements"

export const metadata: Metadata = {
  title: "Tanishka | Graphic Designer & video editor",
  description: "Crafting dreamy interfaces with a touch of Pisces energy",
}

export default function Home() {
  const imageLogos = [
  { src: "/1.png", alt: "alekhya logo", href: "" },
  { src: "/2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/4.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/5.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/6.png", alt: "Company 3", href: "https://company3.com" },
];
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <LogoLoop logos={imageLogos} speed={10}
        direction="left"
        logoHeight={200}
        gap={90}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners" className="mt-20"/>
      <PortfolioGrid />
      <About />
      <Contact />
    </main>
  )
}
