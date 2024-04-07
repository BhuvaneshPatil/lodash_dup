export function compact<T>(arr: T[]) {
  const resArr: T[] = [];
  arr.forEach((val) => {
    if (val) {
      resArr.push(val);
    }
  });
  return resArr;
}
