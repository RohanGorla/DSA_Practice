// Code to find the first 'N' fibonacci values and their sum!

let N = 5; //Number of Fibonacci values you want!
let initialValues = [0, 1];


// Fibonacci function
function fibonacci(first, second, total) {
  let nextValue = first + second; // This gives the next number in the series!
  total += nextValue; // This updates the total sum
  initialValues.push(nextValue);
  if (initialValues.length === N) { // Checks if the required 'N' values have been fetched?
    return total; // If fetched it returns the total accumulated until now!
  } else {
    return fibonacci(second, nextValue, total); // If not it sends the recent value and the previous one to the next iteration!
  }
}

let finalValue = fibonacci(0, 1, 1); //First function call

// Final Outputs:
console.log(`Final sum of first ${N} numbers in Fibonacci series -> `, finalValue);
console.log(`First ${N} Fibonacci values -> ` ,initialValues);
