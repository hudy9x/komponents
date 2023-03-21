export const generatePages = (n: number) =>
  new Array(n).fill(1).map((val, id) => ({ page: id + 1 }));
