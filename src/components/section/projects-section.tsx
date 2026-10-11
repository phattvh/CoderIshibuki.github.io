"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { CompactProjectCard } from "@/components/compact-project-card";
import {
  ProjectData,
  ProjectDetailModal,
} from "@/components/project-detail-modal";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(DATA.projects.map((p) => p.category).filter(Boolean))
  ) as string[];

  const allCategories = ["All", ...uniqueCategories];

  const filteredProjects =
    selectedCategory === "All"
      ? DATA.projects
      : DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Participated Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Projects I&apos;ve Contributed To
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A showcase of projects and systems I have participated in and contributed to.
            </p>
          </div>

          {/* Filter Tabs */}
          {DATA.projects.length > 0 && allCategories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {allCategories.map((cat) => {
                const count =
                  cat === "All"
                    ? DATA.projects.length
                    : DATA.projects.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-xs"
                        : "bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
            {filteredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className={
                  filteredProjects.length === 1
                    ? "col-span-full w-full"
                    : "h-full"
                }
              >
                <CompactProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </BlurFade>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
            <p className="text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Case Study / Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
