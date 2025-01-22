import { max } from "./max";

describe("max", () => {
  it("should return the larger of two positive numbers", () => {
    expect(max(3, 5)).toBe(5);
  });

  it("should return the larger of two negative numbers", () => {
    expect(max(-3, -5)).toBe(-3);
  });

  it("should return the correct value for a positive and a negative number", () => {
    expect(max(5, -3)).toBe(5);
  });

  it("should return the other number when one is zero", () => {
    expect(max(0, 5)).toBe(5);
  });
});
