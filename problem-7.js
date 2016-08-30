var tools = require('./lib/tools')
var primes = require('./lib/primes')

tools.benchmark(function() {
  console.log('The 10,001th prime: ' + primes.getNthPrime(10001))
}, function(start, end) {
  console.log('Time: ' + (end - start) + 'ms')
})
