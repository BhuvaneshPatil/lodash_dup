export function concat(arr: any, ...args: any[]) {
  let newArr = [...arr];
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      newArr = [...newArr, ...arg];
    } else {
      newArr.push(arg);
    }
  });

  return newArr;
}
