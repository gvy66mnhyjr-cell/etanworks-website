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

  // Cover image comes first
  const images = [coverImage, ...gallery];

  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Explore {name}
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Browse high-quality images showcasing the equipment,
            its capabilities and working condition.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {images.length} Photos
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0
                    ? "lg:col-span-2 lg:row-span-2 h-[520px]"
                    : "h-[250px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} ${index + 1}`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width:1024px) 100vw, 66vw"
                      : "(max-width:1024px) 100vw, 33vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 font-semibold shadow-xl">
                    <Search size={20} />
                    View Image
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
              (selectedIndex - 1 + images.length) % images.length
            )
          }
        />
      )}
    </>
  );
}