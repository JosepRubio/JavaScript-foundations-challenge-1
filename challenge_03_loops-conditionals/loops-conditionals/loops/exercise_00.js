/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

for (let numberToCheck = 10; numberToCheck < 40; numberToCheck++) {
  if (numberToCheck % 2 === 0) {
    console.log(numberToCheck + " is even");
  }
}

for (let numberToCheck = 10; numberToCheck < 40; numberToCheck++) {
  if (numberToCheck % 2 !== 0) {
    console.log(numberToCheck + " is odd");
  }
}
