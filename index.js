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
