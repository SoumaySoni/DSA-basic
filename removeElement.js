// Leet Code --> 27. Remove Element

function removeElement(nums, val) {
    if (nums.length === 0) return 0;
    let uniqueCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[uniqueCount] = nums[i];
            uniqueCount++;
        }
    }
    return { uniqueCount, nums };
}

// console.log(removeElement([0,0,0,0,1,2,2,3,4,5],2))
// console.log(removeElement([3,2,2,3],3))
