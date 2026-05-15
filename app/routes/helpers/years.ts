import { heatOutlineRetirementYear } from "./isHeatOutlineRetired";

export const years = Array.from(
  { length: heatOutlineRetirementYear - 1999 },
  (_v, k: number) => {
    return k + 2000;
  },
);
