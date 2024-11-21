import Activities from "./_activities";
import Events from "./_events";
import Overview from "./_overview";

export default function DashboardPage() {
  return (
    <div className="bg-background grow flex">
      <div className="w-full flex flex-col gap-6 px-7 py-5">
        <Overview />
        {/* Tasks and Events */}
        <Events />
      </div>
      <Activities />
    </div>
  );
}
