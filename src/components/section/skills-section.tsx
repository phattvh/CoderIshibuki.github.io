import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Layers,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Programming Languages": Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "DevOps & Tools": Terminal,
};

export default function SkillsSection() {
  return (
    <div className="flex flex-col gap-3 sm:gap-3.5 mt-2">
      {DATA.skills.map((group, id) => {
        const Icon = CATEGORY_ICONS[group.category] || Layers;

        return (
          <BlurFade
            key={group.category}
            delay={BLUR_FADE_DELAY * 10 + id * 0.04}
          >
            <div className="group/block rounded-xl sm:rounded-2xl border border-border/50 bg-card/35 p-3.5 sm:p-4 transition-all duration-200 hover:border-border/80 hover:bg-card/60 hover:shadow-2xs">
              {/* Header inside the block */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-border/30">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary transition-transform duration-200 group-hover/block:scale-105 shrink-0">
                    <Icon className="size-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-foreground">
                    {group.category}
                  </h3>
                </div>

                <span className="text-[11px] font-mono text-muted-foreground/75 bg-muted/60 px-2 py-0.5 rounded-full">
                  {group.items.length} {group.items.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              {/* Skill chips inside the block */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/chip inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background/80 hover:bg-background hover:border-foreground/20 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xs select-none cursor-default"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                      alt={skill.name}
                      width={18}
                      height={18}
                      className="size-4.5 rounded-[3px] object-contain flex-none transition-transform duration-200 group-hover/chip:scale-110"
                      loading="lazy"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
