// Function to sort array using Insertion sort algorithm
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Store current element to check
    const currentElement = arr[i];

    // Set the index to start comparing
    let j = i - 1;

    // While loop to shift larger elements to the right
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Finally place the current element in it's right position
    arr[j + 1] = currentElement;
  }

  // Return sorted array
  return arr;
}

// Unsorted / Initial array
const unSortedArray = [36, 10, 5, 90, 54, 78, 12, 15, 10];

console.log(`Sorted array -> `, insertionSort(unSortedArray));
