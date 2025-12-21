import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SystemDiagramSVG from "@/components/SystemDiagramSVG";
import { getProjectById } from "@/content/projects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "driving-behavior-app" },
    { slug: "researchlink" },
    { slug: "scholarscan" },
  ];
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);
  
  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <CaseStudyLayout title={project.title} tagline={project.tagline}>
      <div className="space-y-16">
        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Problem */}
        <section className="rounded-xl border border-border bg-muted/20 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Problem</h2>
          <p className="text-foreground leading-relaxed text-lg">{caseStudy.problem}</p>
        </section>

        {/* Constraints */}
        <section className="rounded-xl border border-border bg-muted/20 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Constraints</h2>
          <ul className="space-y-4">
            {caseStudy.constraints.map((constraint, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl font-bold">•</span>
                <span className="text-foreground flex-1 leading-relaxed">{constraint}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Solution</h2>
          <p className="text-foreground leading-relaxed mb-8 text-lg">{caseStudy.solution}</p>
          <SystemDiagramSVG 
            title="System Design Snapshot" 
            imageSrc={
              project.id === "researchlink" ? "/images/researchlink-diagram.jpg" :
              project.id === "scholarscan" ? "/images/scholarscan-diagram.jpg" :
              undefined
            }
            projectId={project.id}
          />
        </section>

        {/* Key Engineering Challenges */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Key Engineering Challenges
          </h2>
          <div className="space-y-6">
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 py-4 rounded-r-lg bg-muted/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {challenge.challenge}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.approach}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results/Impact */}
        <section className="rounded-xl border border-border bg-gradient-to-br from-accent/10 to-purple-500/10 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
          <p className="text-foreground leading-relaxed text-lg">{caseStudy.results}</p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-foreground backdrop-blur-sm hover:border-accent/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
              >
                <Github size={20} />
                GitHub
                <ExternalLink size={16} />
              </a>
            )}
            {caseStudy.linkedinUrl && (
              <a
                href={caseStudy.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
              >
                <Linkedin size={20} />
                LinkedIn Post
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
}

