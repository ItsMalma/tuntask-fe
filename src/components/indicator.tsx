import { classes } from "@/libs/class-name";
import { HTMLAttributes, Ref, SVGAttributes } from "react";

export type IndicatorProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export type IndicatorCircleProps = Omit<
  SVGAttributes<SVGSVGElement>,
  "children"
> & {
  ref?: Ref<SVGSVGElement>;
};

export function Indicator({ className, ...props }: IndicatorProps) {
  return <div className={classes("relative", className)} {...props} />;
}

export function IndicatorCircle({ className, ...props }: IndicatorCircleProps) {
  return (
    <>
      <svg
        className={classes("absolute top-0 right-0 size-2", className)}
        {...props}
      >
        <circle fill="currentColor" r={4} cx={4} cy={4} />
      </svg>
    </>
  );
}
