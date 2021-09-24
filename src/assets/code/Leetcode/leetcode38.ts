import CodeContent from './CodeContentType'
const leetcode38 = {
  topic: '38.Count and Say',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:遞迴',
      '  題目為給定一數字n，這個數字唸法取決於n-1，例如n=5時，n的唸法為計算n-1的唸法，計算方式為從左到右計算。\n  當n=2時要去看n-1唸法為"1",所以n=2唸法為"11"，因為計算唸法"1"為「一個1」，所以"11"為數量1數字1。\n  這題目我剛開始看時也不太瞭解題意，最重要的就是當題目要求n，答案為計算n-1的唸法(所以英文題目才會是count and say)',
      '<script src="https://gist.github.com/katievin/27462b0138e35a7094083a410e305066.js"></script>',
      '  因為此題為計算n-1唸法，若是能直接知道n-1為多少，就可以計算出來，不過撰寫此題時，我想不到任何方法，可以從中間直接獲取n-1的方法，所以我的方式會是都直接從1開始查找，所以程式碼下方for迴圈處就是會執行n-1次，每次for迴圈執行會把前次迴圈的答案拿去遞迴，用來找到唸法。\n  若是您有任何可以更快方式歡迎聯絡我，謝謝！。'
    )
  ]
}
export default leetcode38
