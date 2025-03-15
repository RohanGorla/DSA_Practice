// Quick sort function
function quickSort(arr) {
  //Base case for returning the array if only one or no elements are present
  if (arr.length <= 1) return arr;

  // Selecting a pivot element
  const pivotElement = arr[arr.length - 1];

  // Defining 2 empty arrays to store elements lesser and greater than the pivot element
  let lesserElements = [];
  let greaterElements = [];

  // For loop to distribute the unsorted array elements into the empty arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) lesserElements.push(arr[i]);
    else greaterElements.push(arr[i]);
  }

  // Condition to reccursively sort the array
  return [
    ...quickSort(lesserElements),
    pivotElement,
    ...quickSort(greaterElements),
  ];
}

// Unsorted / Initial array
const unsortedArray = [36, 10, 5, 90, 54, 78, 12, 15, 10];
console.log(quickSort(unsortedArray));
