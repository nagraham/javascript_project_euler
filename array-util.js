
// Generates all N-sized combinations from the array
// input [array]: the array of stuff
// input [integer]: the size of the combinations
// output [array, arrays]: An array of the combinations of elements
function combinations(arr, n) {
  var combos = []
  for (var i = 0; i + n <= arr.length; i++) {
    combos.push(arr.slice(i, i + n))
  }
  return combos;
}

// Multiplies all values in the array.
// input [array, Integers]
// output [integer] the product
function product(nums) {
  return nums.reduce(function(prod, curr) { return prod *= curr })
}

// Create a range of integers from start to end.
// input: [integers] start number
// input: [integers] end number
// output: [array] Array of numbers
function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

// Sums all values in the array
// input: [array, integers] array to sum
// output: [integer] the sum
function sum(nums) {
  return nums.reduce(function(sum, curr) { return sum += curr });
}

module.exports = {
  combinations: combinations,
  product: product,
  range: range,
  sum: sum
}
