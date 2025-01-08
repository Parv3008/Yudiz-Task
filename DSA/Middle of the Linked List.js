var middleNode = function(head) {
  
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;  
};



/**
 * This function takes the head of a singly linked list and returns the middle node.
 * If there are two middle nodes, it returns the second middle node.
 * It uses the two-pointer technique where 'slow' moves one step at a time and 'fast' moves two steps at a time.
 * 
 * Time Complexity: O(n) - We traverse the list containing n elements only once.
 * Space Complexity: O(1) - We use a constant amount of extra space.
 */