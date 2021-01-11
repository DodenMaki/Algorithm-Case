var { exist } = require('./exist.js');

describe('剑指 Offer 12. 矩阵中的路径', () => {
  test('示例 1', function() {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBeTruthy();
  });
  test('示例 2', function() {
    expect(exist([["a","b"],["c","d"]], "abcd")).toBeFalsey();
  });
});
