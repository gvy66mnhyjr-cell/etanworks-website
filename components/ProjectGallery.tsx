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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-3xl font-bold text-gray-900">
            Project Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image}
                onClick={() => setSelectedImage(index)}
                className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`${title} project image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
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