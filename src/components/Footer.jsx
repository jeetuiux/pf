"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(48px)";
    el.style.transition =
      "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative border-t border-white/8 px-10 md:px-20 py-16"
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
        <div>
          <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
            Creative Designer
          </p>

          <h2
            className="font-black tracking-tighter leading-[0.85]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            <span className="block text-white">Indrajeet</span>
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/8 mb-8" />

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p
          className="text-[10px] text-white/20 tracking-widest"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontStyle: "italic",
          }}
        >
          indrajeetjadhav8107gmail.com
        </p>

        <p className="text-[10px] text-white/15 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Indrajeet Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}