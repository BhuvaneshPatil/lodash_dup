import { concat } from ".";

describe("Test concat function", () => {
  const baseArr = [1, 2];
  it("should concat non array values", () => {
    const newArr = concat(baseArr, 3, 4, 5, 6);
    expect(newArr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should concat values of array", () => {
    const newArr = concat(baseArr, [1], [[2]]);
    expect(newArr).toEqual([1, 2, 1, [2]]);
  });

  it("should concat individual values and also values in array", () => {
    const newArr = concat(baseArr, [1], 2, 3, 5, [[[6]]]);
    expect(newArr).toEqual([1, 2, 1, 2, 3, 5, [[6]]]);
  });
});
