"use client";

import { Icon } from "@/icons/generic";
import { classes } from "@/libs/class-name";
import {
  createContext,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
  use,
} from "react";

export type FieldProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  ref?: Ref<HTMLLabelElement>;
};

export type FieldInputWrapperProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
  leftIcon?: Icon;
  rightIcon?: Icon;
};

export type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

const FieldInputContext = createContext<{
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}>({
  hasLeftIcon: false,
  hasRightIcon: false,
});

export function Field({ className, ...props }: FieldProps) {
  return (
    <div className={classes("flex flex-col gap-2", className)} {...props} />
  );
}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <label
      className={classes("text-sm text-primary-dark", className)}
      {...props}
    />
  );
}

export function FieldInputWrapper({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  ...props
}: FieldInputWrapperProps) {
  return (
    <FieldInputContext.Provider
      value={{ hasLeftIcon: !!LeftIcon, hasRightIcon: !!RightIcon }}
    >
      <div className={classes("relative", className)}>
        {LeftIcon && (
          <LeftIcon className="absolute size-5 text-secondary top-1/2 left-4 -translate-y-1/2" />
        )}
        {props.children}
        {RightIcon && (
          <RightIcon className="absolute size-5 text-secondary top-1/2 right-4 -translate-y-1/2" />
        )}
      </div>
    </FieldInputContext.Provider>
  );
}

export function FieldInput({ className, ...props }: FieldInputProps) {
  const ctx = use(FieldInputContext);

  return (
    <input
      className={classes(
        "bg-white disabled:bg-background px-4 py-3.5 rounded border border-background-dark text-sm font-medium text-primary-dark placeholder:text-secondary-dark disabled:text-secondary-dark outline-offset-2 outline-primary",
        ctx.hasLeftIcon && "pl-12",
        ctx.hasRightIcon && "pr-12",
        className
      )}
      {...props}
    />
  );
}
