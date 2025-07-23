export enum DateFormat {
  // Short date formats (numeric, concise)
  SHORT = 'd/m/Y', // e.g., 21/07/2025 (common in Europe, Asia, Thailand)
  US_SHORT = 'm/d/Y', // e.g., 07/21/2025 (common in the US)
  ASIA_SHORT = 'Y/m/d', // e.g., 2025/07/21 (common in Japan, China)
  EUROPE_SHORT = 'd.m.Y', // e.g., 21.07.2025 (common in Germany, Austria)

  // Long date formats (verbose, full month names)
  LONG = 'F d, Y', // e.g., July 21, 2025 (common internationally)
  EUROPE_LONG = 'd F Y', // e.g., 21 July 2025 (common in Europe)

  // Month and year formats
  MONTH_YEAR_SHORT = 'm/Y', // e.g., 07/2025 (numeric, compact)
  MONTH_YEAR_LONG = 'F Y', // e.g., July 2025 (full month name)

  // ISO 8601 formats
  ISO_DATE = 'Y-m-d', // e.g., 2025-07-21 (standard for APIs, databases)
  ISO_DATETIME = 'Y-m-d\\TH:i:S', // e.g., 2025-07-21T16:14:30 (ISO 8601 with time)

  // Date-time formats
  DATETIME_SHORT = 'd/m/Y H:i', // e.g., 21/07/2025 16:14 (short date with hours and minutes)
  DATETIME_LONG = 'F d, Y H:i', // e.g., July 21, 2025 16:14 (long date with hours and minutes)
}
