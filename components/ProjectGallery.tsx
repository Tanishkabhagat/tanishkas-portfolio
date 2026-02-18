"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface GalleryImage {
  imageSrc: string;
  instagramUrl?: string;
}

interface ProjectGalleryProps {
  images?: GalleryImage[];
  videos?: string[];
}

export default function ProjectGallery({ images, videos }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images?.length && !videos?.length) return null;

  const isFewImages = images && images.length <= 2;

  return (
    <div className="w-full py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-pink-700 tracking-tight">
          Project Gallery
        </h2>

        {/* Dynamic Image Section */}
        {images && (
          <div 
            className={
              isFewImages 
                ? "flex flex-col gap-8" // Full width stacking for 1-2 images
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" // Grid for 3+ images
            }
          >
            {images.map((item, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 ${
                    isFewImages ? "w-full aspect-[16/9] md:aspect-[21/9]" : "aspect-square"
                  }`}
                  onClick={() => !item.instagramUrl && setSelectedImage(item.imageSrc)}
                >
                  <Image
                    src={item.imageSrc || "/placeholder.svg"}
                    alt={`Project showcase ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    sizes={isFewImages ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  
                  {item.instagramUrl && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full flex items-center gap-2 text-pink-700 font-bold shadow-xl">
                        <span>View Post</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );

              return item.instagramUrl ? (
                <Link key={index} href={item.instagramUrl} target="_blank" className="block">
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        )}

        {/* Videos Section */}
        {videos && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {videos.map((videoUrl, index) => {
              const embedUrl = videoUrl.includes("youtube.com") 
                ? videoUrl.replace("watch?v=", "embed/") 
                : videoUrl;

              return (
                <motion.div 
                  key={index}
                  className="aspect-video rounded-2xl overflow-hidden shadow-xl"
                >
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-pink-500 transition-colors">
              <X size={32} />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Full View"
                width={1600}
                height={900}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}