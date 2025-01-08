class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    push(value) {
        this.stack.push(value);
        this.length++;
    }

    pop() {
        if (this.length > 0) {
            this.stack.pop();
            this.length--;
        }
    }

    top() {
        if (this.length > 0) {
            return this.stack[this.length - 1];
        }
        return null; // Return null if the stack is empty
    }

    getLength() {
        return this.length;
    }
}

// Example usage
const obj = new Stack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.pop();
console.log(obj.top());       // Output: 2
console.log(obj.getLength()); // Output: 2
