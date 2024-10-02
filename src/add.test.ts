import { describe, expect, it } from "@jest/globals";
import { add } from "./add";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
