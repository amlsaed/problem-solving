import { classicBinarySearch } from "../../ch01-introduction/classicBinarySearch";

describe('Classic Binary Search',()=>{
    it('should ',()=>{
        expect(classicBinarySearch([1,2,3,4,5],5)).toBe(4)
    })
    it('should ',()=>{
        expect(classicBinarySearch([1,2,3,4,5],6)).toBe(-1)
    })
    it('should ',()=>{
        expect(classicBinarySearch([1,2,3,4,5],0)).toBe(-1)
    })
    it('should ',()=>{
        expect(classicBinarySearch([1,2,3,4,5],2)).toBe(1)
    })
})