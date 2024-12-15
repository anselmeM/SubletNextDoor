/**
 * Generates a random ID of specified length
 * @param length The length of the ID to generate (default: 8)
 * @returns A random string ID
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}