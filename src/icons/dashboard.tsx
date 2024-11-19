import { classes } from "@/libs/class-name";
import { Icon } from "./generic";

const IconDashboard: Icon = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes("fill-none stroke-2", className)}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M13.45 11.55l2.05 -2.05" />
      <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
    </svg>
  );
};

export default IconDashboard;
