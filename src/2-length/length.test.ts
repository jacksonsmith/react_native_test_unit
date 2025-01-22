import { length } from "./length";

describe("Length Exercise", () => {
  test("testLength_EmptyString", () => {
    const result = length("");
    expect(result).toBe(0);
  });

  test("testLength_test_is_length_4", () => {
    expect(length("test")).toBe(4);
  });

  test("testLength_MultipleCharacterString", () => {
    const result = length("Hello");
    expect(result).toBe(5);
  });

  test("testLength_WhitespaceString", () => {
    const result = length("   ");
    expect(result).toBe(3);
  });

  test("testLength_SpecialCharacterString", () => {
    const result = length("!@#$%");
    expect(result).toBe(5);
  });
});
