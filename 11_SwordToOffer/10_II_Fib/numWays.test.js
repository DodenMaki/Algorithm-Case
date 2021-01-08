var { numWays } = require('./numWays.js');

describe('剑指 Offer 10-2. 青蛙跳台阶问题', () => {
  test('示例 1', function() {
    expect(numWays(2)).toBe(2);
  });
  test('示例 2', function() {
    expect(numWays(7)).toBe(21);
  });
  test('示例 2', function() {
    expect(numWays(0)).toBe(1);
  });
});
