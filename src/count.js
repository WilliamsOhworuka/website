const count = (a) => {
  if (a) {
    let sum = 0;
    for (let i = 0; i < 10; i += 1) {
      sum += i;
    }
    return sum;
  }
  return 0;
};

module.exports = count;