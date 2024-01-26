function calculateSum(arr) {
  let sum = 0;
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      sum += calculateSum(val);
    } else {
      sum += val;
    }
  });

  return sum;
}

const givenSum = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
const result = calculateSum(givenSum);

console.log("Total sum:", result);
