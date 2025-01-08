var threeSum = function(nums) {
    if (nums.length === 0) return [];
    nums = nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};



/**
 * This function takes an array of numbers and returns all unique triplets that sum up to zero.
 * It uses a two-pointer technique after sorting the array.
 * 
 * Time Complexity: O(n^2) 
 * Space Complexity: O(n)
 */