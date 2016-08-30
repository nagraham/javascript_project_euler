var primes = require('./lib/primes')
var arrayUtil = require('./lib/array-util')
var tools = require('./lib/tools')

tools.benchmark(function() {
  console.log("warmup");
}, tools.logTime)

tools.benchmark(function() {
  var result = arrayUtil.sum(primes.getPrimesUpTo(2000000));
  console.log(result);
}, tools.logTime);
