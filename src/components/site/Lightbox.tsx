import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type LightboxImage = { src: string; caption?: string };

export function Lightbox({
  images,
  open,
  initialIndex = 0,
  onClose,
}: {
  images: LightboxImage[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]?.src}
              alt={images[index]?.caption ?? ""}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
          {images[index]?.caption && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              {images[index].caption}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}