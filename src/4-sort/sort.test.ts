import { sort } from "./sort";

describe("sort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(sort([])).toEqual([]);
  });

  it("should return the same array when given a single-element array", () => {
    expect(sort(["a"])).toEqual(["a"]);
  });

  it("should return the array already sorted", () => {
    expect(sort(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  it("should return the array sorted alphabetically", () => {
    expect(sort(["b", "a", "c"])).toEqual(["a", "b", "c"]);
  });
});
