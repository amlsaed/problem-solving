import { binarySearch } from '../../ch01-introduction/binarySearch';

describe('binarySearch', () => {
  it('finds the index when present', () => {
    expect(binarySearch([1,3,5,7,9], 7)).toBe(3);
  });

  it('returns -1 when not present', () => {
    expect(binarySearch([1,3,5,7,9], 2)).toBe(-1);
  });
});
