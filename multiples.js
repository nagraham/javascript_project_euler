
// Returns the smallest number that can be divided from all numbers in the range.
// @param[number] start of range
// @param[number] end of range
// @return[number] smallest multiple
function getSmallestMultipleFromRange(a, b) {
  if (a > b) throw 'Invalid range'

  var multiple = a,
      numbers = []

  for (var num = a + 1; num <= b; num++) {
    if (multiple % num !== 0) {
      multiple *= getSmallestDivisorFromArray(num, numbers)
    }
    numbers.push(num)
  }

  return multiple;
}

// Returns smallest divisor of a given numbers from an array of numbers
// @param[number] the multiple
// @param[Array, numbers] the possible divisors
function getSmallestDivisorFromArray(multiple, numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (multiple % numbers[i] === 0) return numbers[i]
  }
  return multiple
}

module.exports = {
  getSmallestMultipleFromRange: getSmallestMultipleFromRange,
  getSmallestDivisorFromArray: getSmallestDivisorFromArray
}
