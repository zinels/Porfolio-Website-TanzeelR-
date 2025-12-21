"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Rocket, Zap, Database, Terminal } from "lucide-react";

export default function AnimatedCharacter() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background with more layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-accent/10 border border-accent/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-purple-500/10 border border-purple-500/20"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-pink-500/10 border border-pink-500/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main character representation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Enhanced Head/Avatar circle with glow effect */}
        <motion.div
          className="relative w-36 h-36 rounded-full bg-gradient-to-br from-accent/30 via-purple-500/20 to-pink-500/20 border-2 border-accent/40 flex items-center justify-center mb-4 shadow-lg shadow-accent/20"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative text-5xl z-10">👨‍💻</div>
        </motion.div>

        {/* Enhanced floating icons with more variety */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute"
            style={{ top: "8%", left: "15%" }}
            animate={{
              rotate: [0, 360],
              y: [0, -25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code className="w-7 h-7 text-accent drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ top: "12%", right: "12%" }}
            animate={{
              rotate: [360, 0],
              y: [0, -20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Rocket className="w-6 h-6 text-purple-500 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ bottom: "18%", left: "20%" }}
            animate={{
              rotate: [0, -360],
              y: [0, 15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Coffee className="w-6 h-6 text-accent/80 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ top: "25%", left: "5%" }}
            animate={{
              rotate: [0, 180, 360],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          >
            <Zap className="w-5 h-5 text-yellow-500 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ bottom: "25%", right: "8%" }}
            animate={{
              rotate: [360, 180, 0],
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <Database className="w-5 h-5 text-cyan-500 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ top: "50%", right: "5%" }}
            animate={{
              rotate: [0, -180, -360],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Terminal className="w-5 h-5 text-green-500 drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Enhanced name tag with pulse effect */}
        <motion.div
          className="mt-6 px-5 py-2.5 rounded-full bg-muted/60 border border-accent/30 backdrop-blur-sm shadow-lg"
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 0px rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm font-semibold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Tanzeel
          </span>
        </motion.div>
      </div>
    </div>
  );
}

