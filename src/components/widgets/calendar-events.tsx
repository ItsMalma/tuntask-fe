"use client";

import { Event } from "@/api/event";
import IconCalendar from "@/icons/calendar";
import IconChevronLeft from "@/icons/icon-chevron-left";
import { classes } from "@/libs/class-name";
import { formatDate } from "@/libs/date-time";
import { HTMLAttributes, Ref, useMemo, useState } from "react";
import LoadableImage from "../loadable-image";

type CalendarEventsProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
  events: Event[];
};

export default function CalendarEvents({
  events,
  className,
  ...props
}: CalendarEventsProps) {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const selectedEvent = useMemo(
    () => events[selectedEventIndex],
    [selectedEventIndex, events]
  );

  return (
    <div
      className={classes(
        "w-full grow bg-white flex flex-col p-6 rounded",
        className
      )}
      {...props}
    >
      <p className="text-secondary mb-8">Acara mendatang</p>
      <div className="flex gap-1 items-center mb-4">
        <IconCalendar className="size-4 text-primary-dark" />
        <p className="text-sm text-primary-dark">
          {formatDate(selectedEvent.startAt, "dd MMM yyyy")}
        </p>
      </div>
      <h3 className="text-primary-dark mb-2">{selectedEvent.name}</h3>
      <p className="text-sm text-primary-dark mb-4 line-clamp-2">
        {selectedEvent.description}
      </p>
      <div className="flex gap-1 items-center flex-wrap mb-10">
        {selectedEvent.users.map((user) => (
          <LoadableImage
            key={user.id}
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            width={36}
            height={36}
            className="size-8 rounded-full"
          />
        ))}
      </div>
      <div className="flex items-center gap-2 text-secondary">
        <button
          onClick={() =>
            setSelectedEventIndex((index) => (index - 1) % events.length)
          }
        >
          <IconChevronLeft className="size-4" />
        </button>
        <p className="text-sm">
          {selectedEventIndex + 1} / {events.length} Acara
        </p>
        <button
          onClick={() =>
            setSelectedEventIndex((index) => (index + 1) % events.length)
          }
        >
          <IconChevronLeft className="size-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}
