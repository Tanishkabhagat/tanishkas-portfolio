import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-pink-100 px-5 md:px-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-playfair font-bold text-pink-600">
              Tanishka
            </Link>
            <p className="text-sm text-gray-600 mt-1">Crafting dreamy interfaces with a touch of Pisces energy</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 flex items-center">
              Made with <Heart size={14} className="mx-1 text-pink-500" /> in {currentYear}
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <Link href="#" className="hover:text-pink-600 transition-colors mr-4">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-pink-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
