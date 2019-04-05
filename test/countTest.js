const assert = require('assert');
const count = require('../src/count.js');

/* eslint-env mocha */
describe('simple mocha test', () => {
  it('it should be equal to 0', () => {
    assert.equal(count(), 0);
  });

  it('it should be equal to 45', () => {
    assert.equal(count(1), 45);
  });
});