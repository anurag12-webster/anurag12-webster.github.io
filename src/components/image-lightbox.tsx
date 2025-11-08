"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img src={src} alt={alt} onClick={() => setOpen(true)} className="cursor-pointer" />
      {open && createPortal(
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={src} alt={alt} className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </>
  );
}
