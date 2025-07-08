// Leet Code --> 268. Missing Number

var missingNumber = function(nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    const actualSum = nums.reduce((acc,curr) => {
        return curr + acc;
    })
    return expectedSum - actualSum;
};

console.log(missingNumber([3,0,1]))