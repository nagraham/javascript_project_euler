var arrayUtil = require('./lib/array-util')

// input: an Array of numbers
// output: the sum of the squares of all numbers in the array
function sumOfSquares(arr) {
  return arr.reduce(function(prev, curr) {
    return prev + (curr * curr)
  })
}

// input: an Array of numbers
// output: the square of the sum of all numbers in the array
function squareOfSum(arr) {
  return Math.pow(arrayUtil.sum(arr), 2)
}

var sequence = arrayUtil.range(1, 100)
console.log("Result: " + (squareOfSum(sequence) - sumOfSquares(sequence)));
