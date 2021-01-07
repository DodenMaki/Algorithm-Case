var { fib } = require('./fib.js');

describe('剑指 Offer 10-I. 斐波那契数列', () => {
  test('示例 1', function() {
    expect(fib(2)).toBe(1);
  });
  test('示例 2', function() {
    expect(fib(5)).toBe(5);
  });
});
