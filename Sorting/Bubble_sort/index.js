// Timer start
const start = performance.now();

// Function to sort using bubble sort algorithm
function bubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const elementsToSwap = [arr[j], arr[j + 1]];
        arr[j] = elementsToSwap[1];
        arr[j + 1] = elementsToSwap[0];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  // Return sorted array
  return arr;
}

// Unsorted / Initial array
const arrayToSort = [36, 10, 5, 90, 54, 78, 12, 15, 10];

// Sorted array
const sortedArray = bubbleSort(arrayToSort);
// Timer end and time calculation
const end = performance.now();
const timeTaken = end - start;

console.log(
  "Sorted array -> ",
  sortedArray,
  "\n",
  `Time taken -> ${timeTaken.toFixed(6)}ms || ${(timeTaken / 1000).toFixed(6)}s`
);
