/**
 * Classic Binary Search
 * Given a sorted array of integers, return the index of the target element. If not found, return -1.
 * Example: arr = [1,3,5,7,9], target = 7 → 3
 */


/*
     *Steps to Write a Binary Search Algorithm
        * 1. Initialize start and end pointers.
        * 2. Calculate the middle index.
        * 3. Compare the middle element with the target.
        * 4. If found, return the index.
        * 5. If not found, repeat with the left or right half.
*/

export function classicBinarySearch(sorted: number[], target: number): number{
    let start = 0, end = sorted.length -1;
    while(start <= end){
        let mid=Math.floor((start+end)/2)
        let guess = sorted[mid]
        if(guess === target ) return mid;
        if(guess > target ) end = mid -1; else start = mid + 1;
    }
   return -1;
}
