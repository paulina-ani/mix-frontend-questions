// What is the otput?
// 1a.
function sum(x, y) {
  x + y;
}

console.log(sum(5 + "5")); // undefined
console.log(sum(5, "5")); // undefined
console.log(sum(5, 5)); // undefined

// 1b.
function sum2(x, y) {
  return x + y;
}
console.log(sum2(5 + "5")); //55undefined
console.log(sum2(5, "5")); //55
console.log(sum2(5, 5)); // 10

// 2.
console.log(false == "0"); //true

// 3.
const numbers = [1, 2, 3, 4];
let result = [];

result = numbers.push(8);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(result); // 5

// 4.
const cars = ["BMW", "Mercedes", "Audi"];
const indexOfAudi = cars.indexOf("Audi");
console.log(indexOfAudi); // 2

// 5.
const x = 5;
function changeNumber(x) {
  x = 4;
  return x;
}
console.log(changeNumber(5)); // 4

// 6a.
const x2 = 5;
function changeNumber2() {
  x2 = 4;
  return x2;
}
console.log("");
//console.log(changeNumber2(5)); // TypeError, Assigment to constant variable

// 6b
let x3 = 5;
function changeNumber3() {
  x3 = 4;
  return x3;
}
console.log(changeNumber3(5)); // 4

/* 7. True or False
  Adding primitive type values in JS is done by reference.
  Answer: False
*/

/* 8. Arrow function characteristics:
  a) is anonymous
  b) may works without "return"
*/

/* 9a. Which methods are available for array? 
  a) forEach, forEvery, map, filter, reduce, find
  b) find, filter, map, forEach, any, some
  c) forEvery, each, reduce, map
  d) forEach, filter,map, reduce, some
  
  Answer: forEach, filter, map, reduce, some 
*/

// 9b.
console.log([2, 5, 8, 1, 4].some(x => x > 10)); // false
console.log([1, 12, 8, 44, 3].some(x => x > 10)); // true;
console.log([2, 5, 8, 1, 4].filter(x => x > 10)); // []
console.log([1, 12, 8, 44, 3].filter(x => x > 10)); // [12, 44]

/* 10a.

Inheritance in JS is being done by:
  a) class
  b) prototypes

  Answer: protoypes;
*/
// 10b.
class Car {
  constructor(name, price, isDiesel) {
    this.name = name;
    this.price = price;
    this.isDiesel = isDiesel;
    this.turnOn = function() {
      return "Brum brum brum";
    };
  }
}

let car = new Car("Audi", 35000, true);
console.log(car.name); // Audi
console.log(car.turnOn()); // "Brum brum brum"
console.log(typeof car); // object
console.log(car);
console.log(typeof Car); // function

// 10c
class Car2 {
  constructor(name, price, isDiesel) {
    this.name = name;
    this.price = price;
    this.isDiesel = isDiesel;
  }
  turnOn() {
    return "Brum brum brum";
  }
}

let car2 = new Car2("Audi", 35000, true);
console.log("");
console.log("Car2");
console.log(car2.name); // Audi
console.log(car2.turnOn()); // "Brum brum brum"
console.log(typeof car2); // object
console.log(car2);
console.log(typeof Car2); // function

/*11. Which is correct:

<button id='btn' type='submit'></button>
const btn = document.getElementById('btn');

  a) btn.addEventListener('click', myFunction());
  b) btn.addEventListener('click', myFunction);
  c) btn.click(myFunction());
  d) btn.click(myFunction);

  Answer: btn.addEventListener('click', myFunction);
  Example:
  1) element.addEventListener('click', showSomething)
  2) element.addEventListener('click', function() {
    this.style.color = 'red';
  */
