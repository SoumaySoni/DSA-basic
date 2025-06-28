// Remove duplicates from the sorted array

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Leet Code --> 26. Remove Duplicates from Sorted Array

function removeDuplicatesFromSortedArray(nums) {
    let uniqueCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[uniqueCount]) {
            uniqueCount++;
            nums[uniqueCount] = nums[i];
        }
    }
    return uniqueCount + 1; // +1 because uniqueCount is index based
}

// console.log(removeDuplicatesFromSortedArray([1, 1, 2]));
// console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 2,2, 3, 3, 4]));