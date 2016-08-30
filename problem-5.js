var tools = require('./lib/tools');
var multiples = require('./lib/multiples');

tools.benchmark(function() {
  console.log('Smallest multiple of 20-25:');
  console.log(multiples.getSmallestMultipleFromRange(20, 25));
}, function(start, end) {
  console.log("Time: " + (end - start) + "ms")
});

tools.benchmark(function() {
  console.log('Smallest multiple of 1-10:');
  console.log(multiples.getSmallestMultipleFromRange(1, 10));
}, function(start, end) {
  console.log("Time: " + (end - start) + "ms")
});

tools.benchmark(function() {
  console.log('Smallest multiple of 1-20:');
  console.log(multiples.getSmallestMultipleFromRange(1, 20));
}, function(start, end) {
  console.log("Time: " + (end - start) + "ms")
});
