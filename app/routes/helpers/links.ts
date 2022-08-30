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
  } else if (term === "Summer") {
    termStartMonth = "05";
  } else if (term === "Fall") {
    termStartMonth = "09";
  } else {
    termStartMonth = "";
  }

  let heatOutlineLink = `https://heat.csc.uvic.ca/coview/course/${year}${termStartMonth}1/${courseNameCode}`;
  return heatOutlineLink;
};
