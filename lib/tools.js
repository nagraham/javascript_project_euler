// Measures the performance of a function
// input: [function] The function to measure performance for.
// input: [function] Callback function takes start and end times.
// output: [Object] Object with 2 keys: "start" and "end"
function benchmark(func, callback) {
  var startTime = Date.now();
  func.call();
  var endTime = Date.now();
  if (isFunction(callback)) {
    callback.call(this, startTime, endTime);
  }
  return { start: startTime, end: endTime };
}

// input: [object] Anything
// output: [boolean] Whether the input is a function
function isFunction(maybeFunc) {
  return maybeFunc && maybeFunc instanceof Function;
}

// Logs the time to the console.
// input: [date] start time
// input: [date] end time
// side-effect: a message is printed to the console
// output: [integer] difference in ms between the start/end
function logTime(start, end) {
  console.log("Time: " + (end - start) + "ms")
  return end - start;
}

module.exports = {
  benchmark: benchmark,
  isFunction: isFunction,
  logTime: logTime
}
