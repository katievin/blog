import CodeContent from './CodeContentType'
const leetcode69 = {
  topic: '69.Sqrt(x)',
  type: 'Easy',
  opened: false,
  content: [
    new CodeContent(
      '解法一:二分法',
      '  題目為給定一非負整數，計算平方根(限制不能使用內建方法)\n  解答去除小數只取整數部分',
      '<script src="https://gist.github.com/katievin/34cc3a8f1dbddea731c527fa284e9325.js"></script>',
      '  我使用二分法，先設定一個上下限，若是中間數平方大於所求，則將上限設於中間數，反之將下限設於中間數\n  這題目需要注意邊界條件，所以下限設定於0，while迴圈結束條件為(rightBound - 1 > leftBound)，要不然會形成無窮迴圈。'
    )
  ]
}
export default leetcode69
