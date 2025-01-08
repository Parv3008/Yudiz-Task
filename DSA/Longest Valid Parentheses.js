var longestValidParentheses = function(s) {
    let maxLength = 0;
    let stack = [-1]; // Initialize stack with -1 to handle edge cases

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};


/**
 * This function takes a string containing just the characters '(' and ')' and returns the length of the longest valid (well-formed) parentheses substring.
 
 * Time Complexity: O(n) 
 * Space Complexity: O(n) 
 */