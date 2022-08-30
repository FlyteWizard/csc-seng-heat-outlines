export const years = Array.from(
  { length: new Date().getFullYear() - 1999 },
  (_v, k: number) => {
    return k + 2000;
  }
);
