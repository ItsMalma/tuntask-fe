import { classes } from "@/libs/class-name";
import { Icon } from "./generic";

const IconChevronLeft: Icon = ({ className, ...props }) => {
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
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
};

export default IconChevronLeft;
