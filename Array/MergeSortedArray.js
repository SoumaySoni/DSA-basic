// Leet Code --> 88. Merge Sorted Array

function merge(nums1, m, nums2, n) {
    let i = m - 1; // pointer for nums1
    let j = n - 1; // pointer for nums2
    let k = m + n - 1; // pointer for result position

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    return nums1;
};

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3))
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
 