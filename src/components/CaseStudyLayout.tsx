import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyLayoutProps {
  children: ReactNode;
  title: string;
  tagline: string;
}

export default function CaseStudyLayout({ children, title, tagline }: CaseStudyLayoutProps) {
  return (
    <article className="min-h-screen">
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to case studies
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{tagline}</p>
        </div>
      </div>
      
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {children}
      </div>
    </article>
  );
}

