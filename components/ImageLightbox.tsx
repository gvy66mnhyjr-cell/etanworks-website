"use client";

import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {

  useEffect(() => {
    // Prevent page scrolling while the lightbox is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-8 top-8 rounded-full bg-black/40 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-500"
      >
        <X size={36} />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-6 rounded-full bg-black/40 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-500"
      >
        <ChevronLeft size={44} />
      </button>

      {/* Image */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[80vh] w-[90vw]"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <Image
          src={images[currentIndex]}
          alt=""
          fill
          priority
          className="object-contain"
        />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-5 py-2 text-sm font-semibold text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 rounded-full bg-black/40 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-500"
      >
        <ChevronRight size={44} />
      </button>
    </motion.div>
  );
}