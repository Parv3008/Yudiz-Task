var merge = function(nums1, m, nums2, n) {
    
    for (let j = 0; j < n; j++) {
        nums1[m + j] = nums2[j];
    }
    nums1.sort((a, b) => a - b);

};


/**
 * This function takes two sorted arrays, nums1 and nums2, and merges nums2 into nums1 as one sorted array.
 * The first m elements of nums1 are the elements to be merged, and nums1 has enough space to hold additional elements from nums2.
 * 
 * Time Complexity: O((m + n) log(m + n)) 
 * Space Complexity: O(1) 
 */