"use client";

import React from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types/project";

interface ProjectImageGalleryProps {
  images: ProjectImage[];
}

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = React.useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return null;
      return (idx - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const showNext = React.useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return null;
      return (idx + 1) % images.length;
    });
  }, [images.length]);

  React.useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, showNext, showPrev]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="rounded-lg overflow-hidden border bg-muted/10 cursor-pointer group"
            onClick={() => setOpenIndex(idx)}
          >
            <div className="relative aspect-[4/3] bg-background">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2 group-hover:scale-[1.02] transition-transform"
              />
            </div>
            {img.caption && (
              <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/60">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          aria-modal="true"
          role="dialog"
          onClick={close}
        >
          {/* Stop propagation so clicks on content don't close */}
          <div className="relative w-full max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Large image */}
            <div className="relative w-full h-[70vh] md:h-[75vh]">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption */}
            {images[openIndex].caption && (
              <div className="mt-3 text-center text-sm text-muted-foreground">
                {images[openIndex].caption}
              </div>
            )}

            {/* Controls */}
            <button
              type="button"
              aria-label="Close"
              className="absolute -top-3 -right-3 md:top-0 md:right-0 m-2 rounded-full bg-white/90 hover:bg-white text-black p-2 shadow"
              onClick={close}
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous"
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-black shadow"
                  onClick={showPrev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-black shadow"
                  onClick={showNext}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
