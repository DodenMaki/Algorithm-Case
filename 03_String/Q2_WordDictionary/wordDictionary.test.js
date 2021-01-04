var { WordDictionary } = require('./wordDictionary.js');

var wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');

describe('211. 添加与搜索单词 - 数据结构设计', () => {
  test('示例 1', function() {
    expect(wordDictionary.search('pad')).toBeFalsey();
  });
  test('示例 2', function() {
    wordDictionary.search('bad').toBeTruthy();
  });
  test('示例 3', function() {
    wordDictionary.search('.ad').toBeTruthy();
  });
  test('示例 4', function() {
    wordDictionary.search('b..').toBeTruthy();
  });
});
