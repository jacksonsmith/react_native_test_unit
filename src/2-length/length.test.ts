import { length } from "./length";

describe("length", () => {
  it("should return 0 for an empty string", () => {
    expect(length("")).toBe(0);
  });

  it("should return 1 for a string with one character", () => {
    expect(length("a")).toBe(1);
  });

  it("should return the correct length for a longer string", () => {
    expect(length("hello")).toBe(5);
  });
});
