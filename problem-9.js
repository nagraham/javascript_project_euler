var tools = require('./lib/tools')
var arrayUtil = require('./lib/array-util')

function isPythagoreanTriplet(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}

// Given a integer N, get all combinations of 3 numbers such that
//   (a < b < c) AND a + b + c == N
// input [integer]
// output [array, Arrays] Returns arrays of 3 integers meeting criteria
function tripletCombinations(n) {
  var combos = []

  for (var a = 1; a < n / 3; a++) {
    c = n - (a * 2) - 1
    for (var b = a + 1; b < c; b++, c--) {
      combos.push([a, b, c])
    }
  }

  return combos;
}

// For a given m, pass in 1..(m-1) as n. If m is odd, n should be even, and
// vise versa. M should be bigger than "n"
// input: [number] "m"
// input: [number] "n"
// input: [number](optional) scalar to generate larger triplets.
function generatePythagoreanTriplet(m, n, s) {
  var s = s || 1
  return [
    s * (Math.pow(m, 2) - Math.pow(n, 2)),
    2 * s * m * n,
    s * (Math.pow(m, 2) + Math.pow(n, 2))
  ].sort(function(a, b) { return a > b })
}

tools.benchmark(function() {
  console.log('Warm up')
}, tools.logTime)

tools.benchmark(function() {
  console.log(tripletCombinations(12).filter(function(arr) { return isPythagoreanTriplet.apply(this, arr) } ))
}, tools.logTime)

tools.benchmark(function() {
  console.log(arrayUtil.product(tripletCombinations(1000).filter(function(arr) { return isPythagoreanTriplet.apply(this, arr) } )[0]))
}, tools.logTime)
