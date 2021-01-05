var { myAtoi } = require('./myAtoi.js');

describe('8. 字符串转换整数 (atoi)', () => {
  test('示例 1', function() {
    expect(myAtoi('42')).toBe(42);
  });
  test('示例 2', function() {
    expect(myAtoi(' -42')).toBe(-42);
  });
  test('示例 3', function() {
    expect(myAtoi('4193 with words')).toBe(4193);
  });
  test('示例 4', function() {
    expect(myAtoi('words and 987')).toBe(0);
  });
  test('示例 5', function() {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
  });
});
