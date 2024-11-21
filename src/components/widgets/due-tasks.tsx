"use client";

import { Task } from "@/api/task";
import IconCalendar from "@/icons/calendar";
import IconChevronLeft from "@/icons/icon-chevron-left";
import { classes, when } from "@/libs/class-name";
import { formatDate } from "@/libs/date-time";
import { HTMLAttributes, Ref, useMemo, useState } from "react";

type DueTasksProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
  tasks: Task[];
};

export default function DueTasks({
  tasks,
  className,
  ...props
}: DueTasksProps) {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const selectedTask = useMemo(
    () => tasks[selectedTaskIndex],
    [selectedTaskIndex, tasks]
  );

  return (
    <div
      className={classes(
        "w-full grow bg-white flex flex-col p-6 rounded",
        className
      )}
      {...props}
    >
      <p className="text-secondary mb-8">Tugas tenggat</p>
      <div className="flex gap-1 items-center mb-4">
        <IconCalendar className="size-4 text-primary-dark" />
        <p className="text-sm text-primary-dark">
          Tenggat pada:{" "}
          <span className="text-primary">
            {formatDate(selectedTask.dueAt, "dd MMM yyyy")}
          </span>
        </p>
      </div>
      <h3 className="text-primary-dark mb-2">{selectedTask.title}</h3>
      <p className="text-sm text-primary-dark mb-4 line-clamp-2">
        {selectedTask.description}
      </p>
      <div className="flex gap-4 items-center flex-wrap mb-10">
        {selectedTask.tags.map((tag) => (
          <button
            key={tag.id}
            className={classes(
              "min-w-20 h-9 flex justify-center items-center rounded text-sm bg-opacity-10 p-2.5",
              when(tag.color)
                .on("yellow", "bg-yellow text-yellow")
                .on("green", "bg-green text-green")
                .on("cyan", "bg-cyan text-cyan")
                .on("pink", "bg-pink text-pink")
            )}
          >
            {tag.name}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-secondary">
        <button
          onClick={() =>
            setSelectedTaskIndex((index) => (index - 1) % tasks.length)
          }
        >
          <IconChevronLeft className="size-4" />
        </button>
        <p className="text-sm">
          {selectedTaskIndex + 1} / {tasks.length} Tugas
        </p>
        <button
          onClick={() =>
            setSelectedTaskIndex((index) => (index + 1) % tasks.length)
          }
        >
          <IconChevronLeft className="size-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}
