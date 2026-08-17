import type { RoadmapItem } from "../data/roadmap";
import LinkIcon from "./LinkIcon";

type Props = {
  item: RoadmapItem;
  index: number;
};

const RoadmapPlaque = ({ item, index }: Props) => {
  return (
    <div
      className={`h-full rounded-2xl border p-6 backdrop-blur transition-all duration-300 ${
        item.special
          ? "border-violet-500/50 bg-gradient-to-br from-violet-500/15 via-neutral-800/60 to-fuchsia-500/10 shadow-[0_0_35px_rgba(167,139,250,0.2)]"
          : "border-neutral-700/60 bg-neutral-800/50 hover:border-violet-400/40"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold tracking-widest text-violet-400/90 uppercase">
          Stop {String(index + 1).padStart(2, "0")}
        </span>
        {item.special && (
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-md shadow-violet-500/40">
            Important
          </span>
        )}
      </div>
      <div className="mt-2 mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-[#E8DCFF]">{item.name}</h3>
        <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">
          {item.date}
        </span>
      </div>
      <p className="mb-5 leading-relaxed text-neutral-400">{item.description}</p>
      {item.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-neutral-600/60 bg-neutral-700/40 px-3 py-1.5 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-200"
            >
              <LinkIcon href={link.href} label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoadmapPlaque;