
var { trap } = require('./trap.js');

describe('42. 接雨水', () => {
  test('示例 1', function() {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  });
  test('示例 2', function() {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
  });
});