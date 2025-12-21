export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: {
    problem: string;
    constraints: string[];
    solution: string;
    challenges: Array<{
      challenge: string;
      approach: string;
    }>;
    results: string;
    techStack: string[];
    demoVideo?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  };
}

export const projects: Project[] = [
  {
    id: "driving-behavior-app",
    title: "Driving Behavior Research App",
    tagline: "Real-time GPS-based speed monitoring and data collection",
    description: "Android application built with Unity/C# for real-time GPS speed tracking, speed-limit detection, intelligent muting logic, and comprehensive data logging for research purposes.",
    image: "/images/driving-app.jpg",
    tags: ["Unity", "C#", "Android", "GPS", "Data Logging"],
    caseStudy: {
      problem: "Research teams needed a reliable mobile application to collect real-time driving behavior data, including GPS speed, speed-limit detection, and contextual muting logic for accurate data analysis.",
      constraints: [
        "Must run efficiently on Android devices with minimal battery drain",
        "GPS accuracy requirements for research-grade data",
        "Real-time processing of speed and location data",
        "Intelligent muting logic to handle edge cases",
        "Private repository - code cannot be shared publicly"
      ],
      solution: "Developed a Unity-based Android application that leverages native GPS APIs for precise location tracking. Implemented real-time speed calculation algorithms, integrated speed-limit detection through map data, and built a sophisticated muting logic system that handles various driving scenarios. The app logs all data locally with timestamps for later analysis.",
      challenges: [
        {
          challenge: "GPS accuracy and battery optimization",
          approach: "Implemented adaptive GPS polling rates based on movement speed, reducing battery consumption while maintaining data accuracy. Used location services efficiently with proper lifecycle management."
        },
        {
          challenge: "Real-time speed calculation and filtering",
          approach: "Developed a smoothing algorithm to filter GPS noise and calculate accurate speed readings. Implemented outlier detection to handle GPS signal loss and provide reliable data points."
        },
        {
          challenge: "Intelligent muting logic",
          approach: "Created a state machine that handles various driving scenarios (parking, traffic, highway) and applies appropriate muting rules. The system considers speed changes, location context, and time-based patterns."
        }
      ],
      results: "Successfully deployed application for research use. The app collects accurate GPS and speed data with minimal battery impact. Muting logic handles edge cases effectively, providing clean data for analysis.",
      techStack: ["Unity", "C#", "Android SDK", "GPS APIs", "SQLite"],
      demoVideo: "https://example.com/demo-video",
      linkedinUrl: "https://www.linkedin.com/in/tanzinels/"
    }
  },
  {
    id: "researchlink",
    title: "ResearchLink",
    tagline: "Academic research discovery and collaboration platform",
    description: "Full-stack web application connecting researchers with relevant papers, collaborators, and resources. Built with Next.js frontend and FastAPI backend, featuring intelligent scraping and database management.",
    image: "/images/researchlink.jpg",
    tags: ["Next.js", "FastAPI", "SQLAlchemy", "SQLite", "Web Scraping"],
    caseStudy: {
      problem: "Researchers struggle to discover relevant papers, find collaborators, and track research trends efficiently. Existing platforms are fragmented and lack intelligent discovery features.",
      constraints: [
        "Handle large volumes of academic data efficiently",
        "Real-time scraping from multiple sources",
        "Fast search and filtering capabilities",
        "Scalable database architecture",
        "Responsive web interface"
      ],
      solution: "Built a full-stack platform with Next.js for the frontend and FastAPI for the backend. Implemented intelligent web scraping to aggregate research papers from multiple sources, used SQLAlchemy for robust database management with SQLite, and created a fast search interface with filtering capabilities.",
      challenges: [
        {
          challenge: "Efficient data scraping and storage",
          approach: "Implemented asynchronous scraping with rate limiting and error handling. Designed a normalized database schema with SQLAlchemy to store papers, authors, and relationships efficiently."
        },
        {
          challenge: "Fast search and filtering",
          approach: "Created indexed database queries with SQLAlchemy, implemented full-text search capabilities, and optimized query performance with proper indexing strategies."
        },
        {
          challenge: "API design and frontend integration",
          approach: "Designed RESTful APIs with FastAPI, implemented proper error handling and response formatting. Created reusable React components in Next.js for consistent UI and efficient data fetching."
        }
      ],
      results: "Platform successfully aggregates research papers from multiple sources. Search and filtering perform well with large datasets. The application provides a smooth user experience for discovering and tracking research.",
      techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "SQLite", "BeautifulSoup", "React"],
      demoVideo: "https://example.com/researchlink-demo",
      githubUrl: "https://github.com/zinels/researchlink"
    }
  },
  {
    id: "scholarscan",
    title: "ScholarScan",
    tagline: "AI-powered academic paper summarization and clustering",
    description: "Python application that leverages the arXiv API to fetch papers, generates intelligent summaries, and clusters related research using advanced NLP techniques for efficient literature review.",
    image: "/images/scholarscan.jpg",
    tags: ["Python", "arXiv API", "NLP", "Clustering", "Summarization"],
    caseStudy: {
      problem: "Researchers spend excessive time reading through numerous academic papers to find relevant work. Manual summarization and organization of papers is time-consuming and inefficient.",
      constraints: [
        "Process large volumes of papers from arXiv",
        "Generate accurate and concise summaries",
        "Cluster papers by topic and similarity",
        "Handle API rate limits efficiently",
        "Provide actionable insights"
      ],
      solution: "Developed a Python application that integrates with the arXiv API to fetch papers, implements NLP-based summarization algorithms to extract key insights, and uses clustering techniques to group related papers. The system processes papers efficiently and provides organized, summarized results.",
      challenges: [
        {
          challenge: "arXiv API integration and rate limiting",
          approach: "Implemented proper API request handling with exponential backoff and rate limiting. Created a caching mechanism to avoid redundant API calls and handle large batch requests efficiently."
        },
        {
          challenge: "Accurate paper summarization",
          approach: "Developed a multi-stage summarization pipeline that extracts abstracts, key sentences, and technical terms. Used NLP techniques to identify important concepts and generate concise summaries."
        },
        {
          challenge: "Effective paper clustering",
          approach: "Implemented vector-based clustering using paper embeddings. Used dimensionality reduction techniques and clustering algorithms to group papers by topic, methodology, and research focus."
        }
      ],
      results: "Application successfully processes and summarizes papers from arXiv. Clustering effectively groups related research, saving researchers significant time in literature review. The system handles large volumes of papers efficiently.",
      techStack: ["Python", "arXiv API", "NLP", "scikit-learn", "numpy", "pandas", "matplotlib"],
      demoVideo: "https://example.com/scholarscan-demo",
      githubUrl: "https://github.com/zinels"
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

