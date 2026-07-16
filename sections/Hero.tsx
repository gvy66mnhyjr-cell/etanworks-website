"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero.jpeg"
        alt="Etanworks Excavation"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xl font-semibold uppercase tracking-[0.35em] text-yellow-400"
          >
            ENGINEERING • EARTHWORKS • INFRASTRUCTURE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Building Strong
            <br />
            Foundations for
            <br />
            <span className="text-yellow-400">Kenya&apos;s Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-gray-200 md:text-xl"
          >
            Etanworks Limited delivers reliable earthmoving, excavation,
            civil engineering and construction solutions with an unwavering
            commitment to safety, quality and timely project delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Get a Free Quote
            </a>

            <a
              href="#services"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}