var twoSum = function(nums, target) {
    let numMap = new Map(); // Map to store the numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
};


/**
 * This function takes an array of numbers and a target number.
 * It returns the indices of the two numbers that add up to the target.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 */