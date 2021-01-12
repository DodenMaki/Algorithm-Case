var { movingCount } = require('./movingCount.js');

describe('剑指 Offer 13. 机器人的运动范围', () => {
  test('示例 1', function() {
    expect(movingCount(2, 3, 1)).toBe(3);
  });
  test('示例 2', function() {
    expect(movingCount(3, 1, 0)).toBeFalsey(3);
  });
});
