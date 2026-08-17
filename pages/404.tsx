import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

const NotFound: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900 text-[#E8DCFF]">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-32 pb-24 text-center">
        <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-7xl font-bold text-transparent">
          404
        </p>
        <p className="mt-6 text-xl font-semibold text-neutral-300">
          This page wandered off
        </p>
        <p className="mt-2 text-neutral-500">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          legacyBehavior={false}
          className="mt-8 rounded-lg bg-violet-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:bg-violet-400"
        >
          Back Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;