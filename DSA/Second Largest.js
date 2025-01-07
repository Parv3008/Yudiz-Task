class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
      let largestnumber = arr[0];
      let secondlargestnumber = arr[0];
      for(let i=0;i<arr.length;i++){
          if (arr[i]>largestnumber){
              secondlargestnumber = largestnumber;
              largestnumber = arr[i];
          } else if (arr[i]> secondlargestnumber){
              secondlargestnumber = arr[i];
          }
      }
      return secondlargestnumber;
    }
}


 /**
     * This function takes an array and returns the second largest element.
    
     * Time Complexity: O(n) 
     * Space Complexity: O(1) 
     */