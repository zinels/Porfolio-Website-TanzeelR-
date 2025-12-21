import Link from "next/link";
import { Github, Linkedin, Mail, Quote } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quote = {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Tanzeel Rahman</h3>
            <p className="text-sm text-muted-foreground">
              Turning coffee into code, one commit at a time. ☕ → 💻
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/zinels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanzinels/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tanz.riyan@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Quote size={16} className="text-accent" />
              Quote
            </h3>
            <blockquote className="text-sm text-muted-foreground italic mb-2">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <p className="text-xs text-muted-foreground/70">— {quote.author}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

