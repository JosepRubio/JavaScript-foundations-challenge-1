/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

const isEvenLoop = function (lowThreshold, highThreshold) {
  for (let number = lowThreshold; number < highThreshold; number++) {
    if (number % 2 === 0) {
      console.log(`Number ${number} is even`);
    }
  }
};

const isOddLoop = function (lowThreshold, highThreshold) {
  for (let number = lowThreshold; number < highThreshold; number++) {
    if (number % 2 !== 0) {
      console.log(`Number ${number} is odd`);
    }
  }
};

console.log("--- Is EVEN or ODD loop Program ---");

const startAt = 10;
const endAt = 40;

isEvenLoop(startAt, endAt);
isOddLoop(startAt, endAt);

console.log("--- Is EVEN or ODD loop complete ---");

