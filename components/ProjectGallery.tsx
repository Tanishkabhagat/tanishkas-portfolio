"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Define the shape of the 'images' prop we now expect
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

  // If there's nothing to show, render nothing
  if (!images?.length && !videos?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">
        Project Gallery
      </h2>

      {images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((item, index) => {
            if (item.instagramUrl) {
              return (
                <Link key={index} href={item.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </Link>
              );
            }
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full"
                onClick={() => setSelectedImage(item.imageSrc)}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={`Project image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {videos && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {videos.map((videoUrl, index) => {
             const embedUrl = videoUrl.includes("youtube.com") ? videoUrl.replace("watch?v=", "embed/") : videoUrl;
             return (
               <motion.div>
                 <iframe src={embedUrl}/>
               </motion.div>
             );
          })}
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-pink-600/50 hover:bg-pink-600"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            >
              <Image
                src={selectedImage}
                alt="Project image full view"
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}