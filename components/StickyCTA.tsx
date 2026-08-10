"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 30, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50"
        >
          <div className="relative">
            <Link
              href="/#contact"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/90 px-4 py-3 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
            >
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                  Ready to build?
                </span>

                <span className="text-sm font-semibold">
                  Start a Project
                </span>
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close Start a Project"
              className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-black text-white/50 transition hover:text-white"
            >
              <X size={11} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}