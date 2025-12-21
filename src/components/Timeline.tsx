"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start md:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 h-3 w-3 rounded-full border-2 border-background bg-accent z-10 md:left-1/2 md:-translate-x-1/2" />
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
              <div className="rounded-xl border border-border bg-muted/30 backdrop-blur-sm p-6 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{item.organization}</p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">{item.description}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-background/50 border border-border/50 text-muted-foreground backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

