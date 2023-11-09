//arrrowfunc
let car=(num1,num2)=>{
    let result=num1+num2
    console.log(result)
}
car(3,4)
//anonymous
let sum=function (num1,num2){
    var result=num1+num2
    console.log(result);
    
}
sum(2,3)
//named
function ball(num1,num2){
    var result=num1+num2
    console.log(result);
    
}
ball(2,3)
//immediate invoked function
var variable = (function(name) {
  console.log(`Hello, ${name}!`);
})("kowshik");

  //generator function
  function* countToThree() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = countToThree();
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }

  //constructor function

  function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}


var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);


console.log(person1.name); // Outputs "Alice"
person2.greet(); // Outputs "Hello, my name is Bob and I am 25 years old."

//call back function
function performTask(taskName, callback) {
    console.log(`Starting ${taskName}...`);
    
    setTimeout(function () {
      console.log(`${taskName} completed.`);
      callback(); 
    }, 2000);
  }
  
  function onTaskComplete() {
    console.log("Task is done!");
  }
  
  
  performTask("Data processing", onTaskComplete);
  
