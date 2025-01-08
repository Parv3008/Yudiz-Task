class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        } else {
            return "Queue is empty";
        }
    }

    front() {
        if (!this.isEmpty()) {
            return this.queue[0];
        } else {
            return "Queue is empty";
        }
    }

    rear() {
        if (!this.isEmpty()) {
            return this.queue[this.queue.length - 1];
        } else {
            return "Queue is empty";
        }
    }

    size() {
        return this.queue.length;
    }
}


const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log("Queue:", q.queue);            
console.log("Dequeue:", q.dequeue());   
console.log("Queue:", q.queue);           
console.log("Front:", q.front());       
console.log("Rear:", q.rear());         
console.log("Size:", q.size());         
console.log("Is Empty:", q.isEmpty());  
