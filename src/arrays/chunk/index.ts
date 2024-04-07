export function chunk<T>(arr: T[], size: number) {
  const resArrray: T[][] = [];
  let tempChunk: T[] = [];
  arr.forEach((el, idx) => {
    const d = (idx + 1) % size;
    tempChunk.push(el);
    if (d === 0) {
      resArrray.push(tempChunk);
      tempChunk = [];
    }
  });
  if (tempChunk.length) {
    resArrray.push(tempChunk);
  }
  return resArrray;
}
