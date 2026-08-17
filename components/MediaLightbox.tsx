import { useEffect } from "react";
import { withBase } from "../lib/base";

export type LightboxMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

type Props = {
  media: LightboxMedia[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 ${direction === "left" ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6 L15 12 L9 18" />
  </svg>
);

const MediaLightbox = ({ media, index, onClose, onNavigate }: Props) => {
  const current = index !== null ? media[index] : null;

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
      if (e.key === "ArrowRight" && index < media.length - 1)
        onNavigate(index + 1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, media.length, onClose, onNavigate]);

  if (index === null || !current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full border border-neutral-700 bg-neutral-800/80 p-2 text-neutral-300 transition-colors hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 6 L18 18 M18 6 L6 18" />
        </svg>
      </button>

      {index > 0 && (
        <button
          type="button"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          className="absolute left-3 z-10 rounded-full border border-neutral-700 bg-neutral-800/80 p-2 text-neutral-300 transition-colors hover:text-white"
        >
          <ChevronIcon direction="left" />
        </button>
      )}
      {index < media.length - 1 && (
        <button
          type="button"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          className="absolute right-3 z-10 rounded-full border border-neutral-700 bg-neutral-800/80 p-2 text-neutral-300 transition-colors hover:text-white"
        >
          <ChevronIcon direction="right" />
        </button>
      )}

      <div
        className="anim-pop max-h-full w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {current.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={withBase(current.src)}
            alt={current.alt}
            className="max-h-[80vh] w-full rounded-lg border border-neutral-700 object-contain shadow-2xl"
          />
        ) : (
          <video
            key={current.src}
            src={withBase(current.src)}
            poster={current.poster ? withBase(current.poster) : undefined}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="max-h-[80vh] w-full rounded-lg border border-neutral-700 bg-black shadow-2xl"
          />
        )}
      </div>

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-300">
        {index + 1} / {media.length}
      </span>
    </div>
  );
};

export default MediaLightbox;