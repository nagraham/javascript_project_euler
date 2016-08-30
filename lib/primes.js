// Get the Nth prime
// input: [integer] the number representing the Nth prime you want
// output: [integer] the Nth prime
function getNthPrime(num) {
  return getPrimesUpTo(estimateNumberOfPrimes(num))[num - 1];
}

// Provides a rough estimate of the number of primes up to a given n.
// NOTE: This is not based on a real mathmatic formula, but observations
// I made while fucking around with my "getPrimesUpTo" function. Seems good enough.
// input: a number
// output: an estimate that is guaranteed to be AT LEAST the exact number of primes.
function estimateNumberOfPrimes(n) {
  return n <= 2 ? n + 1 : Math.ceil(Math.log(n) * n * 1.25)
}

// Gets all prime factors for a given number
// input: [integer] the number to get prime factors for
// output: [Array, integers] all the prime factors
function getPrimeFactors(num) {
  var primes = getPrimesUpTo(Math.floor(Math.sqrt(num)));
  return primes.filter(function(prime) { return num % prime === 0 });
}

// Calculate all primes up to a given number
// onput: [integer] The number to get primes up to (and including)
// output: [Array, integers] the prime numbers
function getPrimesUpTo(num) {
  if (num < 2) { return [] };
  if (num < 3) { return [2] };
  var primes = [2, 3];

  for (var i = 5; i <= num; i += 2) {
    if (isPrime(i)) primes.push(i);
  }

  // "Sieve" algorithm: inner function uses existing primes to cull non-primes
  function isPrime(int) {
    var largestPrime = Math.sqrt(int);
    for (var j = 0; j < primes.length; j++) {
      var prime = primes[j];
      if (prime > largestPrime) {
        break;
      } else if (int % prime === 0) {
        return false;
      }
    }
    return true;
  }

  return primes;
}

// Determines if a number is prime
// input: [integer] The number to check
// output: [boolean]
function isPrime(num) {
  var primes = getPrimesUpTo(Math.floor(Math.sqrt(num)));
  return primes.every(function(prime) {
    return num % prime !== 0;
  })
}

module.exports = {
  getNthPrime: getNthPrime,
  getPrimeFactors: getPrimeFactors,
  getPrimesUpTo: getPrimesUpTo,
  isPrime: isPrime
}
