import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="relative p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing Circuit Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 animate-glow border border-gray-500 rounded-lg"></div>
        </motion.div>

        {/* SVG Logo */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/logo.svg"
            alt="DestinPQ Logo"
            width={300}
            height={300}
            
            className="invert-color" // Apply the invert class
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
