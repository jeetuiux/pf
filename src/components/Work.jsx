"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION } from "@/app/work/content";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    num: "01",
    label: "Enterprise Mobile Operations Platform",
    title: "Avocet Mobile Application",
    description:
      "Designed enterprise mobile experience that simplifies complex field workflows, improves data visibility, and supports seamless online & offline operations.",
    href: "/projects?cat=website",
  },
  {
    num: "02",
    label: "Working hours tracker",
    title: "Time Booking Application",
    description:
      "A character-driven UX story that explores the people, problems, and design decisions behind a simpler time-booking experienc",
    
    href: "/projects?cat=design",
  },
  {
    num: "03",
    label: "Avalon User Management",
    title: "Enterprise User Management",
    description:
      "A focused enterprise UX case study exploring how user management workflows can be simplified through clearer information architecture, intuitive interactions, and scalable design patterns.",
    
    href: "/projects?cat=video",
  },

  {
    num: "04",
    label: "Automotive Testing & Validation UX",
    title: "Automotive Validation & Data Management",
    description:
      "A data-driven enterprise platform for automotive validation, vehicle testing, and test data management—designed to help engineering teams organize, analyze, and validate complex vehicle data.",
    
    href: "/projects?cat=video",
  },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="work-section"
      className="relative w-full min-h-screen px-10 md:px-20 pt-64 pb-72 flex flex-col justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Header and Filters */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
            {SECTION.label}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {SECTION.heading}
            </h2>

            {/* Category pills — decorative only */}
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {["Website", "Photo / Poster Design", "Video"].map((cat) => (
                <Link
                  key={cat}
                  href={`/projects${cat !== "All" ? `?cat=${cat.toLowerCase().split(" ")[0]}` : ""}`}
                  className="px-4 py-2 rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-transparent text-white/40 border border-white/10 hover:text-white hover:border-white/30"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Category Cards */}
        <div className="flex flex-col">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.num}
              href={cat.href}
              className="work-item group relative flex items-start gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
            >
              {/* Left orange accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              {/* Number */}
              <div className="pl-3 shrink-0 w-8 pt-1">
                <span className="font-mono text-[10px] text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">
                  {cat.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                  {cat.label}
                </p>
                <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter mb-3 group-hover:text-white transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-2xl transition-colors duration-300">
                  {cat.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] text-white/20 group-hover:text-white/55 tracking-widest uppercase transition-colors duration-200">
                  View Projects
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>

              {/* Icon */}
              <div className="hidden md:flex shrink-0 items-center pt-2 text-white">
                {cat.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
