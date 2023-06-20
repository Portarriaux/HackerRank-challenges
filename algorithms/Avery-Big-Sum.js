function aVeryBigSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(aVeryBigSum([5, 5, 6, 7]));
