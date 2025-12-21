import Link from "next/link";
import { Download, Github, Linkedin, Mail, Quote, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import ProofChips from "@/components/ProofChips";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import AnimatedCharacter from "@/components/AnimatedCharacter";
import AnimatedEducationBackground from "@/components/AnimatedEducationBackground";
import { projects } from "@/content/projects";

export default function Home() {
  const proofItems = [
    "Backend Development",
    "Full-Stack Applications",
    "System Design",
    "API Development",
    "Data Processing",
    "Mobile Development"
  ];

  const experience = [
    {
      title: "Software Engineer Intern (Applied ML Systems)",
      organization: "Moffitt Cancer Center",
      period: "May 2025 - Dec 2025",
      description: "Engineering modular data processing pipelines for machine learning systems. Building reusable preprocessing and validation utilities, automating end-to-end pipeline execution, and optimizing batch processing workflows.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Pipelines", "Data Processing"]
    },
    {
      title: "Software Engineer (Research Applications)",
      organization: "University of South Florida",
      period: "Jan 2025 - Present",
      description: "Developing and shipping production-ready features for a Unity-based Android application used in behavioral research. Engineering robust GPS, API, and state-management logic, improving application reliability and iteration speed.",
      tags: ["Unity", "C#", "Android SDK", "GPS APIs", "Mobile Development"]
    },
    {
      title: "Software Developer Intern",
      organization: "TCL - Telecommunications Ltd.",
      period: "May 2024 - Aug 2024",
      description: "Built and maintained Node.js and Express.js backend services. Designed and implemented REST API endpoints and PostgreSQL schemas. Containerized services with Docker and implemented CI/CD pipelines. Optimized SQL queries and refactored service logic.",
      tags: ["Node.js", "Express.js", "PostgreSQL", "Docker", "CI/CD", "REST APIs"]
    },
    {
      title: "Student Assistant (Data & Systems Support)",
      organization: "University of South Florida – Electrical Engineering Department",
      period: "Jan 2025 - Aug 2025",
      description: "Supported data organization, analysis, and tooling for large-scale engineering education studies involving 500+ data points. Contributed to systems that enable research insights and data-driven decision making.",
      tags: ["Data Analysis", "Systems Support", "Research", "Data Processing"]
    },
    {
      title: "Software Engineering Intern (Web Applications)",
      organization: "Cologne University of Applied Sciences",
      period: "Oct 2021 - Apr 2022",
      description: "Contributed to the development of a web-based system by performing data standardization, defining software requirements, and supporting backend/frontend integration. Gained experience in full-stack development and agile methodologies.",
      tags: ["Web Development", "Backend", "Frontend", "Data Standardization", "Agile"]
    },
    {
      title: "Student Research Assistant (Data Analysis)",
      organization: "Dr. Ahsanul Kabir (Professor)",
      period: "Jan 2021 - Jul 2021",
      description: "Supported data aggregation, cleaning, and visualization for large-scale transport emissions analysis projects. Worked with research tools and methodologies to extract meaningful insights from complex datasets.",
      tags: ["Data Analysis", "Research", "Data Visualization", "Data Cleaning"]
    }
  ];

  const selectedProjects = projects.slice(0, 3);

  const education = {
    degree: "Bachelor's Degree in Computer Science with Honors",
    university: "University of South Florida",
    graduation: "May 2027",
    gpa: "3.75/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Systems Programming",
      "Database Systems",
      "AI"
    ]
  };

  const leadership = [
    {
      title: "Resident Assistant",
      organization: "University of South Florida",
      period: "Aug 2024 - Present",
      description: "Supporting a residential community of 50+ students by resolving conflicts, coordinating resources, and addressing issues. Balancing leadership responsibilities with academic and technical workload.",
      tags: ["Leadership", "Community Building", "Conflict Resolution"]
    },
    {
      title: "Co-founder (Non-Profit Organization)",
      organization: "Support in Crisis",
      period: "April 2020 - Present",
      description: "Initiated and co-founded an impactful community service platform in response to the COVID-19 pandemic. Managed 50 volunteers across specialized teams, orchestrated distribution of food packages to over 10,000 underprivileged individuals during lockdown, and raised $3000 through community engagement.",
      tags: ["Non-Profit", "Community Service", "Leadership", "Volunteer Management"]
    },
    {
      title: "Student Coordinator",
      organization: "Bangladesh Student Association (BSA), USF",
      period: "June 2024 - Present",
      description: "Acted as the primary point of contact for inquiries, providing guidance and a welcoming environment for students and families. Led 15 volunteers in organizing &ldquo;Shondhar Adda,&rdquo; the inaugural fall event. Oversaw 21 dance performances and collaborated with e-board partners to make &ldquo;Mock Gaye Holud&rdquo; a successful cultural event for over 350 audience members.",
      tags: ["Event Management", "Student Leadership", "Cultural Events", "Volunteer Coordination"]
    },
    {
      title: "Sports Coordinator",
      organization: "Bangladesh Student Association (BSA), USF",
      period: "June 2024 - Present",
      description: "Coordinated the association's first sports tournament, engaging over 50 participants. Collaborated with team members to ensure efficient operations and participant satisfaction, fostering community engagement through sports.",
      tags: ["Event Coordination", "Sports Management", "Team Collaboration"]
    }
  ];

  const quote = {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-16">
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">Software Engineer Intern</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Building Real
            <span className="gradient-text"> Software Systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Focused on backend + application development. I ship real software systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="https://github.com/zinels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanzinels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:tanz.riyan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
            >
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section id="quote" className="py-16 border-y border-border bg-muted/10">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-8 h-8 text-accent mx-auto mb-4 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-4 italic">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p className="text-muted-foreground">— {quote.author}</p>
        </div>
      </Section>

      {/* Proof Strip */}
      <Section id="proof" className="py-12 border-y border-border">
        <ProofChips items={proofItems} />
      </Section>

      {/* Featured Solutions */}
      <Section id="projects">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real software systems I&apos;ve built. Each project solves a specific problem with thoughtful engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
          >
            View all case studies
          </Link>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="bg-muted/20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and software engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[400px] rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted to-muted/50 order-1 lg:order-1">
            <AnimatedEducationBackground />
          </div>
          <div className="order-2 lg:order-2 flex items-center min-h-[400px]">
            <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-8 w-full">
              <h3 className="text-2xl font-bold text-foreground mb-2">{education.degree}</h3>
              <p className="text-lg text-accent mb-4">{education.university}</p>
              <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                <span>Expected: {education.graduation}</span>
                <span>•</span>
                <span>GPA: {education.gpa}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="experience">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building software systems and solving real problems.
          </p>
        </div>
        <Timeline items={experience} />
      </Section>

      {/* Leadership Experience */}
      <Section id="leadership" className="bg-muted/20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leading communities and making an impact beyond code.
          </p>
        </div>
        <Timeline items={leadership} />
      </Section>

      {/* Other Projects */}
      <Section id="other-projects" className="bg-muted/20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Other Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Additional projects showcasing diverse skills and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pacman Agent (A*, UCS, Multi-Agent)",
              description: "Implemented multiple intelligent Pacman agents using BFS, DFS, UCS, A*, and heuristic-guided search strategies. Developed evaluation functions and decision-making logic enabling Pacman to plan optimal paths and avoid adversarial ghosts.",
              tech: ["Python", "AI", "Search Algorithms", "A*", "UCS"],
              github: "https://github.com/zinels"
            },
            {
              title: "Reddit Scraper",
              description: "A Python-based web scraper that extracts data from Reddit posts for analysis.",
              tech: ["Python", "BeautifulSoup", "Pandas"],
              github: "https://github.com/zinels"
            },
            {
              title: "Iris Flower Classification",
              description: "Built a machine learning model to classify Iris flower species with 94% accuracy.",
              tech: ["Python", "PyTorch", "Scikit-learn", "Streamlit"],
              github: "https://github.com/zinels"
            },
            {
              title: "FacultyFinder",
              description: "A full-stack web platform for reviewing and rating professors in private universities.",
              tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
              github: "https://github.com/zinels"
            },
            {
              title: "Zinels Chatbot",
              description: "A chatbot built using OpenAI's GPT-3.5 Turbo to provide insights on soccer and cricket.",
              tech: ["Python", "OpenAI", "Gradio"],
              github: "https://github.com/zinels"
            },
            {
              title: "Arduino Robot",
              description: "An Arduino-based robot designed for obstacle detection and avoidance.",
              tech: ["Arduino", "C++", "Ultrasonic Sensor"],
              github: "https://github.com/zinels"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-muted/50 border border-border/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
              >
                <Github size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-muted/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m a Software Engineer Intern focused on building production-grade backend systems and full-stack applications. 
                I ship real software that solves real problems—from ML pipelines at Moffitt Cancer Center to mobile research applications at USF.
              </p>
              <p>
                My expertise spans backend development, API design, mobile applications, and data processing systems. 
                I&apos;m passionate about writing clean, maintainable code and building systems that scale.
              </p>
              <p>
                Beyond code, I lead student organizations, manage volunteer teams, and contribute to community initiatives—balancing technical excellence with leadership impact.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[400px] rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted to-muted/50 order-1 lg:order-2">
            <AnimatedCharacter />
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-muted/20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a conversation about software engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tanz.riyan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/tanzinels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/zinels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 hover:border-accent/50 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

