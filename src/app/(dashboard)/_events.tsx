import { getDueTasks } from "@/api/task";
import DueTasks from "@/components/widgets/due-tasks";
import Link from "next/link";

export default async function Events() {
  const dueTasks = await getDueTasks();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between text-secondary">
        <h4>Tugas dan acara</h4>
        <Link href="/events" className="text-sm font-medium uppercase">
          Semua Acara
        </Link>
      </div>
      <div className="w-full flex items-center gap-7">
        <DueTasks tasks={dueTasks} />
        <div className="w-full grow bg-white flex p-6">
          <p>Tugas jatuh tempo</p>
        </div>
      </div>
    </div>
  );
}
