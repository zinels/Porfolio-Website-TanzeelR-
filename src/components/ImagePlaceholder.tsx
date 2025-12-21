"use client";

import { Smartphone, Globe, Brain, User, LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  iconName?: "smartphone" | "globe" | "brain" | "user";
  gradient?: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  globe: Globe,
  brain: Brain,
  user: User,
};

export default function ImagePlaceholder({ 
  title, 
  iconName, 
  gradient = "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  className = ""
}: ImagePlaceholderProps) {
  const Icon = iconName ? iconMap[iconName] : undefined;
  
  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/20 to-background/60" />
      <div className="relative z-10 text-center p-8">
        {Icon && (
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-accent/10 p-4 border border-accent/20">
              <Icon className="w-8 h-8 text-accent" />
            </div>
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground/90 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">Image placeholder</p>
      </div>
      <div className="absolute inset-0 border border-border/50" />
    </div>
  );
}

