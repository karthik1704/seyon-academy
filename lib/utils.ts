import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateTime } from 'luxon';

dayjs.extend(customParseFormat);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateTimeFormatter(dateStr:string ) {
  const formattedDate = dayjs(dateStr).format('DD/MM/YYYY, hh:mm:ss A');

  return formattedDate
}
export function dateFormatter(dateStr:string ) {
  const formattedDate = dayjs(dateStr).format('DD/MM/YYYY');

  return formattedDate
}

export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


export function lessThanExpiryDate(expiry_date: string): boolean {
  // Get the current date in UTC
  const today = DateTime.utc();

  // Parse the expiry date in UTC
  // const expiry = DateTime.from(expiry_date, { zone: 'utc' });

  // console.log('Expiry:', expiry.toISO());  // Logs in ISO format
  console.log('Today:', today.toISO());    // Logs in ISO format
  
  // Compare expiry date with today
  return expiry_date > today;
}

