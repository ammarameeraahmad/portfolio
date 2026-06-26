"use client";

import { GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  major?: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "SMAIT Ihsanul Fikri",
    degree: "High School",
    major: "Science",
    period: "2022 – 2025",
  },
  {
    id: 2,
    institution: "Universitas Gadjah Mada",
    degree: "Undergraduate",
    major: "Teknik Elektro",
    period: "2025 – Present",
  },
];

const skillsData = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 5 },
  { name: "Javascript", level: 5 },
  { name: "TailwindCSS", level: 5 },
  { name: "Github", level: 5 },
  { name: "ReactJS", level: 5 },
  { name: "NextJS", level: 5 },
  { name: "NodeJS", level: 5 },
  { name: "ExpressJS", level: 5 },
  { name: "MongoDB", level: 4 },
];

export default function SkillsEducation() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const line = lineRef.current;
    const dots = dotsRef.current;
    if (!el || !line || !dots) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(".skills-label", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7 })
        .fromTo(".skills-title", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .fromTo(
          ".skill-dot",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .fromTo(
          ".skill-item",
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7, stagger: 0.12 },
          "-=0.6"
        )
        .fromTo(
          ".skill-row",
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7, stagger: 0.06 },
          "-=0.8"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <span className="text-sm text-white/60 tracking-widest skills-label">
            LEARNING PATH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white skills-title">
            Skills & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="relative">
              <div ref={lineRef} className="absolute left-2 top-0 bottom-0 w-px bg-white origin-top scale-y-0"></div>
              <div ref={dotsRef} className="space-y-8">
                {educationData.map((item) => (
                  <div key={item.id} className="relative pl-8">
                    <div className="skill-dot absolute left-0 w-5 h-5 bg-white rounded-full border-4 border-dark-navy"></div>
                    <div className="skill-item">
                      <h4 className="text-lg font-bold text-white">
                        {item.institution}
                      </h4>
                      <p className="text-accent text-sm font-medium">
                        {item.degree}
                      </p>
                      {item.major && (
                        <p className="text-foreground text-sm mt-1">
                          {item.major}
                        </p>
                      )}
                      <p className="text-white/40 text-sm mt-2">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {skillsData.map((skill) => (
                <div key={skill.name} className="skill-row flex items-center justify-between">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-accent">
                    {"★".repeat(skill.level)}
                    {"☆".repeat(5 - skill.level)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
