import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Case Studies | Portfolio",
  description: "Detailed case studies of software engineering projects",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Deep dives into the problems I've solved, the constraints I worked within, 
            and the engineering decisions that shaped each project.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project) => {
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border group-hover:border-accent/50 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-muted-foreground backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${project.id}`}
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium group/link"
                  >
                    Read case study
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

