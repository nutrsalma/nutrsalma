"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Bubble({
  x,
  y,
  size,
  color,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
}) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  );
}

function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<
    Array<{ id: number; x: number; y: number; size: number; color: string }>
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1200),
      y:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 800),
      size: Math.random() * 20 + 5,
      color: `rgba(90, 158, 157, ${Math.random() * 0.3 + 0.1})`, // Using your brand color #5a9e9d
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <title>Floating Bubbles</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  );
}

export default function FloatingBubblesHero() {
  const title = "خدماتنا المتخصصة";
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-100 to-[#5a9e9d] dark:from-teal-900 dark:to-[#5a9e9d]">
      <FloatingBubbles />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block ml-4 first:ml-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                               bg-gradient-to-r from-teal-600 to-[#5a9e9d] 
                               dark:from-teal-300 dark:to-[#5a9e9d]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            نقدم مجموعة شاملة من الخدمات المتخصصة في التغذية العلاجية والحميات
            الغذائية لتلبية جميع احتياجاتكم الصحية والغذائية
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="inline-block group relative bg-gradient-to-b from-teal-400/30 to-[#5a9e9d]/30 
                       dark:from-teal-600/30 dark:to-[#5a9e9d]/30 p-px rounded-2xl backdrop-blur-lg 
                       overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                         bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 
                         text-teal-600 dark:text-teal-300 transition-all duration-300 
                         group-hover:-translate-y-0.5 border border-teal-200/50 dark:border-teal-700/50
                         hover:shadow-md dark:hover:shadow-teal-900/30"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                استكشف خدماتنا
              </span>
              <span
                className="mr-3 opacity-70 group-hover:opacity-100 group-hover:-translate-x-1.5 
                           transition-all duration-300"
              >
                ←
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
