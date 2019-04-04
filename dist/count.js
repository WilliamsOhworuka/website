"use strict";

function count() {
  var sum = 0;

  for (var i = 0; i < 10; i += 1) {
    sum += i;
  }

  return sum;
}

module.exports = count;