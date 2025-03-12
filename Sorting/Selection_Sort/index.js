// Function to sort array using selection sort.
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValueIndex] > arr[j]) minValueIndex = j;
    }
    if (minValueIndex !== i) {
      const elementsToSwap = [arr[i], arr[minValueIndex]];
      arr[i] = elementsToSwap[1];
      arr[minValueIndex] = elementsToSwap[0];
    }
  }
  return arr;
}

// Unsorted / Initial array
const unSortedArray = [36, 10, 5, 90, 54, 78, 12, 15, 10];
console.log("Sorted array -> ", selectionSort(unSortedArray));
