import CodeContent from './CodeContentType'
const leetcode49 = {
  topic: '49.Group Anagrams',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:雜湊表(時間超時)',
      '  題目給定一字串陣列，字串是由字母組成或空字串，將有相同字母的字串分成同一組。',
      '<script src="https://gist.github.com/katievin/d0e686dd1ab4db3eb2da9eaf18bed1f8.js"></script>',
      '  看到題目時，我選擇使用雜湊表，因為雜湊表搜尋最快，我先建立JS的物件當作雜湊表，利用遞迴方式將所有可能字母排列都存入雜湊表後查找，這個方法最後因為時間超時失敗，因為求取所有組合必須花費很大量的時間。'
    ),
    new CodeContent(
      '解法二:雜湊表(成功)',
      '  上面的方法因為時間超時失敗，我開始觀察輸入字串，發現分組時每組的字母數量會相同，我先將字串sort後計算字母，將計算後的答案存入雜湊表，最後成功提交答案，不過時間也是倒數5%。',
      '<script src="https://gist.github.com/katievin/c6b6d5de653d9363c108a17b1ee89f02.js"></script>',
      '  最後思考解法二有沒有可以更快的方式，我發現其實不需要計算字母數量，應該是字串sort之後就可以存入雜湊表，如果有更快的想法歡迎提供給我，謝謝。'
    )
  ]
}
export default leetcode49
