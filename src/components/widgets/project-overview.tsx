import { Project } from "@/api/project";
import IconCalendar from "@/icons/calendar";
import IconListCheck from "@/icons/list-check";
import IconMessage from "@/icons/message";
import { classes, when } from "@/libs/class-name";
import { formatDate } from "@/libs/date-time";
import Image from "next/image";
import { HTMLAttributes, Ref, useMemo } from "react";

export type ProjectOverviewProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
  project: Project;
};

export default function ProjectOverview({
  project,
  className,
  ...props
}: ProjectOverviewProps) {
  const completedTask = useMemo(
    () => project.tasks.filter((task) => !!task.completeDate).length,
    [project.tasks]
  );

  return (
    <div
      className={classes(
        "grow flex flex-col rounded bg-white overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex flex-col px-6">
        <div className="flex items-center py-5 gap-3">
          <Image
            src={project.image}
            alt={`Project ${project.name}'s image`}
            width={40}
            height={40}
            className="rounded-full bg-background"
          />
          <h4 className="text-primary-dark">{project.name}</h4>
        </div>
        <div className="flex items-center justify-between py-3 border-t border-background-dark">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <IconListCheck className="size-4 text-secondary" />
              <p className="text-sm text-secondary-dark">
                {completedTask} / {project.tasks.length}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <IconMessage className="size-4 text-secondary" />
              <p className="text-sm text-secondary-dark">{project.messages}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <IconCalendar className="size-4 text-secondary" />
            <p className="text-sm text-secondary-dark">
              {formatDate(project.dueDate, "dd MMM yyyy")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-background-dark">
        <span
          className={classes(
            "block h-full",
            when(project.color)
              .on("yellow", "bg-yellow")
              .on("green", "bg-green")
              .on("cyan", "bg-cyan")
              .on("pink", "bg-pink")
          )}
          style={{
            width: `${(completedTask / project.tasks.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
