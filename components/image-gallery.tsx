"use client";

import { useState } from "react";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";

interface ImageGalleryProps {
  images: any;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  function handleImageClick(image: any) {
    setBigImage(image);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full cursor-pointer object-cover object-center"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          width={500}
          height={500}
          alt="photo"
          className="h-full w-full cursor-pointer object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          On Sale
        </span>
      </div>
    </div>
  );
}
