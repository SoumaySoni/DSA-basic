// Leet Code --> 136. Single Number

var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]; // XOR cancels out duplicates
    }
    return result;
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([2,2,1,1,4]))