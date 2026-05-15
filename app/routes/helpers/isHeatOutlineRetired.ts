export const heatOutlineRetirementYear = 2025;

export const isHeatOutlineRetired = (term: string, year: string): boolean => {
  return term === "Fall" && year === heatOutlineRetirementYear.toString()
    ? true
    : year > heatOutlineRetirementYear.toString()
    ? true
    : false;
};
