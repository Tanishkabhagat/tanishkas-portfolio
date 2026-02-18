"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Jenkins", role: "Marketing Director", text: "Absolute game changer for our brand identity! The vision was captured perfectly." },
  { name: "David Chen", role: "UI/UX Lead", text: "The attention to detail in the video edits is unmatched. A true professional through and through." },
  { name: "Elena Rodriguez", role: "Founder", text: "Transformed our complex ideas into a beautiful interface that our users actually love." },
  { name: "Marcus Thorne", role: "Creative Head", text: "Professional, timely, and incredibly talented. They delivered beyond our expectations." },
];

export default function TestimonialMarquee() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Client <span className="text-pink-600">Feedback</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Overlays for depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          // Pause animation on hover so people can actually read the cards
          whileHover={{ transition: { duration: 0 } }} 
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="inline-block mx-6 w-[350px] md:w-[450px] whitespace-normal"
            >
              {/* The Card */}
              <div className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden">
                
                {/* Subtle Quote Icon Background */}
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-pink-50 opacity-40 -rotate-12" />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-pink-500 text-sm">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg mb-8 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center font-bold text-pink-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none mb-1">{t.name}</h4>
                    <p className="text-sm text-pink-600 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}