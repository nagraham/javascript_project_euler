var primes = require('./primes')

console.log(primes.getPrimeFactors(13195));

// Answer
var primeFactors = primes.getPrimeFactors(600851475143)
console.log(primeFactors[primeFactors.length - 1]);
