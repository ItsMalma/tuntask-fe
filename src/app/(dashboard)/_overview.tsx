import { findGreatest } from "@/libs/collection";
import Link from "next/link";
import { useMemo } from "react";

type OverviewCardProps = {
  count: number;
  description: string;
  data: number[];
  pathClassName: string;
};

const overviewWidth = 256;
const overviewHeight = 56;

function OverviewCard(props: OverviewCardProps) {
  const pathD = useMemo(() => {
    let d = "";

    const intervalX = overviewWidth / (props.data.length - 1);
    const intervalY = overviewHeight / (findGreatest(props.data) ?? 1);

    let prevDatum: number | null = null;
    for (let i = 0; i < props.data.length; i++) {
      const datum = props.data[i];

      if (prevDatum === null) {
        d += `M+0+${overviewHeight - datum * intervalY}`;
      } else {
        d += `L${intervalX * i}+${overviewHeight - datum * intervalY}`;
      }
      prevDatum = datum;
    }

    return d;
  }, [props.data]);

  return (
    <div className="w-full h-24 grow bg-white flex justify-between px-6 py-5 gap-6 items-center">
      <div className="flex flex-col gap-1 whitespace-nowrap">
        <h2 className="text-primary-dark">{props.count}</h2>
        <p className="text-sm text-secondary-dark">{props.description}</p>
      </div>
      <svg
        className="grow h-full"
        viewBox={`0 0 ${overviewWidth} ${overviewHeight}`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={pathD} className={props.pathClassName} />
      </svg>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between text-secondary">
        <h4>Tugas Yang Ditinjau</h4>
        <Link href="/tasks" className="text-sm font-medium uppercase">
          Semua Tugas
        </Link>
      </div>
      <div className="w-full flex items-center gap-7">
        <OverviewCard
          count={50}
          description="Tugas baru"
          data={[0, 1, 2, 3]}
          pathClassName="stroke-2 stroke-primary"
        />
        <OverviewCard
          count={50}
          description="Tugas baru"
          data={[8, 5, 7, 3, 1, 0, 10, 9, 2, 5]}
          pathClassName="stroke-2 stroke-green"
        />
      </div>
    </div>
  );
}
