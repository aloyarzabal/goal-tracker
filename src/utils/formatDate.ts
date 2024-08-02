export function formatDateDayMonth(dt: Date) {
  const date = new Date(dt);
  const day = date.getDay().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${day}/${month}`;
}
export function formatFullDate(dt: Date) {
  const date = new Date(dt);
  const day = date.getDay().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function todaysDay() {
  const date = new Date();
  const day = date.getDay().toString().padStart(2, "0");

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
  const year = date.getFullYear();

  return year;
}

export function todayFullDate() {
  return formatFullDate(new Date());
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

export function numberToMonth(month: number) {
  return Object.values(months)[month];
}

export function nameToMonth(month: string) {
  const foundMonth = Object.values(months).find((m) => m === month);
  return foundMonth ?? todaysMonthName();
}
