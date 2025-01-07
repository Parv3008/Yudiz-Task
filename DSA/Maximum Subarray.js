var maxSubArray = function(nums) {
    let maximum = nums[0]
    let sum = 0

    nums.forEach((n) => {
        sum += n
        maximum = Math.max(maximum,sum);
        if (sum < 0) sum = 0
    })
    return maximum
};

/**
 * This function takes an array of numbers and returns the sum of the subarray with the largest sum.
 * It uses Kadane's Algorithm to find the maximum subarray sum.
 * 
 * Time Complexity: O(n) 
 * Space Complexity: O(1) 
 */