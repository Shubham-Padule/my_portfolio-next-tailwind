"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SplashCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth Movement Physics
  const smoothX = useSpring(0, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect Hover on Buttons/Links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Agar element button, link ya hamari 'group' class wala hai toh bada hoga
      if (target.closest('button, a, .group, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [smoothX, smoothY]);

  return (
    <>
      {/* 1. Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />

      {/* 2. Main Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#6366f1]"
        animate={{ scale: isHovered ? 2.5 : 1 }} // Dot thoda bada hoga hover par
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 3. Outer Interactive Ring (Ye bada hoga) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-500/30 pointer-events-none z-[9998]"
        animate={{ 
          width: isHovered ? 60 : 40, // Normal 40px, Hover par 60px
          height: isHovered ? 60 : 40,
          borderColor: isHovered ? "rgba(99, 102, 241, 0.8)" : "rgba(255, 255, 255, 0.2)",
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.05)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}