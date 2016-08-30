var primes = require('./primes')
var arrayUtil = require('./array-util')
var tools = require('./tools')

tools.benchmark(function() {
  console.log("warmup");
}, tools.logTime)

tools.benchmark(function() {
  var result = arrayUtil.sum(primes.getPrimesUpTo(2000000));
  console.log(result);
}, tools.logTime);
