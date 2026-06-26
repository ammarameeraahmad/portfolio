"use client";

import { useEffect, useRef } from "react";
import { Mail, Send, FolderGit } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const startedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || startedRef.current) return;
    startedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(
        [
          ".nav-item",
          ".resume-button",
          ".hero-label",
          ".hero-title",
          ".hero-desc",
          ".social-icon",
          ".profile-image",
          ".profile-ring",
        ],
        {
          opacity: 0,
          visibility: "hidden",
        }
      );

      gsap.set(".logo-aaa", {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      });

      tl.to(".logo-aaa", {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 2,
        ease: "power3.out",
      });

      // Pastikan initial wipe state
      tl.set(
        [
          ".nav-item",
          ".resume-button",
          ".hero-label",
          ".hero-title",
          ".hero-desc",
          ".social-icon",
          ".profile-image",
        ],
        {
          clipPath: "inset(0 100% 0 0)",
        }
      );

      // Setelah AAA selesai: semua elemen selain AAA muncul bareng (tapi tetap dari kondisi hidden)
      tl.to(
        [
          ".nav-item",
          ".resume-button",
          ".hero-label",
          ".hero-title",
          ".hero-desc",
          ".social-icon",
          ".profile-image",
        ],
        {
          opacity: 1,
          visibility: "visible",
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
          ease: "power3.out",
        },
        ">+=0.1"
      );

      // Ring muncul mengikuti foto (halus, bersamaan sedikit setelahnya)
      tl.to(
        ".profile-ring",
        {
          opacity: 1,
          visibility: "visible",
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        ">-=0.3"
      );
    });


    return () => ctx.revert();
  }, []);



  const socials = [
    { icon: <Send size={24} />, href: "https://www.instagram.com/ammrmeera/", label: "Instagram" },
    { icon: <Mail size={24} />, href: "mailto:ammarameeraahmad@mail.ugm.ac.id", label: "Email" },
    { icon: <FolderGit size={24} />, href: "https://github.com/ammarameeraahmad", label: "GitHub" },
  ];

  return (
    <section className="min-h-[90vh] flex items-center pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="flex items-center gap-4 hero-label"
            >
              <div className="w-12 h-px bg-white"></div>
              <span className="text-white tracking-widest text-sm font-medium">
                MY NAME IS
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white hero-title"
            >
              Ammar Ameera <span className="text-accent">Ahmad</span>
            </h1>

            <p
              className="text-lg text-foreground max-w-md leading-relaxed hero-desc"
            >
              An Electrical Engineering student at Universitas Gadjah Mada exploring the worlds of web development and data analysis.
            </p>

            <div className="flex items-center gap-6 pt-4 hero-social">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>


          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div
                className="hero-glow hero-ring absolute -inset-6 rounded-full bg-accent opacity-20 blur-xl profile-ring"
                style={{ transform: "scale(0.6)" }}
              ></div>
              <div
                className="hero-glow hero-ring absolute -inset-4 rounded-full border-2 border-accent profile-ring"
                style={{ transform: "scale(0.6)" }}
              ></div>
              <div
                className="hero-photo relative w-full h-full rounded-full overflow-hidden border-4 border-white profile-image"
              >
                <Image
                  src="/foto.webp"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
