import Activities from "./_activities";
import Events from "./_events";
import Overview from "./_overview";
import Projects from "./_projects";

export default function DashboardPage() {
  return (
    <div className="bg-background grow flex">
      <div className="w-full max-h-[calc(100vh-128px)] overflow-scroll flex flex-col gap-6 px-7 py-5">
        <Overview />
        <Events />
        <Projects />
      </div>
      <Activities />
    </div>
  );
}
