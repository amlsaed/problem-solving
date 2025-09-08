// Factory to simulate the API
export function isBadVersionFactory(bad: number) {
  return function (version: number): boolean {
    return version >= bad;
  };
}

// Main solution
export function firstBadVersion(
  n: number,
  isBadVersion: (v: number) => boolean
): number {
  let start = 1;
  let end = n;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (isBadVersion(mid)) {
      end = mid; // could be first bad
    } else {
      start = mid + 1; // must be later
    }
  }

  return start;
}
