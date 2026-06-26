import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/googleSheets";

interface PortfolioCardProps {
  item: Project;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group bg-dark-navy-light border border-white/10 rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          {item.url && item.url !== "#" ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
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