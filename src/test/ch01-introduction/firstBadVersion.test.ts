import { firstBadVersion, isBadVersionFactory } from "../../ch01-introduction/firstBadVersion";

describe("First Bad Version", () => {
  it("should return 4 when the first bad version is 4 (n=10)", () => {
    const isBad = isBadVersionFactory(4);
    expect(firstBadVersion(10, isBad)).toBe(4);
  });

  it("should return 1 when the first bad version is 1 (n=5)", () => {
    const isBad = isBadVersionFactory(1);
    expect(firstBadVersion(5, isBad)).toBe(1);
  });

  it("should return n when the last version is the only bad one", () => {
    const isBad = isBadVersionFactory(7);
    expect(firstBadVersion(7, isBad)).toBe(7);
  });

  it("should return correct result for middle bad version", () => {
    const isBad = isBadVersionFactory(3);
    expect(firstBadVersion(6, isBad)).toBe(3);
  });
});
