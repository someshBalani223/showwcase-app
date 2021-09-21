import { Education } from "../interfaces";

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

export const getDate = (input: string) => {
  return new Date(input);
};

export const getCurrentDate = (date: string) => {
  const currentDate = new Date();
  const givenDate = new Date(date);
  if(givenDate.getMonth() >= currentDate.getMonth()) {
    return 'Present'
  }
  
  return getMonthAndYear(date)
}

export const getSortData = (data: Education[]) => {
  return data.sort((a: Education, b: Education) => getDate(b.startYear).valueOf() - getDate(a.startYear).valueOf());
}