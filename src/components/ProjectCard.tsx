"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/content/projects";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const iconNameMap: Record<string, "smartphone" | "globe" | "brain"> = {
  "driving-behavior-app": "smartphone",
  "researchlink": "globe",
  "scholarscan": "brain",
};

const gradientMap: Record<string, string> = {
  "driving-behavior-app": "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  "researchlink": "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  "scholarscan": "from-emerald-500/20 via-green-500/20 to-lime-500/20",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const iconName = iconNameMap[project.id] || "globe";
  const gradient = gradientMap[project.id] || "from-blue-500/20 via-purple-500/20 to-pink-500/20";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/case-studies/${project.id}`}>
        <div className="group relative overflow-hidden rounded-xl border border-border bg-muted/30 transition-all hover:border-accent/50 hover:bg-muted/50 hover:shadow-lg hover:shadow-accent/10">
          <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-background/50 border border-border/50 text-muted-foreground backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
              <span>View case study</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

