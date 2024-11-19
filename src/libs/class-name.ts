export type ClassesParam<E = unknown> =
  | string
  | undefined
  | null
  | false
  | WhenBuilder<E>;

export function classes<E = unknown>(...params: ClassesParam<E>[]): string {
  return params.reduce<string>((prev, current, i) => {
    if (!!current) {
      if (i > 0) prev += " ";

      if (typeof current === "string") {
        prev += current.trim();
      } else if (current instanceof WhenBuilder) {
        prev += (current.result ?? "").trim();
      }
    }

    return prev;
  }, "");
}

export function mergeClasses(...params: ClassesParam[]): string {
  const classesSet = new Set<string>();

  params.forEach((param) => {
    if (!!param) {
      if (typeof param === "string") {
        classesSet.add(param.trim());
      } else if (param instanceof WhenBuilder) {
        classesSet.add((param.result ?? "").trim());
      }
    }
  });

  return Array.from(classesSet).join(" ");
}

class WhenBuilder<E> {
  public result: string | null = null;

  constructor(private expr: E) {}

  public on<C extends E>(condition: C, result: string): this {
    if (this.expr == condition) {
      this.result = result;
    }

    return this;
  }

  public else(result: string): string {
    return (this.result ??= result);
  }
}

export function when<E>(expr: E): WhenBuilder<E> {
  return new WhenBuilder(expr);
}
