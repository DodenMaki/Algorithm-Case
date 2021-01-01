var { twoSum } = require('./twoSum.js');

describe('1. 两数之和', () => {
  test('示例 1', function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});