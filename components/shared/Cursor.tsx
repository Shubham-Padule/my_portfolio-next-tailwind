"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth Spring Physics (Jo premium feel deta hai)
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Buttons aur Links par cursor bada karne ke liye logic
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring (Follower) */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(99, 102, 241, 0.15)" : "transparent",
        }}
        className="absolute w-8 h-8 border border-indigo-500/40 rounded-full -ml-4 -mt-4 transition-colors duration-300"
      />
      
      {/* Inner Dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        className="absolute w-1.5 h-1.5 bg-indigo-500 rounded-full -ml-[3px] -mt-[3px]"
      />
    </div>
  );
}