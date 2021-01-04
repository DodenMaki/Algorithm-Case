var { validPalindrome } = require('./validPalindrome.js');

describe('680. 验证回文字符串 Ⅱ', () => {
  test('示例 1', function() {
    expect(validPalindrome('aba')).toBeTruthy();
  });
  test('示例 2', function() {
    expect(validPalindrome('abca')).toBeTruthy();
  });
});