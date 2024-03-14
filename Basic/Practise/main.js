/* 

(1) Create a function that takes an array of numbers as input and returns the sum of all the positive numbers.

(2) Write a function that takes a string as input and returns the reversed version of the string.

(3) Implement a function that checks whether a given number is even or odd.

(4) Write a function that takes an array of strings and returns the longest string in the array.

(5) Create a function that takes a number as input and returns true if the number is a perfect square, otherwise false.

(6) Implement a function that sorts an array of numbers in ascending order using the bubble sort algorithm.

(7) Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

(8) Create a function that takes two arrays as input and returns a new array containing only the unique elements present in both arrays.

(9) Implement a function that converts a temperature from Celsius to Fahrenheit.

(10) Write a function that takes a number as input and returns the factorial of that number. 

*/
// (1) Create a function that takes an array of numbers as input and returns the sum of all the positive numbers.

//? Solve 1

/* let arr = [10, -25, 10, 100, 541, 20, -20, 10, -51];

function posNumber() {
  let NegetiveNumber = [];
  let PostiveNumber = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= 0) {
      PostiveNumber += `${arr[i]}, `;
    } else {
      NegetiveNumber += `${arr[i]}, `;
    }
  }
  console.log(`This is Not is Postive Number ${PostiveNumber}`);
  console.log(`This is Not is Postive Number ${NegetiveNumber}`);
}

posNumber(); */

// (3) Implement a function that checks whether a given number is even or odd.

//? Solve 3

/* function checkNumber(p) {
  if (p % 2 == 0) {
    console.log(`${p} is Even Number`);
  } else {
    console.log(`${p} is Odd Number`);
  }
}

checkNumber(24);
 */

// (5) Create a function that takes a number as input and returns true if the number is a perfect square, otherwise false.

//? Solve 5

/* function perSqr(n) {
  if (n * n == n * n) {
    console.log(`${n} is perfectly square Number`);
    console.log(true);
  } else {
    console.log(`${n} is not square Number`);
    console.log(false);
  }
}

perSqr(10); */
