/**
 * Checks if the given value is an email address.
 *
 * This is a very naive check. It just checks if the given value contains
 * an "@" symbol. This is not a proper email validation, but it is enough
 * for the purpose of this project.
 *
 * @param value The value to check if it is an email address.
 * @returns True if the given value is an email address, false otherwise.
 */
export function isEmail(value: string): boolean {
  return value.includes("@");
}

/**
 * Checks if the given string is not empty.
 *
 * This is a very naive check. It just removes all whitespace from the given
 * string and checks if the resulting string is not empty. This is not a proper
 * empty check, but it is enough for the purpose of this project.
 *
 * @param value The value to check if it is not empty.
 * @returns True if the given string is not empty, false otherwise.
 */
export function isNotEmpty(value: string): boolean {
  return value.trim() !== "";
}

/**
 * Checks if the given string has a minimum length.
 *
 * @param value The string to check the length of.
 * @param minLength The minimum length the string should have.
 * @returns True if the given string has at least the given minimum length,
 * false otherwise.
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

/**
 * Checks if two values are equal.
 *
 * This function uses the strict equality operator (===) to compare the two
 * values. This means that the values must be of the same type and have the same
 * value.
 *
 * @param value The first value to compare.
 * @param otherValue The second value to compare.
 * @returns True if the two values are equal, false otherwise.
 */
export function isEqualToOtherValue(
  value: string | number,
  otherValue: string | number
): boolean {
  return value === otherValue;
}
