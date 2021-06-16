import { DateTime } from "luxon";

export function machineDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
}

export function readableDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
}
