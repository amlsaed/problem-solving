import { SelectionSort } from "../../ch02-selectionSort/sortInts"

describe("SelectionSort",()=>{
    it("should sort arr of ints",()=>{
        expect(SelectionSort([3,9,5,4,6,7,8])).toBe([3,4,5,6,7,8])
    })
})