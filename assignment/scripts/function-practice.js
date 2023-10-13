console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('***** Q1 *****');
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('***** Q2 *****');
function helloName(name) {
  console.log('in helloName:', name);
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('running helloName:', helloName('James'));

// 3. Function to add two numbers together & return the result
console.log('***** Q3 *****');
function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumbers:', firstNumber, secondNumber);
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('running addNumbers:', addNumbers(2,6));

// 4. Function to multiply three numbers & return the result
console.log('***** Q4 *****');
function multiplyThree(num1, num2, num3) {
  console.log('in multiplyThree:', num1, num2, num3);
  return num1 * num2 * num3;
}
console.log('running multiplyThree:', multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('***** Q5 *****');
function isPositive(number) {
  console.log('in isPositive:', number);
  if (number > 0) {
    return true;
  }
  else if (number <= 0) {
    return false;
  }
  return;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('running isPositive: ', isPositive(5));
console.log('running isPositive: ', isPositive(-5));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('***** Q6 *****');
function getLast(array) {
  console.log('in getLast: ', array);
  if (array.length !== 0) {
    return array[array.length - 1];
  }
  else {
    return 'undefined';
  }
}
console.log('running array: ', getLast([1, 3, 'value to be returned']));
console.log('running array: ', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('***** Q7 *****');
function find(value, array) {
  for (let i of array) {
    console.log('in array loop', array[i]);
    if (i === value) {
      return true;
    }
  }
  return false;
}
console.log('running find: ', find(3, [1, 2, 3]));
console.log('running find: ', find(5, [1, 2, 3]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('in isFistLetter, letter is:', letter, ', string is:', string);
  if (letter === string.charAt(0)) {
    return true;
  }
  else
    return false;
}

console.log('running isFirstLetter: ', isFirstLetter('a', 'animal'));
console.log('running isFirstLetter: ', isFirstLetter('x', 'animal'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    console.log('in sumAll loop', array[i]);
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}

console.log('the sum is:', sumAll[1, 2, 3])

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
