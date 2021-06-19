import { DateTime } from "luxon";

export function machineDate(dateIso) {
  return DateTime.fromISO(dateIso).toFormat("yyyy-MM-dd");
}

export function readableDate(dateIso) {
  return DateTime.fromISO(dateIso).toFormat("dd LLL yyyy");
}
