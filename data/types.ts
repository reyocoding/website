export type RoadmapLink = {
  label: string;
  href: string;
};

export type RoadmapVideo = {
  src: string;
  poster?: string;
};

export type RoadmapItem = {
  name: string;
  date: string;
  description: string;
  images: string[];
  videos: RoadmapVideo[];
  links: RoadmapLink[];
  special?: boolean;
  layout?: "horizontal";
};
