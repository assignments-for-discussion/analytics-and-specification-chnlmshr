function average(numbers) {
  // filters out NaN values from the readings
  numbers = numbers.filter((number) => !isNaN(number));
  // returns average of remaining readings(if any)
  if (numbers.length) {
    return numbers.reduce((p, c) => p + c, 0) / numbers.length;
  }
  return NaN;
}

module.exports = {average};
