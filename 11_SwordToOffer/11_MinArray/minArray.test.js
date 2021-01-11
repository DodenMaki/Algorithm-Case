var { minArray } = require('./minArray.js');

describe('剑指 Offer 10-2. 青蛙跳台阶问题', () => {
  test('示例 1', function() {
    expect(minArray([3, 4, 5, 1, 2])).toBe(1);
  });
  test('示例 2', function() {
    expect(minArray([2, 2, 2, 0, 1])).toBe(0);
  });
});
