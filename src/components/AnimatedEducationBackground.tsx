"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Code2 } from "lucide-react";

export default function AnimatedEducationBackground() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-accent/5 border border-accent/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-purple-500/5 border border-purple-500/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-cyan-500/5 border border-cyan-500/10"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      {/* Floating education icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute"
          style={{ top: "15%", left: "20%" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GraduationCap className="w-8 h-8 text-accent/60" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ top: "25%", right: "15%" }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -15, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <BookOpen className="w-7 h-7 text-purple-500/60" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ bottom: "20%", left: "25%" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Award className="w-7 h-7 text-cyan-500/60" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ bottom: "30%", right: "20%" }}
          animate={{
            y: [0, 12, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Code2 className="w-6 h-6 text-accent/50" />
        </motion.div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/20"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Central decorative element */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/10 via-purple-500/5 to-cyan-500/10 border-2 border-accent/20 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <GraduationCap className="w-16 h-16 text-accent/40" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

