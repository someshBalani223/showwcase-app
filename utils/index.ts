export const getMonthAndYear = (input: string) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(input);
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};
