import type { RoadmapLink, RoadmapItem, RoadmapVideo } from "./types";

import ctramStatisticsJob from "../public/Road map/01-ctram-statistics-job/info.json";
import outsideTrip from "../public/Road map/02-outside-trip/info.json";
import icfmc from "../public/Road map/03-icfmc/info.json";
import firstNovember from "../public/Road map/04-first-november/info.json";
import aiDay from "../public/Road map/05-ai-day/info.json";
import teamProject from "../public/Road map/06-team-project/info.json";
import hackathon from "../public/Road map/07-hackathon/info.json";
import studentDay from "../public/Road map/08-student-day/info.json";
import barryDay from "../public/Road map/09-barry-day/info.json";
import pitchingDay from "../public/Road map/10-pitching-day/info.json";
import swag from "../public/Road map/11-swag/info.json";
import graduation from "../public/Road map/12-graduation/info.json";
import tunisiaTrip from "../public/Road map/13-Tunisa-trip/info.json";
import dentalApp from "../public/Road map/14-dental-app/info.json";

export type { RoadmapLink, RoadmapItem, RoadmapVideo };

export const roadmap: RoadmapItem[] = [
  ctramStatisticsJob,
  outsideTrip,
  icfmc,
  firstNovember,
  aiDay,
  teamProject,
  hackathon,
  studentDay,
  barryDay,
  pitchingDay,
  swag,
  graduation,
  tunisiaTrip,
  dentalApp,
];
