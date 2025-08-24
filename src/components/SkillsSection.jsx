import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, Layers, Server, Wrench, Database, Cpu, Rocket } from "lucide-react";

 
const skillsSeed = [
  { name: "React", level: 90, category: "Frontend", icon: <Code2 /> },
  { name: "Next.js", level: 85, category: "Frontend", icon: <Rocket /> },
  { name: "JavaScript", level: 80, category: "Frontend", icon: <Layers /> },
  { name: "Tailwind CSS", level: 88, category: "Frontend", icon: <Layers /> },
  { name: "Node.js", level: 82, category: "Backend", icon: <Server /> },
  { name: "Express", level: 78, category: "Backend", icon: <Server /> },
  { name: "MongoDB", level: 75, category: "Database", icon: <Database /> },
//   { name: "PostgreSQL", level: 68, category: "Database", icon: <Database /> },
  { name: "Git", level: 86, category: "Tools", icon: <Wrench /> },
//   { name: "Docker", level: 60, category: "Tools", icon: <Wrench /> },
//   { name: "C++", level: 55, category: "Languages", icon: <Cpu /> },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const shimmer = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: { repeat: Infinity, duration: 1.4, ease: "linear" },
  },
};

export default function SkillsSection({ title = "Skills", skills = skillsSeed }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [view, setView] = useState("cards"); // cards | bars

  const categories = useMemo(() => {
    const set = new Set(["All", ...skills.map((s) => s.category)]);
    return Array.from(set);
  }, [skills]);

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchesCategory = active === "All" || s.category === active;
      const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [skills, active, query]);

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-14">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="mx-auto h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/30 via-emerald-400/20 to-fuchsia-400/20 opacity-70" />
      </div>

      <header className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground/80">
            Filter, search, and watch the skills animate into view.
          </p>
        </div>

        <div className="flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:items-center">
          {/* Search */}
          <label className="group relative flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            <Search className="h-4 w-4 opacity-70" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
              placeholder="Search skills…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          {/* View toggle */}
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 text-xs backdrop-blur">
            {["cards", "bars"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={
                  "rounded-xl px-3 py-2 font-medium transition " +
                  (view === v
                    ? "bg-white text-black shadow"
                    : "text-white/70 hover:bg-white/10")
                }
              >
                {v === "cards" ? "Cards" : "Bars"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Category pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              "rounded-full border px-3 py-1.5 text-xs font-medium transition " +
              (active === cat
                ? "border-white bg-white text-black shadow"
                : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {view === "cards" ? (
        <CardsGrid skills={filtered} />
      ) : (
        <BarsList skills={filtered} />
      )}
    </section>
  );
}

function CardsGrid({ skills }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence initial={false}>
        {skills.map((s) => (
          <motion.article
            key={s.name}
            variants={item}
            layout
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-shadow hover:shadow-xl"
          >
            {/* Shine */}
            <motion.span
              aria-hidden
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="pointer-events-none absolute -inset-x-40 -top-8 h-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black">
                {s.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-tight">{s.name}</h3>
                <p className="text-xs text-white/60">{s.category}</p>
              </div>
              <span className="ml-auto text-sm font-semibold text-white/90">{s.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>

            {/* Subtle badges */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Clean code", "Best practices", "Performance"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function BarsList({ skills }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
    >
      <AnimatePresence initial={false}>
        {skills.map((s) => (
          <motion.li
            key={s.name}
            variants={item}
            layout
            className="p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-black">
                {s.icon}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight">{s.name}</p>
                <p className="text-xs text-white/60">{s.category}</p>
              </div>
              <span className="ml-auto text-sm font-semibold text-white/90">{s.level}%</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
