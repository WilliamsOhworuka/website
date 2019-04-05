"use strict";

var count = function count(a) {
  if (a) {
    var sum = 0;

    for (var i = 0; i < 10; i += 1) {
      sum += i;
    }

    return sum;
  }

  return 0;
};

module.exports = count;