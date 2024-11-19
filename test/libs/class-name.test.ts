import { classes } from "@/libs/class-name";
import { describe, expect, test } from "bun:test";

describe("classes", () => {
  test("strings only", () => {
    expect(classes("a b ", " c d", "e f ")).toBe("a b c d e f");
  });

  test("strings, undefined and null", () => {
    expect(
      classes("a b ", " c d", "e f ", null, "g h", undefined, " i j")
    ).toBe("a b c d e f g h i j");
  });
});
