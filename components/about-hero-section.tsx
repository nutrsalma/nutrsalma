"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


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
      color: `rgba(90, 158, 157, ${Math.random() * 0.3 + 0.1})`,
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

export default function AboutHeroSection() {
  const title = "من نحن";
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
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-[#5a9e9d] dark:from-teal-300 dark:to-[#5a9e9d]"
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
            عيادة متخصصة في التغذية العلاجية تقدم حلولاً صحية مدروسة لكل فرد.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
