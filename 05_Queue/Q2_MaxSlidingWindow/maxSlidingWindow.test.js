var { maxSlidingWindow } = require('./maxSlidingWindow.js');

describe('20210102 每日一题', () => {
  test('示例 1', function() {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });
  test('示例 2', function () {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });
  test('示例 3', function() {
    expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1])
  });
  test('示例 4', function() {
    expect(maxSlidingWindow([9, 11], 2)).toEqual([11]);
  });
  test('示例 5', function() {
    expect(maxSlidingWindow([4, -2], 2)).toEqual([4]);
  });
});