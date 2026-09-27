"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

type EquipmentGalleryProps = {
  coverImage: string;
  gallery: string[];
  name: string;
};

export default function EquipmentGallery({
  coverImage,
  gallery,
  name,
}: EquipmentGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = coverImage ? [coverImage, ...gallery] : gallery;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
        {/* Gallery glow */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Machine Gallery
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Explore {name}
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              A closer look at the machine, its configuration and working
              capabilities.
            </p>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
              {images.length} Photos
            </p>
          </div>

          {/* Gallery */}
          <div className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${name} image ${index + 1}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 text-left shadow-xl transition-all duration-500 hover:border-orange-500/30 sm:rounded-3xl ${
                  index === 0
                    ? "h-[320px] sm:h-[420px] lg:col-span-2 lg:row-span-2 lg:h-[520px]"
                    : "h-[220px] sm:h-[250px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} equipment image ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1023px) 100vw, 66vw"
                      : "(max-width: 1023px) 100vw, 33vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-950/20" />

                {/* Image number */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* View image */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-5 lg:inset-0 lg:items-center lg:p-0">
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-xl transition-all duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <Search size={18} />
                    <span>View Image</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((selectedIndex + 1) % images.length)
          }
          onPrevious={() =>
            setSelectedIndex(
              (selectedIndex - 1 + images.length) % images.length,
            )
          }
        />
      )}
    </>
  );
}