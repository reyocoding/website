import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import Background from "../components/Background";
import { withBase } from "../lib/base";

const profile = {
  name: "Ayoub Saad Azzem",
  firstName: "Ayoub",
  lastName: "Saad Azzem",
  role: "Finance Management Student · Data Analyst",
  tagline:
    "Finance management student at Sétif 1 University who loves turning raw data into decisions — with Python, SQL, and a growing obsession with machine learning.",
  email: "saadazzemayoub@gmail.com",
  location: "Sétif, Algeria",
  github: "https://github.com/reyocoding",
  cv: "/ayoub_saad_azzem_FlowCV_Resume_2026-08-15.pdf",
  avatar: "/profile.jpg",
};

const aboutHighlights = [
  "CGPA 3.38/4 — Bachelor in Finance Management, Sétif 1 University",
  "Speaking Class Manager @ Economica Club",
  "5th place — Reverse Engineering Hackathon (30h, team Ecominds)",
];

const projects = [
  {
    title: "DentalCare OS",
    description:
      "Production-grade dental clinic operating system — patients, smart multi-session scheduling, interactive tooth charts, financials and an encrypted document vault, with a full auth + RBAC + audit-trail security layer.",
    tags: ["FastAPI", "React 19", "TypeScript", "SQLite"],
    repo: "https://github.com/reyocoding/dentalcare-os",
    image: "/projects/dentalcare-os.png",
  },
  {
    title: "Electric Vehicle Spec Analysis",
    description:
      "Analyzed EV specifications to explore the relationships between battery capacity, range, efficiency and price — then built a predictive model that estimates driving range from technical features.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    repo: "https://github.com/reyocoding/Electric-vehicle-spec-analysis",
    image: "/projects/electric-vehicle-spec-analysis.png",
  },
  {
    title: "Personality Behavior Study",
    description:
      "A data-driven study of 2,900 people comparing extroverts and introverts — alone time, stage fear, social events and posting habits — with visualizations and statistical summaries in Excel.",
    tags: ["Data Analysis", "Excel", "Statistics", "EDA"],
    repo: "https://github.com/reyocoding/personality-behavior-study",
    image: "/projects/personality-behavior-study.png",
  },
  {
    title: "Coin Year Detector",
    description:
      "My first machine learning experiment — a custom CNN trained on self-captured images of Algerian 5DZ coins to detect the mint year, from 7% to 83% accuracy.",
    tags: ["TensorFlow", "Keras", "CNN", "Computer Vision"],
    repo: "https://github.com/reyocoding/coin-year-detector",
    image: "/projects/coin-year-detector.png",
  },
];

const skillGroups = [
  {
    title: "Data Analysis",
    skills: ["Microsoft Excel", "SPSS", "Power BI", "Tableau"],
  },
  {
    title: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Project Management",
    skills: ["Jira", "Waterfall", "SCRUM"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Jupyter Notebook", "Linux"],
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B1" },
  { name: "French", level: "A2" },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${profile.name} | Portfolio`}</title>
      </Head>

      <div className="relative min-h-screen bg-neutral-900 text-[#E8DCFF]">
        <Navbar />
        <Background />

        <section className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 pb-24 text-center md:pt-28">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-60 blur-lg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(profile.avatar)}
                alt={profile.name}
                width="128"
                height="128"
                className="relative rounded-full border-2 border-neutral-700 object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-5xl font-bold md:text-6xl">
              {profile.firstName}{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-lg font-medium text-violet-300">
              {profile.role}
            </p>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-neutral-400">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-violet-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:bg-violet-400"
              >
                View My Work
              </a>
              <a
                href={withBase(profile.cv)}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-neutral-600 bg-neutral-800/60 px-6 py-2.5 font-semibold text-neutral-200 transition-all duration-200 hover:border-violet-400/60 hover:text-white"
              >
                Download CV
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg border border-neutral-600 bg-neutral-800/60 px-6 py-2.5 font-semibold text-neutral-200 transition-all duration-200 hover:border-violet-400/60 hover:text-white"
              >
                Get In Touch
              </a>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-24">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <p className="mt-6 leading-relaxed text-neutral-400">
                  I am a Finance Management student at Sétif 1 University —
                  Ferhat Abbas — based in {profile.location}. My studies gave me
                  statistics, data analysis and project management; my curiosity
                  gave me Python, SQL and machine learning.
                </p>
                <p className="mt-4 leading-relaxed text-neutral-400">
                  Beyond the classroom, I am the Speaking Class Manager at the
                  Economica Club, where I organized an AI conference day, helped
                  run the ICFMC, and hacked 30 hours straight at the Reverse
                  Engineering Hackathon with my team Ecominds.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="rounded-full border border-neutral-700/70 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-300"
                    >
                      {lang.name}{" "}
                      <span className="text-violet-300">· {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                {aboutHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl border border-neutral-700/60 bg-neutral-800/50 px-5 py-4"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                    <span className="text-neutral-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-24">
          <Reveal>
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 150}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-800/50 transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBase(project.image)}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-neutral-300 transition-colors hover:text-violet-300"
                      >
                        Source →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-24">
          <Reveal>
            <h2 className="text-3xl font-bold">Toolbox</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 100}>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-violet-400/90 uppercase">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-700/70 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-violet-400/60 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-24">
          <Reveal>
            <div className="rounded-3xl border border-neutral-700/60 bg-gradient-to-br from-neutral-800/80 to-neutral-900 p-10 text-center backdrop-blur">
              <h2 className="text-3xl font-bold">Let&apos;s build something</h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-neutral-400">
                Got a project, an internship or a data problem in mind? My inbox
                is always open — I will get back to you.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-lg bg-violet-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:bg-violet-400"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-neutral-600 bg-neutral-800/60 px-5 py-2.5 font-semibold text-neutral-300 transition-all duration-200 hover:border-violet-400/60 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={withBase(profile.cv)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-neutral-600 bg-neutral-800/60 px-5 py-2.5 font-semibold text-neutral-300 transition-all duration-200 hover:border-violet-400/60 hover:text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
          <div className="flex items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/favicon.svg")} width="20" height="20" alt="logo" />
            <span>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;