var { merge } = require('./mergeIntervals.js');

describe('56. 合并区间', () => {
  test('示例 1', function() {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });
  test('示例 2', function() {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]])
  })
});