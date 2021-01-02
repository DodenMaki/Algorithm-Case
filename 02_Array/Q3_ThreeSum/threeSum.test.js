var { threeSum } = require('./threeSum.js');

describe('15. 三数之和', () => {
  test('示例 1', function() {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2],[-1, 0, 1]]);
  });
});