"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export default function ProjectGallery({
  title,
  images,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 py-24 text-white">
        {/* Gallery glow */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="mb-10">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Project Gallery
            </span>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Project Photos
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image}
                onClick={() => setSelectedImage(index)}
                className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-xl transition duration-500 hover:border-orange-500/40 hover:shadow-2xl"
              >
                <Image
                  src={image}
                  alt={`${title} project image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

                {/* Hover accent */}
                <div className="absolute inset-0 border-2 border-orange-500/0 rounded-2xl transition duration-500 group-hover:border-orange-500/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <ImageLightbox
          images={images}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() =>
            setSelectedImage((selectedImage + 1) % images.length)
          }
          onPrevious={() =>
            setSelectedImage(
              (selectedImage - 1 + images.length) % images.length
            )
          }
        />
      )}
    </>
  );
}