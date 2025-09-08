

export function binarySearch(sorted: number[], target: number): number {
  let low = 0, high = sorted.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sorted[mid];
    if (guess === target) return mid;
    if (guess > target) high = mid - 1; else low = mid + 1;
  }
  return -1;
}