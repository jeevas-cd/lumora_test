// sample.js

// Variables
const appName = "Demo Application";
let version = "1.0.0";
var isRunning = true;

console.log(appName);
console.log(version);

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Jeeva"));

// Arrow Function
const add = (a, b) => a + b;
console.log(add(10, 20));

// Array
const numbers = [10, 20, 30, 40, 50];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of
for (const num of numbers) {
    console.log(num * 2);
}

// Array methods
const squared = numbers.map(num => num * num);
console.log(squared);

const even = numbers.filter(num => num % 20 === 0);
console.log(even);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

// Object
const employee = {
    id: 101,
    name: "John",
    department: "IT",
    salary: 60000,

    display() {
        console.log(`${this.name} works in ${this.department}`);
    }
};

employee.display();

// Destructuring
const { id, name, salary } = employee;
console.log(id, name, salary);

// Spread Operator
const moreNumbers = [...numbers, 60, 70, 80];
console.log(moreNumbers);

// Rest Parameters
function calculateTotal(...values) {
    return values.reduce((sum, value) => sum + value, 0);
}

console.log(calculateTotal(1, 2, 3, 4, 5));

// Class
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student = new Student(1, "Alice");
student.study();

// Inheritance
class GraduateStudent extends Student {
    constructor(id, name, course) {
        super(id, name);
        this.course = course;
    }

    displayCourse() {
        console.log(`${this.name} enrolled in ${this.course}`);
    }
}

const grad = new GraduateStudent(2, "Bob", "Computer Science");
grad.study();
grad.displayCourse();

// Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 1000);
    });
}

// Async Await
async function loadData() {
    const result = await fetchData();
    console.log(result);
}

loadData();

// Set
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
console.log(uniqueNumbers);

// Map
const productMap = new Map();
productMap.set(1, "Laptop");
productMap.set(2, "Keyboard");
productMap.set(3, "Mouse");

productMap.forEach((value, key) => {
    console.log(key, value);
});

// Optional Chaining
const customer = {
    profile: {
        city: "Bangalore"
    }
};

console.log(customer?.profile?.city);
console.log(customer?.profile?.country);

// Nullish Coalescing
const language = null;
console.log(language ?? "JavaScript");

// Template Literals
const framework = "Node.js";
console.log(`Backend Framework: ${framework}`);

// Exception Handling
try {
    const json = '{"name":"David","age":25}';
    const user = JSON.parse(json);
    console.log(user);
} catch (error) {
    console.log(error.message);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// do while
let x = 1;
do {
    console.log("Value:", x);
    x++;
} while (x <= 3);

// Switch
const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other Day");
}

// Export (ES Module)
export { greet, add, Student };