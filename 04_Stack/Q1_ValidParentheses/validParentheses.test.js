var { isValid } = require('./validParentheses.js');

describe('20. 有效的括号', () => {
  test('示例 1', function() {
    expect(isValid('()')).toBeTruthy();
  });
  test('示例 2', function() {
    expect(isValid('()[]{}')).toBeTruthy();
  });
  test('示例 3', function() {
    expect(isValid('(]')).toBeFalsy();
  });
  test('示例 4', function() {
    expect(isValid('([)]')).toBeFalsy();
  });
  test('示例 5', function() {
    expect(isValid('{[]}')).toBeTruthy();
  });
});
