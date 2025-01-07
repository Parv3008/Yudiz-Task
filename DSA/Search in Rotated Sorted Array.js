var search = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;

};


/**
 * This function takes a rotated sorted array and a target value.
 * It returns the index of the target value if found, otherwise returns -1.
 * 
 * Time Complexity: O(n) 
 * Space Complexity: O(1)
 */