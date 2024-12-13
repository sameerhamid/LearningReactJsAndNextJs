/**
 * A utility function to format numbers into various currency formats.
 * @param value - The number to format.
 * @param currency - The currency code (e.g., "USD", "EUR", "INR").
 * @returns A formatted currency string.
 */
export function formatCurrency(value: number, currency?: Currency): string {
  currency = "INR";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}

/**
 * List of all ISO 4217 currency codes.
 * Extendable as new currencies are introduced.
 */
export type Currency =
  | "USD" // US Dollar
  | "EUR" // Euro
  | "JPY" // Japanese Yen
  | "GBP" // British Pound
  | "AUD" // Australian Dollar
  | "CAD" // Canadian Dollar
  | "CHF" // Swiss Franc
  | "CNY" // Chinese Yuan
  | "SEK" // Swedish Krona
  | "NZD" // New Zealand Dollar
  | "INR" // Indian Rupee
  | "SGD" // Singapore Dollar
  | "ZAR" // South African Rand
  | "BRL" // Brazilian Real
  | "MXN" // Mexican Peso
  | "RUB" // Russian Ruble
  | "HKD" // Hong Kong Dollar
  | "KRW" // South Korean Won
  | "AED" // UAE Dirham
  | "SAR" // Saudi Riyal
  | "THB" // Thai Baht
  | "TRY"; // Turkish Lira
