"use client";

import { Mail, FolderGit, Phone } from "lucide-react";
import { useEffect, useRef } from "react";




import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

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

      tl.fromTo(".contact-heading", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8 })
        .fromTo(".contact-desc", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(".contact-info", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(".contact-form", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8 }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white contact-heading">Contact</h2>
          <p className="text-lg text-foreground max-w-2xl contact-desc">
            Interested in working together? Feel free to reach out through email or
            social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 contact-info">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="flex flex-wrap justify-start gap-8">
                <a
                  href="https://wa.me/62895339449359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-foreground hover:text-accent transition-colors"
                >
                  <Phone size={26} />
                  <span className="text-sm mt-2">WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/ammrmeera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-foreground hover:text-accent transition-colors"
                >
                  {/* instagram icon unavailable in lucide version */}
                  <span className="text-[26px] leading-none">📷</span>
                  <span className="text-sm mt-2">Instagram</span>
                </a>


                <a
                  href="mailto:ammarameeraahmad@mail.ugm.ac.id"
                  className="flex flex-col items-center text-foreground hover:text-accent transition-colors"
                >
                  <Mail size={26} />
                  <span className="text-sm mt-2">Email</span>
                </a>

                <a
                  href="https://github.com/ammarameeraahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-foreground hover:text-accent transition-colors"
                >
                  <FolderGit size={26} />
                  <span className="text-sm mt-2">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form" />
        </div>
      </div>
    </section>
  );
}
