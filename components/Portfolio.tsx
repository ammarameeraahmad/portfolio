"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fallbackPortfolio } from "@/data/fallbackPortfolio";
import type { Project } from "@/lib/googleSheets";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  initialProjects?: Project[];
}

export default function Portfolio({ initialProjects }: PortfolioProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [projects] = useState<Project[]>(initialProjects || fallbackPortfolio);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(".portfolio-label", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7 })
        .fromTo(".portfolio-title", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(
          ".portfolio-card",
          { clipPath: "inset(0 100% 0 0)", opacity: 0, y: 30 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <span className="text-sm text-white/60 tracking-widest portfolio-label">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white portfolio-title">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <PortfolioCard key={item.title + index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  item: Project;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="portfolio-card group bg-dark-navy-light border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_40px_-15px_rgba(124,108,242,0.25)]">
      <div className="relative h-48 overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white/40 text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          {item.url && item.url !== "#" ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          ) : null}
        </div>
        <p className="text-foreground text-sm mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
