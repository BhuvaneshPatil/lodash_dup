import { compact } from ".";

describe("Test compact implementation", () => {
  it("should not remove truthy value", () => {
    const originalArray = [1, 2, 3, 4, 5, 6, false];
    expect(compact(originalArray)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should remove falsy values", () => {
    const originalArray = [1, 0, "", false, NaN, undefined, null];
    expect(compact(originalArray)).toEqual([1]);
  });
});
