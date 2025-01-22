import { sum } from "./sum";

describe("Sum Exercise", () => {
  test("addition_zero_plus_zero_isCorrect", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("addition_zero_plus_two_isCorrect", () => {
    expect(sum(0, 2)).toBe(2);
  });
});
