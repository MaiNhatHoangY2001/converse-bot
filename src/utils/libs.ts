/**
 * Converts a given number of seconds into a formatted time string in the format MM:SS.
 *
 * @param seconds - The number of seconds to convert.
 * @returns A string representing the time in the format MM:SS.
 *
 * @example
 * ```typescript
 * const timeString = convertNum2Time(125); // "02:05"
 * ```
 */
export default function convertNum2Time(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${minutesStr}:${secondsStr}`;
}
