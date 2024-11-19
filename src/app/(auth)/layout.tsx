import { PropsWithChildren } from "react";

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <main className="flex justify-center items-center h-screen max-h-screen bg-background">
      <svg className="z-0 absolute top-0 left-0 w-full h-full">
        <circle r={24} cx="81.5277778%" cy="62.3%" className="fill-primary" />
        <circle r={18} cx="12.5%" cy="83.5%" className="fill-green" />
        <circle r={32} cx="16.5972%" cy="88.4%" className="fill-primary" />
        <circle r={50} cx="77.1527778%" cy="69%" className="fill-green" />
        <rect
          width="31.0416667%"
          height="98.6666667%"
          x="71.8055556%"
          y="-41.89%"
          rx={200}
          ry={200}
          className="fill-primary origin-center rotate-45"
          style={{ transformBox: "fill-box" }}
        />
      </svg>
      <div className="z-10 w-[38.5416667%] bg-white rounded shadow px-24 py-12">
        {props.children}
      </div>
    </main>
  );
}
