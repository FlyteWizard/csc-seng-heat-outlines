export const getCurrentTerm = (): string => {
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 0 && currentMonth <= 4) {
    return "Spring";
  } else if (currentMonth >= 5 && currentMonth <= 08) {
    return "Summer";
  } else if (currentMonth >= 9 && currentMonth <= 12) {
    return "Fall";
  } else {
    return "";
  }
};

export const getCurrentYear = (): string => {
  const currentYear = new Date().getFullYear();
  return currentYear.toString();
};
