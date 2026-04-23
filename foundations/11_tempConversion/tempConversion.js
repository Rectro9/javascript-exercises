const convertToCelsius = function(num) {
  let formula = ((num - 32) * 5/9).toFixed(1)
  let result = Number(formula)
  return result
};

const convertToFahrenheit = function(num) {
  let formula = ((num * 1.8) + 32).toFixed(1)
  let result = Number(formula)
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
