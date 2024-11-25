import { getUpcomingEvents } from "@/api/event";
import { getDueTasks } from "@/api/task";
import CalendarEvents from "@/components/widgets/calendar-events";
import DueTasks from "@/components/widgets/due-tasks";
import Link from "next/link";

export default async function Events() {
  const dueTasks = await getDueTasks();
  const upcomingEvents = await getUpcomingEvents();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between text-secondary">
        <h4>Tugas dan acara</h4>
        <Link href="/events" className="text-sm font-medium uppercase">
          Semua Acara
        </Link>
      </div>
      <div className="w-full flex items-stretch gap-7">
        <DueTasks tasks={dueTasks} />
        <CalendarEvents events={upcomingEvents} />
      </div>
    </div>
  );
}
