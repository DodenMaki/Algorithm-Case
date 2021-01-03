
var { replaceSpace } = require('./replaceSpace');

describe('剑指 offer 05. 替换空格', () => {
  test('示例 1', function() {
    expect(replaceSpace("We are happy")).toEqual("We%20are%20happy");
  });
});