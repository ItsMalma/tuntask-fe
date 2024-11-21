"use server";

import { Activity, getActivities } from "@/api/activity";
import LoadableImage from "@/components/loadable-image";
import { formatDateRange, getDateRange } from "@/libs/date-time";
import Link from "next/link";
import { Suspense } from "react";

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="snap-start flex items-center gap-4 p-5 bg-white ">
      <LoadableImage
        src={activity.user.avatar}
        alt="Avatar"
        width={36}
        height={36}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h5 className="text-primary-dark line-clamp-1">
          {activity.user.name}{" "}
          <Link href={activity.href} className="text-primary">
            {activity.description}
          </Link>
        </h5>
        <p className="text-sm">
          {formatDateRange(getDateRange(activity.createdAt))}
        </p>
      </div>
    </div>
  );
}

function ActivityCardFallback() {
  return (
    <div className="snap-start flex items-center gap-4 p-5 bg-white">
      <span className="animate-pulse size-9 rounded-full bg-background-dark" />
      <div className="grow flex flex-col gap-1">
        <span className="animate-pulse w-2/3 h-4 bg-background-dark" />
        <span className="animate-pulse w-1/3 h-3.5 bg-background-dark" />
      </div>
    </div>
  );
}

async function ActivityCards() {
  return (await getActivities()).map((activity) => (
    <ActivityCard key={activity.id} activity={activity} />
  ));
}

export default async function Activities() {
  return (
    <aside className="max-w-[32.4707846%] w-full max-h-[calc(100vh-128px)] overflow-scroll flex flex-col gap-6 border-l-2 border-l-background-dark">
      <div className="flex items-center justify-between pt-7 px-7">
        <h4 className="text-secondary">Aktivitas</h4>
        <Link
          href="/projects"
          className="text-xs font-medium text-secondary uppercase"
        >
          Semua Projek
        </Link>
      </div>
      <div className="snap-y flex flex-col gap-3 pb-3 overflow-auto px-7">
        <Suspense
          fallback={
            <>
              <ActivityCardFallback />
              <ActivityCardFallback />
              <ActivityCardFallback />
              <ActivityCardFallback />
              <ActivityCardFallback />
              <ActivityCardFallback />
            </>
          }
        >
          <ActivityCards />
        </Suspense>
      </div>
    </aside>
  );
}
