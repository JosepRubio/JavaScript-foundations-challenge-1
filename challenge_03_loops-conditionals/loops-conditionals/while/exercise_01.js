/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let number = 10;
while (number <= 40) {
  if (number % 2 === 0) console.log("even: ", number);
  else if (number % 2 === 1) console.log("odd: ", number);
  number++;
}
/*let number = 10;
while (number <= 40) {
  if (number % 2 === 0) console.log("even: ", number);
  number++;
}
let numberodd = 10;
while (numberodd <= 40) {
  if (numberodd % 2 === 1) console.log("odd: ", numberodd);
  numberodd++;
}*/
