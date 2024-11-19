import { classes } from "@/libs/class-name";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
} from "react";

export type CheckboxProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export type CheckboxInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  ref?: Ref<HTMLInputElement>;
};

export type CheckboxLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  ref?: Ref<HTMLLabelElement>;
};

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <div
      className={classes("relative flex items-center gap-3", className)}
      {...props}
    />
  );
}

export function CheckboxInput({ className, ...props }: CheckboxInputProps) {
  return (
    <>
      <input
        type="checkbox"
        className={classes(
          "peer appearance-none size-5 rounded-sm bg-background-dark checked:bg-primary outline-offset-2 outline-primary",
          className
        )}
        {...props}
      />
      <svg
        viewBox="0 0 24 24"
        className="peer-[:not(:checked)]:hidden absolute top-0 left-0 size-5 fill-none stroke-2 stroke-white pointer-events-none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </>
  );
}

export function CheckboxLabel({ className, ...props }: CheckboxLabelProps) {
  return (
    <label
      className={classes("text-sm text-secondary", className)}
      {...props}
    />
  );
}
