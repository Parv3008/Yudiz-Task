var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
        return i;
    }
}
return nums.length;
};


/**
 * This function takes a sorted array and a target value.
 * It returns the index if the target is found. If not, it returns the index where it would be if it were inserted in order.
 * 
 * Time Complexity: O(n) 
 * Space Complexity: O(1) 
 */