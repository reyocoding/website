import type { RoadmapItem } from "../data/roadmap";
import RoadmapMedia from "./RoadmapMedia";

type Props = {
  item: RoadmapItem;
  index: number;
};

const RoadmapCard = ({ item, index }: Props) => {
  const tilt = index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1";

  return (
    <div className={`relative transition-transform duration-300 hover:rotate-0 ${tilt}`}>
      {item.special && (
        <div className="absolute -inset-3 rounded-3xl bg-violet-600/25 blur-2xl" />
      )}

      <div
        className={`relative rounded-2xl shadow-lg shadow-black/30 ${
          item.special
            ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-700 p-[3px]"
            : "border-2 border-dashed border-violet-400/40 bg-neutral-800/60 p-2 backdrop-blur"
        }`}
      >
        {item.special && (
          <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 text-[11px] font-bold tracking-widest text-white uppercase shadow-lg shadow-violet-500/40">
            Key Milestone
          </span>
        )}

        <div className={`rounded-xl ${item.special ? "bg-neutral-900/95 p-2" : ""}`}>
          <RoadmapMedia item={item} />
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;