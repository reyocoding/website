import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import RoadmapCard from "../components/RoadmapCard";
import RoadmapMedia from "../components/RoadmapMedia";
import RoadmapPlaque from "../components/RoadmapPlaque";
import Reveal from "../components/Reveal";
import { roadmap } from "../data/roadmap";

const lineTile = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none"><defs><linearGradient id="t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#d946ef"/></linearGradient></defs><path d="M50 0 C80 25 20 75 50 100" stroke="url(#t)" stroke-width="4" stroke-linecap="round" stroke-dasharray="12 14"/></svg>`
)}")`;

const MilestoneDot = ({ special }: { special?: boolean }) =>
  special ? (
    <div className="relative">
      <div className="absolute -inset-2 rounded-full bg-violet-500/30 blur-md animate-pulse" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-6 w-6 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.9)]"
        fill="currentColor"
      >
        <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" />
      </svg>
    </div>
  ) : (
    <div className="h-4 w-4 rounded-full border-2 border-violet-300 bg-neutral-900 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />
  );

const KeyMilestoneRibbon = () => (
  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 text-[11px] font-bold tracking-widest text-white uppercase shadow-lg shadow-violet-500/40">
    Key Milestone
  </span>
);

const Roadmap: NextPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Roadmap | Ayoub Saad Azzem</title>
      </Head>

      <div className="relative min-h-screen bg-neutral-900">
        <Navbar />
        <Background />

        <div
          className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />

        <header className="mx-auto max-w-3xl px-4 pt-16 pb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-dashed border-violet-400/60 px-4 py-1 text-sm font-semibold text-violet-300">
            Adventure Map
          </span>
          <h1 className="text-4xl font-bold text-[#E8DCFF] md:text-5xl">
            The Road <span className="text-violet-300">Ahead</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-400">
            Scroll to journey through each milestone. Click any image or video
            to zoom in. Watch for the{" "}
            <span className="font-semibold text-violet-300">key milestones</span>{" "}
            — they deserve extra attention.
          </p>
        </header>

        <main className="relative mx-auto max-w-6xl px-4 pb-8">
          <div
            className="pointer-events-none absolute inset-y-0 left-6 w-10 -translate-x-1/2 bg-[length:100%_40px] md:left-1/2 md:w-12 md:bg-[length:100%_48px]"
            style={{
              backgroundImage: lineTile,
              backgroundRepeat: "repeat-y",
            }}
          />

          {roadmap.map((item, i) => {
            const cardOnRight = i % 2 === 1;
            const hasMedia = item.images.length > 0 || item.videos.length > 0;

            if (item.layout === "horizontal") {
            if (!hasMedia) {
              return (
                <div
                  key={item.name}
                  className="relative pb-24 md:grid md:grid-cols-2 md:items-center md:gap-20"
                >
                  <div className="absolute top-10 left-6 z-10 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-y-1/2">
                    <MilestoneDot special={item.special} />
                  </div>

                  <div className="pl-12 md:col-span-2 md:pl-0">
                    <Reveal>
                      <div
                        className={`mx-auto max-w-2xl transition-transform duration-300 hover:rotate-0 ${
                          cardOnRight ? "md:rotate-1" : "md:-rotate-1"
                        }`}
                      >
                        <RoadmapPlaque item={item} index={i} />
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            }

            return (
                <div
                  key={item.name}
                  className={`relative pb-24 ${i % 2 === 0 ? "" : "md:mt-16"}`}
                >
                  <div className="absolute top-10 left-6 z-10 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-y-1/2">
                    <MilestoneDot special={item.special} />
                  </div>

                  <Reveal className="pl-12 md:pl-0">
                    <div
                      className={`relative max-w-4xl transition-transform duration-300 hover:rotate-0 ${
                        cardOnRight
                          ? "md:ml-auto md:rotate-1"
                          : "md:mr-auto md:-rotate-1"
                      }`}
                    >
                      {item.special && (
                        <div className="absolute -inset-3 rounded-3xl bg-violet-600/25 blur-2xl" />
                      )}
                      <div
                        className={`relative flex flex-col overflow-hidden rounded-2xl shadow-lg shadow-black/30 md:flex-row ${
                          item.special
                            ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-700 p-[3px] shadow-[0_0_35px_rgba(167,139,250,0.35)]"
                            : "border-2 border-dashed border-violet-400/40 bg-neutral-800/60 p-2 backdrop-blur"
                        }`}
                      >
                        {item.special && <KeyMilestoneRibbon />}
                        <div
                          className={`${
                            item.special
                              ? "rounded-xl bg-neutral-900/95 p-2 md:w-1/2"
                              : "md:w-1/2"
                          }`}
                        >
                          <RoadmapMedia item={item} compact />
                        </div>
                        <div className="p-2 md:w-1/2 md:p-3">
                          <RoadmapPlaque item={item} index={i} />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            }

            return (
              <div
                key={item.name}
                className={`relative pb-24 md:grid md:grid-cols-2 md:items-start md:gap-20 ${
                  i % 2 === 0 ? "" : "md:mt-16"
                }`}
              >
                <div className="absolute top-10 left-6 z-10 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-y-1/2">
                  <MilestoneDot special={item.special} />
                </div>

                <div
                  className={`mb-6 pl-12 md:mb-0 md:pl-0 ${
                    cardOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Reveal>
                    <RoadmapCard item={item} index={i} />
                  </Reveal>
                </div>

                <div
                  className={`pl-12 md:pl-0 ${
                    cardOnRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Reveal delay={150} className="md:sticky md:top-24">
                    <RoadmapPlaque item={item} index={i} />
                  </Reveal>
                </div>
              </div>
            );
          })}

          <div className="relative pt-2 pb-16">
            <div className="absolute top-0 left-6 h-16 w-px border-l-2 border-dashed border-violet-400/50 md:left-1/2 md:-translate-x-1/2" />
            <svg
              viewBox="0 0 40 40"
              className="absolute top-14 left-6 z-10 h-8 w-8 -translate-x-1/2 text-violet-400 md:left-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M8 8 L32 32 M32 8 L8 32" />
            </svg>
            <div className="flex justify-center pt-24">
              <Reveal>
                <div className="rounded-full border-2 border-dashed border-violet-400/60 bg-neutral-800/60 px-8 py-3 text-center backdrop-blur">
                  <p className="font-semibold text-violet-200">
                    Stay tuned for next adventures
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Roadmap;