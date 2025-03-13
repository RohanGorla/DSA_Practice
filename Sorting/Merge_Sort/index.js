// Function to reccursively divide the unsorted array
function divideArray(arr) {
  // Base condition to return array if only one element present
  if (arr.length <= 1) return arr;

  // Get the middle index of the array
  const middleIndex = Math.floor(arr.length / 2);

  // Get the array parts on the left and right side of the middle
  const leftPart = arr.slice(0, middleIndex);
  const rightPart = arr.slice(middleIndex);

  // Reccursive array division
  return mergeArrays(divideArray(leftPart), divideArray(rightPart));
}

// Function to sort and merge individual array parts
function mergeArrays(left, right) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  // Loop over the left and right array parts and sort the elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // Return the sorted array along with the left over elements in both arrays if there are any
  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Unsorted / Initial array
const unSortedArray = [36, 10, 5, 90, 54, 78, 12, 15, 10];
console.log(`Fully sorted array -> `, divideArray(unSortedArray));
