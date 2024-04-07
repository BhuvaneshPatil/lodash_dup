import { chunk } from ".";

describe("Test chunk function", () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  it("should divide in parts of 2 elements", () => {
    const resultArray = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const op = chunk(testArray, 2);
    console.log(op);
    expect(op).toEqual(resultArray);
  });
  it("should be single element in the end", () => {
    testArray.pop();
    const resultArray = [[1, 2], [3, 4], [5, 6], [7]];
    const op = chunk(testArray, 2);
    console.log(op);
    expect(op).toEqual(resultArray);
  });
});
