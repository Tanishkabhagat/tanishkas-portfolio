"use client"

import type React from "react"

import { Inter, Playfair_Display } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}

