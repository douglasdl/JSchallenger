// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(number) {
    if(number % 2 == 0) {
       return true;
    } else {
       return false;
    }
 }


// Test Cases:

myFunction(10)
// Expected true

myFunction(-4)
// Expected true

myFunction(5)
//Expected false

myFunction(-111)
// Expected false