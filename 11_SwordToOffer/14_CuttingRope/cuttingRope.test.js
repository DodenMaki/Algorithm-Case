var { cuttingRope } = require('./cuttingRope.js');

describe('剑指 Offer 14. 剪绳子', () => {
  test('示例 1', function() {
    expect(cuttingRope(2)).toBe(1);
  });
  test('示例 2', function() {
    expect(cuttingRope(10)).toBe(36);
  });
});
