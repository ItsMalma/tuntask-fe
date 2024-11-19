import { classes, when } from "@/libs/class-name";
import { ButtonHTMLAttributes, Ref } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: Ref<HTMLButtonElement>;
  variant?: "filled" | "outline";
};

export default function Button({
  className,
  variant = "filled",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classes(
        "p-4 rounded text-sm font-medium uppercase outline-offset-2 outline-primary",
        when(variant)
          .on("filled", "bg-primary text-white")
          .on("outline", "bg-transparent text-primary border border-primary"),
        className
      )}
      {...props}
    />
  );
}
