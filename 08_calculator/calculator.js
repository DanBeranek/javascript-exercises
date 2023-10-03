const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(number => sum += number);
  return sum;
};

const multiply = function(array) {
  let product = array[0];
  array.slice(1).forEach(number => product *= number);
  return product;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
	if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
