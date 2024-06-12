export function convertNum2Time(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${minutesStr}:${secondsStr}`;
}
