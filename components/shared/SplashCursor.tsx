"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SplashCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth Movement ke liye Spring Physics
  const smoothX = useSpring(0, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothX, smoothY]);

  return (
    <>
      {/* 1. Main Subtle Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
        }}
      />

      {/* 2. Small Tech Dot (Cursor Replacement) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#6366f1]"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 3. Outer Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998]"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}