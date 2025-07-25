// Leet Code --> 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            count = 0;
        }
    }
    return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1]))
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))

