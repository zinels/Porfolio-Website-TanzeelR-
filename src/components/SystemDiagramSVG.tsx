import Image from "next/image";

interface SystemDiagramSVGProps {
  title?: string;
  imageSrc?: string;
  projectId?: string;
}

export default function SystemDiagramSVG({ 
  title = "System Architecture", 
  imageSrc,
  projectId 
}: SystemDiagramSVGProps) {
  // If image is provided, show image instead of SVG
  if (imageSrc) {
    return (
      <div className="w-full rounded-lg border border-border bg-muted/30 p-8">
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-background">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>
    );
  }

  // Custom SVG for driving app
  if (projectId === "driving-behavior-app") {
    return (
      <div className="w-full rounded-lg border border-border bg-muted/30 p-8">
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="800" height="500" fill="transparent" />
          
          {/* Unity Frontend */}
          <rect
            x="50"
            y="200"
            width="150"
            height="100"
            rx="8"
            fill="#1a1a1a"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text
            x="125"
            y="250"
            textAnchor="middle"
            fill="#fafafa"
            fontSize="14"
            fontWeight="600"
          >
            Frontend
          </text>
          <text
            x="125"
            y="270"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="12"
          >
            Unity
          </text>
          
          {/* GPS & Processing */}
          <rect
            x="300"
            y="200"
            width="150"
            height="100"
            rx="8"
            fill="#1a1a1a"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text
            x="375"
            y="240"
            textAnchor="middle"
            fill="#fafafa"
            fontSize="14"
            fontWeight="600"
          >
            GPS & Processing
          </text>
          <text
            x="375"
            y="260"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="12"
          >
            Speed Calculation
          </text>
          <text
            x="375"
            y="280"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="12"
          >
            Muting Logic
          </text>
          
          {/* CSV Database */}
          <rect
            x="550"
            y="200"
            width="150"
            height="100"
            rx="8"
            fill="#1a1a1a"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text
            x="625"
            y="250"
            textAnchor="middle"
            fill="#fafafa"
            fontSize="14"
            fontWeight="600"
          >
            Data Storage
          </text>
          <text
            x="625"
            y="270"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="12"
          >
            CSV Files
          </text>
          
          {/* Arrows */}
          <path
            d="M 200 250 L 300 250"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 450 250 L 550 250"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill="#3b82f6"
              />
            </marker>
          </defs>
          
          {/* Overpass API */}
          <rect
            x="300"
            y="50"
            width="150"
            height="80"
            rx="8"
            fill="#1a1a1a"
            stroke="#a3a3a3"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="375"
            y="85"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="12"
          >
            Overpass API
          </text>
          <text
            x="375"
            y="105"
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="11"
          >
            Speed Limits
          </text>
          
          <path
            d="M 375 130 L 375 200"
            stroke="#a3a3a3"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            markerEnd="url(#arrowhead-gray)"
          />
          
          <defs>
            <marker
              id="arrowhead-gray"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill="#a3a3a3"
              />
            </marker>
          </defs>
        </svg>
      </div>
    );
  }

  // Default SVG for other projects
  return (
    <div className="w-full rounded-lg border border-border bg-muted/30 p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="800" height="500" fill="transparent" />
        
        {/* Frontend Box */}
        <rect
          x="50"
          y="200"
          width="150"
          height="100"
          rx="8"
          fill="#1a1a1a"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <text
          x="125"
          y="250"
          textAnchor="middle"
          fill="#fafafa"
          fontSize="14"
          fontWeight="600"
        >
          Frontend
        </text>
        <text
          x="125"
          y="270"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="12"
        >
          Next.js
        </text>
        
        {/* API Gateway */}
        <rect
          x="300"
          y="200"
          width="150"
          height="100"
          rx="8"
          fill="#1a1a1a"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <text
          x="375"
          y="250"
          textAnchor="middle"
          fill="#fafafa"
          fontSize="14"
          fontWeight="600"
        >
          API Gateway
        </text>
        <text
          x="375"
          y="270"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="12"
        >
          FastAPI
        </text>
        
        {/* Database */}
        <rect
          x="550"
          y="200"
          width="150"
          height="100"
          rx="8"
          fill="#1a1a1a"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <text
          x="625"
          y="250"
          textAnchor="middle"
          fill="#fafafa"
          fontSize="14"
          fontWeight="600"
        >
          Database
        </text>
        <text
          x="625"
          y="270"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="12"
        >
          SQLite
        </text>
        
        {/* Arrows */}
        <path
          d="M 200 250 L 300 250"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 450 250 L 550 250"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="#3b82f6"
            />
          </marker>
        </defs>
        
        {/* External Service */}
        <rect
          x="300"
          y="50"
          width="150"
          height="80"
          rx="8"
          fill="#1a1a1a"
          stroke="#a3a3a3"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text
          x="375"
          y="85"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="12"
        >
          External APIs
        </text>
        
        <path
          d="M 375 130 L 375 200"
          stroke="#a3a3a3"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          markerEnd="url(#arrowhead-gray)"
        />
        
        <defs>
          <marker
            id="arrowhead-gray"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="#a3a3a3"
            />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

