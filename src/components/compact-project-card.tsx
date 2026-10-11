"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import { ProjectData } from "./project-detail-modal";

interface Props {
  project: ProjectData;
  onClick: () => void;
  className?: string;
}

export function CompactProjectCard({ project, onClick, className }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group flex flex-col justify-between border border-border bg-card/40 rounded-xl p-5 transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-xs cursor-pointer text-left select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.badge && (
              <p className="text-xs text-muted-foreground">
                {project.badge}
              </p>
            )}
          </div>
          <time className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
            {project.dates}
          </time>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-0.5">
          {project.shortDescription || project.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-border/40">
        {project.technologies && project.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[10px] font-normal text-muted-foreground border-border/50 px-2 py-0 h-5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        ) : (
          <span />
        )}
        <span className="text-xs font-medium text-muted-foreground group-hover:text-primary flex items-center gap-1 transition-colors shrink-0">
          Details
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  );
}
