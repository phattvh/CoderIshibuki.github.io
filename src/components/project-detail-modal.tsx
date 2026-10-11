"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  QrCode,
  SlidersHorizontal,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectData {
  title: string;
  category?: string;
  href?: string;
  dates: string;
  active: boolean;
  featured?: boolean;
  badge?: string;
  affiliation?: string;
  role?: string;
  teamSize?: string;
  shortDescription?: string;
  description: string;
  workflow?: readonly ProjectWorkflowStep[];
  highlights?: readonly ProjectHighlight[];
  technologies: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
}

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

const HIGHLIGHT_ICONS = [
  <Zap key="zap" className="h-4 w-4 text-amber-500 dark:text-amber-400" aria-hidden />,
  <MapPin key="map" className="h-4 w-4 text-emerald-500 dark:text-emerald-400" aria-hidden />,
  <QrCode key="qr" className="h-4 w-4 text-blue-500 dark:text-blue-400" aria-hidden />,
  <SlidersHorizontal key="admin" className="h-4 w-4 text-purple-500 dark:text-purple-400" aria-hidden />,
];

export function ProjectDetailModal({ project, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const hasLink = Boolean(project?.href && project.href !== "#");

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 w-full max-w-3xl lg:max-w-4xl bg-background border border-border rounded-2xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden my-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-5 sm:p-6 border-b border-border/60 bg-muted/20 shrink-0">
              <div className="flex flex-col gap-2 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      Featured
                    </span>
                  )}
                  {project.category && (
                    <Badge variant="outline" className="text-[11px] font-medium border-border/70">
                      {project.category}
                    </Badge>
                  )}
                  {project.badge && (
                    <Badge variant="secondary" className="text-[11px] font-medium">
                      {project.badge}
                    </Badge>
                  )}
                  {project.affiliation && (
                    <Badge variant="outline" className="text-[11px] font-medium text-muted-foreground border-border/70">
                      {project.affiliation}
                    </Badge>
                  )}
                  {project.teamSize && (
                    <Badge variant="outline" className="text-[11px] font-medium text-muted-foreground border-border/70 flex items-center gap-1">
                      <Users className="h-3 w-3" aria-hidden />
                      {project.teamSize}
                    </Badge>
                  )}
                  <time className="text-xs text-muted-foreground whitespace-nowrap px-2.5 py-0.5 rounded-md bg-muted/60 border border-border/50">
                    {project.dates}
                  </time>
                </div>
                <div>
                  <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h2>
                  {project.role && (
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-0.5">
                      {project.role}
                    </p>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm text-foreground">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Project Overview
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>

              {/* Event Workflow / 3 Stages */}
              {project.workflow && project.workflow.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    3-Stage Event Lifecycle
                  </h3>
                  <div className="space-y-3">
                    {project.workflow.map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/50 bg-muted/15"
                      >
                        <span className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                          {item.step}
                        </span>
                        <div className="flex flex-col gap-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Technical Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.highlights.map((item, idx) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3.5 p-4 rounded-xl border border-border/60 bg-muted/20"
                      >
                        <div className="p-2.5 rounded-lg bg-background border border-border/50 shrink-0">
                          {HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length]}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-[12px] leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Technologies & Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-medium border-border/80 px-3 py-1 bg-background/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-t border-border/60 bg-muted/20 shrink-0">
              <div className="flex items-center gap-2">
                {hasLink && (
                  <Link
                    href={project.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Visit Website
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-2">
                    {project.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-background hover:bg-muted transition-colors"
                      >
                        {link.icon}
                        {link.type}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="text-xs ml-auto cursor-pointer"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
