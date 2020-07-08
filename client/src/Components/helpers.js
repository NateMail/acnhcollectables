export const fullMonth = (month) => {
  switch (month) {
    case "jan":
      return "January";
    case "feb":
      return "February";
    case "mar":
      return "March";
    case "apl":
      return "April";
    case "may":
      return "May";
    case "jun":
      return "June";
    case "jul":
      return "July";
    case "aug":
      return "August";
    case "sept":
      return "September";
    case "oct":
      return "October";
    case "nov":
      return "November";
    case "dec":
      return "December";
    default:
      return "N/A";
  }
};
