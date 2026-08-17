import { useEffect, useRef, useState } from "react";
import type { RoadmapItem } from "../data/roadmap";
import MediaLightbox, { type LightboxMedia } from "./MediaLightbox";
import { withBase } from "../lib/base";

type Props = {
  item: RoadmapItem;
  compact?: boolean;
};

type VideoProps = {
  src: string;
  poster?: string;
  ratio?: string;
  onMetadata: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
};

const InViewVideo = ({ src, poster, ratio, onMetadata }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={withBase(src)}
      poster={poster ? withBase(poster) : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedMetadata={onMetadata}
      style={ratio ? { aspectRatio: ratio } : { aspectRatio: "16 / 9" }}
      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
};

const ZoomIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21 L16.5 16.5" />
    <path d="M11 8.5 V13.5 M8.5 11 H13.5" />
  </svg>
);

const allMedia = (item: RoadmapItem): LightboxMedia[] => [
  ...item.images.map((src, i) => ({
    type: "image" as const,
    src,
    alt: `${item.name} preview ${i + 1}`,
  })),
  ...item.videos.map((video, i) => ({
    type: "video" as const,
    src: video.src,
    poster: video.poster,
    alt: `${item.name} video ${i + 1}`,
  })),
];

const RoadmapMedia = ({ item, compact = false }: Props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [ratios, setRatios] = useState<Record<string, string>>({});
  const media = allMedia(item);
  const count = media.length;

  if (count === 0) return null;

  const onVideoMetadata = (src: string) => (
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = e.currentTarget;
    if (!video.videoWidth || !video.videoHeight) return;
    setRatios((prev) =>
      prev[src] ? prev : { ...prev, [src]: `${video.videoWidth} / ${video.videoHeight}` }
    );
  };

  const tile = (m: LightboxMedia, index: number, featured = false) => {
    const videoRatio = m.type === "video" ? ratios[m.src] : undefined;

    return (
      <button
        key={`${m.type}-${index}`}
        type="button"
        onClick={() => setLightboxIndex(index)}
        className={`group relative block w-full overflow-hidden rounded-lg bg-neutral-900 ${
          featured ? "" : "mb-2 break-inside-avoid"
        }`}
        aria-label={`Enlarge ${m.alt}`}
      >
        {m.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={withBase(m.src)}
            alt={m.alt}
            loading="lazy"
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <InViewVideo
            src={m.src}
            poster={m.poster}
            ratio={videoRatio}
            onMetadata={onVideoMetadata(m.src)}
          />
        )}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-white transition-all duration-200 group-hover:bg-black/30">
          <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <ZoomIcon />
          </span>
        </span>
      </button>
    );
  };

  return (
    <>
      {compact ? (
        <div className="grid grid-cols-2 gap-2">
          {media.map((m, i) => tile(m, i))}
        </div>
      ) : count === 1 ? (
        tile(media[0]!, 0, true)
      ) : (
        <>
          {tile(media[0]!, 0, true)}
          <div className="mt-2 columns-2 gap-2 lg:columns-3">
            {media.slice(1).map((m, i) => tile(m, i + 1))}
          </div>
        </>
      )}

      <MediaLightbox
        media={media}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
};

export default RoadmapMedia;