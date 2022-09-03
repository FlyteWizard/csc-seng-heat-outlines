export const getCurrentTerm = (): string => {
  // Returns the month (0–11) in the specified date according to local time.
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 0 && currentMonth <= 3) {
    return "Spring";
  } else if (currentMonth >= 4 && currentMonth <= 7) {
    return "Summer";
  } else if (currentMonth >= 8 && currentMonth <= 11) {
    return "Fall";
  } else {
    return "";
  }
};

export const getCurrentYear = (): string => {
  const currentYear = new Date().getFullYear();
  return currentYear.toString();
};
