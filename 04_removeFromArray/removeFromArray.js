const removeFromArray = function(array, ...deleteValues) {
  return array.filter(value => !deleteValues.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
