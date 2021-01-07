var { MyQueue } = require('./myQueue.js');

var myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);

describe('84. 柱状图中最大的矩形', () => {
  test('示例 1', function() {
    expect(myQueue.peek()).toBe(1);
  });
  test('示例 2', function() {
    expect(myQueue.pop()).toBe(1);
  });
  tes('示例 3', function () {
    expect(myQueue.empty()).toBeFalsey();
  });
});
