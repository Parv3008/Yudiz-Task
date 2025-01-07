var sumZero = function(n) {
    let arr = [];
    if(n%2 !== 0){
        arr.push(0);
    }
    while(arr.length < n){
        let number = arr.length + 1;
        arr.push(number);
        arr.push(-number);
    }
    return arr;
};


/**
 * This function takes an integer n and returns an array of n unique integers that sum up to zero.
 
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 */