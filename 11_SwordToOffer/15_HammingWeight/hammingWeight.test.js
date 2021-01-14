var { hammingWeight } = require('./hammingWeight.js');

describe('剑指 Offer 15. 二进制中 1 的个数', () => {
  test('示例 1', function() {
    expect(hammingWeight('00000000000000000000000000001011')).toBe(3);
  });
  test('示例 2', function() {
    expect(hammingWeight('00000000000000000000000010000000')).toBe(1);
  });
  test('示例 2', function() {
    expect(hammingWeight('11111111111111111111111111111101')).toBe(31);
  });
});
