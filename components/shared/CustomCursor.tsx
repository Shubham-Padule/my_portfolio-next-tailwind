"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth movement physics
  const springX = useSpring(0, { stiffness: 500, damping: 28 });
  const springY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: any) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) {
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
  }, [springX, springY]);

  return (
    <>
      {/* 1. Main Background Glow (The Splash Effect) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />

      {/* 2. Floating Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 3. Interactive Outer Ring */}
      <motion.div
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.6 : 0.2,
          borderWidth: isHovered ? "1px" : "2px"
        }}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-indigo-500 rounded-full pointer-events-none z-[998]"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}