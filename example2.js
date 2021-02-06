// Example 2
// Find the maximum number of an array

function myFunction( input ) {
    var max = input[0];
    for(var i = 0; i < input.length; i++) {
       if(input[i] >= max) {
          max = input[i];
       }
    }
    return max;
 }


// Test Cases

myFunction([1,2,3])
// Expected 3

myFunction([10,1000,100])
// Expected 1000

myFunction([-10,-2,-11])
// Expected -2