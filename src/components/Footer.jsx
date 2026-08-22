"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { trackClick } from "@/lib/trackClick";



const SOCIAL_KEYS = [
  { key: "instagram", label: "Instagram" },
  { key: "github",    label: "GitHub"    },
  { key: "linkedin",  label: "LinkedIn"  },
  { key: "twitter",   label: "X"         },
  { key: "youtube",   label: "YouTube"   },
  { key: "behance",   label: "Behance"   },
  { key: "dribbble",  label: "Dribbble"  },
  { key: "whatsapp",  label: "WhatsApp"  },
];

export default function Footer() {
  const ref = useRef(null);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    fetch("/api/settings?key=social_links")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data?.value) return;
        const active = SOCIAL_KEYS.filter(s => data.value[s.key]?.trim()).map(s => ({
          label: s.label,
          href:  data.value[s.key].trim(),
        }));
        setSocials(active);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(48px)";
    el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";

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
    <footer ref={ref} className="relative border-t border-white/8 px-10 md:px-20 py-16">

      {/* top row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">

        {/* name + tagline */}
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

      {/* divider */}
      <div className="w-full h-px bg-white/8 mb-8" />

      {/* bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p
          className="text-[10px] text-white/20 tracking-widest"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: "italic" }}
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
