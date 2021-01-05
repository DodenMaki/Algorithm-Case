/**
 * 680. 验证回文字符串 Ⅱ
 * LeetCode：https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/
 */

/**
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 * 实现词典类 WordDictionary ：
 * WordDictionary() 初始化词典对象
 * void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 * bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母
 * 
 * 示例 1：
 * 输入：["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
 *      [[], ["bad"], [“dad"], [“mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
 * 输出：[null, null, null, null, false, true, true, true]
 * 解释：WordDictionary wordDictionary = new WordDictionary();
 *      wordDictionary.addWord("bad");
 *      wordDictionary.addWord("dad");
 *      wordDictionary.addWord("mad");
 *      wordDictionary.search("pad");        // return False
 *      wordDictionary.search("bad");        // return True
 *      wordDictionary.search(".ad");        // return True
 *      wordDictionary.search("b..");        // return True
 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.word = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    this.words[word.length] = [word];
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if (!this.words[word.length]) {
    return false;
  }

  var len = word.length;
  if (!word.includes('.')) {
    return this.words[len].includes(word);
  }

  var reg = new RegExp(word);
  return this.words[len].some(item => reg.test(item));
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

 module.exports = {
  WordDictionary,
 };
 