export function formatDateDayMonth(dt: Date) {
  const date = new Date(dt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${day}/${month}`;
}
export function formatFullDate(dt: Date, yearFirst?: boolean) {
  const date = new Date(dt);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return yearFirst ? `${year}-${month}-${day}` : `${day}/${month}/${year}`;
}

export function todaysDay() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");

  return day;
}
export function todaysMonthNumber() {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return month;
}
export function todaysMonthName() {
  const date = new Date();
  const month = date.getMonth().toString().padStart(2, "0");

  return numberToMonth(+month);
}
export function todaysYear() {
  const date = new Date();
  return date.getFullYear();
}
export function todaysYearString() {
  const date = new Date();
  return String(date.getFullYear());
}

export function todayFullDate() {
  return formatFullDate(new Date());
}

export function todayFullDateDashed() {
  return formatFullDate(new Date(), true);
}
export function dateDashed(dt: Date) {
  return formatFullDate(dt, true);
}

export function getMonthFromRawDate(dt: Date) {
  const date = new Date(dt);
  const month = numberToMonth(date.getMonth());

  return month;
}

export enum months {
  JANUARY = "January",
  FEBRUARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December",
}
export enum monthsToNumber {
  "January" = "1",
  "February" = "2",
  "March" = "3",
  "April" = "4",
  "May" = "5",
  "June" = "6",
  "July" = "7",
  "August" = "8",
  "September" = "9",
  "October" = "10",
  "November" = "11",
  "December" = "12",
}

export function stringToNumber(month: string) {
  return Object.keys(monthsToNumber).indexOf(month) + 1;
}

export function numberToMonth(month: number) {
  return Object.values(months)[month];
}

export function monthToNumber(month: months) {
  return Object.values(months).indexOf(month) + 1;
}

export function nameToMonth(month: string) {
  const foundMonth = Object.values(months).find((m) => m === month);
  return foundMonth ?? todaysMonthName();
}
