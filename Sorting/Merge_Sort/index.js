function divideArray(arr) {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, middleIndex);
  const rightPart = arr.slice(middleIndex);
}

const unSortedArray = [36, 10, 5, 90, 54, 78, 12, 15, 10];
