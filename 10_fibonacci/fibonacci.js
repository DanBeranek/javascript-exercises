const fibonacci = function(n) {
  if (n < 0) return 'OOPS';
  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1]);
  }
  return sequence[sequence.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
