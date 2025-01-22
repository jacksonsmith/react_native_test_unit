import { sum } from "./sum";

describe("sum", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("should return the sum of two negative numbers", () => {
    expect(sum(-3, -5)).toBe(-8);
  });

  it("should return the number when adding zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it("should return the correct sum for a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });
});
