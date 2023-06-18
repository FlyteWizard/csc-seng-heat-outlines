export const getCalendarEntryLink = (course: string): string => {
  let courseName = course.split(" ")[0];
  let courseCode = course.split(" ")[1];

  let calendarEntryLink = `https://web.uvic.ca/calendar/CDs/${courseName}/${courseCode}.html`;
  return calendarEntryLink;
};

export const getHeatOutlineLink = (
  course: string,
  term: string,
  year: string
): string => {
  let courseNameCode = course.split(" ")[0] + course.split(" ")[1];
  let termStartMonth;
  if (term === "Spring") {
    termStartMonth = "01";
  } else if (term === "Summer" || term === "Summer: May - June") {
    termStartMonth = "05";
  } else if (term === "Fall") {
    termStartMonth = "09";
  } else {
    termStartMonth = "";
  }

  let termStartDate =
    term === "Spring" || term === "Summer" || term === "Fall"
      ? 1
      : term === "Summer: May - June"
      ? 2
      : "";

  let heatOutlineLink = `https://heat.csc.uvic.ca/coview/course/${year}${termStartMonth}${termStartDate}/${courseNameCode}`;
  return heatOutlineLink;
};
