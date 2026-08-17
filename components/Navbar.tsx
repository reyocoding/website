import Link from "next/link";
import { useRouter } from "next/router";
import { withBase } from "../lib/base";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" legacyBehavior={false} className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/favicon.svg")} width="28" height="28" alt="logo" />
          <span className="text-lg font-bold text-[#E8DCFF]">
            Ayoub <span className="text-violet-300">Saad Azzem</span>
          </span>
        </Link>

        <div className="flex gap-1 rounded-lg bg-neutral-800/60 p-1">
          {tabs.map((tab) => {
            const active = router.pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                legacyBehavior={false}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-violet-500 text-white shadow-md shadow-violet-500/30"
                    : "text-neutral-300 hover:bg-neutral-700/60 hover:text-white"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
