"use server";

import { getPendingProjects } from "@/api/project";
import ProjectOverview from "@/components/widgets/project-overview";
import Link from "next/link";

export default async function Projects() {
  const pendingProjects = await getPendingProjects();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between text-secondary">
        <h4>Projek yang tertunda</h4>
        <Link href="/events" className="text-sm font-medium uppercase">
          Semua Projek
        </Link>
      </div>
      <div className="w-full flex items-stretch gap-7">
        {pendingProjects.map((project) => (
          <ProjectOverview key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
