# Encapsulation :-

Encapsulation is achieved in JavaScript by using private fields (prefixed with `#`) and providing controlled access through getters and setters.

Code:

```jsx
class Car {
    #brand; // Private class
    #speed;

    constructor(brand, speed) {
        this.#brand = brand;
        this.#speed = speed;
    }

    get brand() {
        return this.#brand;
    }

    set speed(value) {
        if (value > 0) {
            this.#speed = value;
        } else {
            console.error("Speed must be positive");
        }
    }

    drive() {
        console.log(`${this.#brand} car is driving at ${this.#speed} km/h`);
    }
}

const myCar = new Car("BMW", 80);
console.log(myCar.brand); // we can Access private class via getter
myCar.speed = 100; // we can Set private class via setter
myCar.drive(); // Output: BMW car is driving at 100 km/h

```

# **Polymorphism**:-

Polymorphism allows the same method to behave differently for different classes or objects.

Code:

```jsx
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}

function makeAnimalSound(animal) {
    animal.makeSound();
}

const myDog = new Dog();
const myCat = new Cat();

makeAnimalSound(myDog); // Outputs: Woof! Woof!
makeAnimalSound(myCat); // Outputs: Meow! Meow!

```

# **Abstraction**:-

Abstract concepts can be achieved using classes with only method stubs (ES6 doesn’t directly support abstract classes, but we can emulate the concept using method overrides).

Code:

```jsx
class Vehicle {
    start() {
        throw new Error("Start method must be implemented");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car is starting...");
    }
}

const myCar = new Car();
myCar.start(); // Output: Car is starting...

```

# **Inheritance**:-

Inheritance allows one class to extend another. A `SportsCar` class can inherit properties and methods from the `Car` class.

### **Types of Inheritance:**

**Single Inheritance**:

A single subclass inherits from a single parent class.

Code:

```jsx
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}
```

**Multilevel Inheritance**:

A class inherits from a child class, forming a chain.

Code:

```jsx
class Machine {
    constructor(type) {
        this.type = type;
    }
}

class Vehicle extends Machine {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(type, brand, model) {
        super(type, brand);
        this.model = model;
    }
}
```

**Hierarchical Inheritance**:

Multiple classes inherit from a single parent class.

Code:

```jsx
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}

class Bike extends Vehicle {
    constructor(brand, cc) {
        super(brand);
        this.cc = cc;
    }
}

```

**Multiple Inheritance (Not Supported in JavaScript):**

A single class inherits from multiple parent classes. JavaScript does not support multiple inheritance directly but allows it via **mix ins**.

### **Hybrid Inheritance:**

**Hybrid inheritance** is a combination of two or more types of inheritance (like single, multiple, hierarchical, or multilevel inheritance).

```
   Vehicle
    /    \\
  Car    Bike
   |      |
ElectricVehicle 
```

Code:

```jsx
// parent Class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    getDetails() {
        return `This is a ${this.brand} vehicle.`;
    }
}

// Class extending Vehicle
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // Call parent class constructor
        this.model = model;
    }

    getDetails() {
        return `This is a ${this.brand} car, model: ${this.model}.`;
    }
}

const ElectricFeature = {
    chargeBattery() {
        return `${this.brand} is now charging.`;
    }
};

// Applying the mixin to Car
Object.assign(Car.prototype, ElectricFeature);

const myCar = new Car("Tesla", "Model S");
console.log(myCar.getDetails()); // Output: This is a Tesla car, model: Model S.
console.log(myCar.chargeBattery()); // Output: Tesla is now charging.

```

# Git:-

**Starting a New Repository**
```
git init
git add .
git commit -m "Initial commit"
```

**Cloning and Working on an Existing Repository**
```
git clone url
cd [repository-name]
git branch [new-branch]
git checkout [new-branch]
git add .
git commit -m "Changes made"
git push origin [new-branch]
```

**Updating Local Repository**
```
git pull origin [branch]
```

Merging Branches
```
git checkout main
git merge [branch-name]
```
