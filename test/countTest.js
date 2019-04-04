const assert = require('assert');
const count = require('../count.js');

/* eslint-env mocha */
describe('simple mocha test', () => {
  it('it should be equal to 45', () => {
    assert.equal(count(), 45);
  });
});