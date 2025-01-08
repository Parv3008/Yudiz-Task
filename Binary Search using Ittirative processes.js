const arr = [1, 2, 3, 4, 5];
const target = 4;

function binarySearch(arr, low, high, target) {
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

const result = binarySearch(arr, 0, arr.length - 1, target);
console.log(result); // Output: 3
