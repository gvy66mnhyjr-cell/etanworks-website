"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideInProps = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
}: SlideInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}