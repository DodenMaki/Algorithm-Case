var { largestRectangleArea } = require('./largestRectangleArea.js');

describe('84. 柱状图中最大的矩形', () => {
  test('示例 1', function() {
    expect(largestRectangleArea([2,1,5,6,2,3])).toBe(10);
  });
});
