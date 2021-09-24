import CodeContent from './CodeContentType'
const leetcode46 = {
  topic: '46.Permutations',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:遞迴',
      '  題目為給定一相異的數字陣列，找出所有可能的排列組合。',
      '<script src="https://gist.github.com/katievin/2f315839e68c5b5dc97520fca689c3b8.js"></script>',
      '  我使用遞迴的方法，遞迴可以將數字依序取出，裡面配合for迴圈就可以取得所有種類，\u25BA要注意遞迴時傳入的函數，我這裡是分別淺拷貝目標陣列跟已加入陣列。\n  目標陣列處理：因為必須從陣列中取出一個數字後淺拷貝，推薦使用filter。'
    )
  ]
}
export default leetcode46
