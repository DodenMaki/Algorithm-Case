var { MinStack } = require('./minStack.js');

var minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3)

describe('739. 每日温度', () => {
  test('示例 1', function() {
    expect(minStack.getMin()).toBe(-3);
  });
});
