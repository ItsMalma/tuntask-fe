type TimeUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";

// Sorted from smallest to largest
const timeUnitsInSecond: Record<TimeUnit, number> = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
  month: 2419200,
  year: 29030400,
};

type DateRange = [number, TimeUnit];

export function getDateRange(from: Date, to: Date = new Date()): DateRange {
  const secondSinceNow = to.getTime() / 1000 - from.getTime() / 1000;

  for (const timeUnit of Object.keys(
    timeUnitsInSecond
  ).reverse() as TimeUnit[]) {
    const timeUnitInSecond = timeUnitsInSecond[timeUnit];

    if (secondSinceNow >= timeUnitInSecond) {
      return [Math.floor(secondSinceNow / timeUnitInSecond), timeUnit];
    }
  }

  return [secondSinceNow, "second"];
}

export function formatDateRange(dateRange: DateRange): string {
  const [value, unit] = dateRange;

  switch (unit) {
    case "year":
      return value === 1 ? "setahun yang lalu" : `${value} tahun yang lalu`;
    case "month":
      return value === 1 ? "sebulan yang lalu" : `${value} bulan yang lalu`;
    case "week":
      return value === 1 ? "seminggu yang lalu" : `${value} minggu yang lalu`;
    case "day":
      return value === 1 ? "kemarin" : `${value} hari yang lalu`;
    case "hour":
      return value === 1 ? "sejam yang lalu" : `${value} jam yang lalu`;
    case "minute":
      return value === 1 ? "semenit yang lalu" : `${value} menit yang lalu`;
    case "second":
      return value === 1 ? "sedetik yang lalu" : `${value} detik yang lalu`;
  }
}

export function transformMonthIndex(monthIndex: number): string {
  switch (monthIndex % 12) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Maret";
    case 3:
      return "April";
    case 4:
      return "Mei";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Agustus";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Desember";
    default:
      throw new Error(`Bulan ${monthIndex} tidak tersedia`);
  }
}

export function formatDate(date: Date, format: string): string {
  return format
    .replaceAll("dd", date.getDate().toString().padStart(2, "0"))
    .replace("MMM", transformMonthIndex(date.getMonth()).slice(0, 3))
    .replace("yyyy", date.getFullYear().toString().padStart(4, "0"));
}
