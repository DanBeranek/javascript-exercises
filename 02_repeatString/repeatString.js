const repeatString = function(string, numberOfRepeats) {
  if (numberOfRepeats < 0) {
    return "ERROR"
  }


  let repeatedString = "";

  for (let i = 0; i < numberOfRepeats; i++) {
    repeatedString += string
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
