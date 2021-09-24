import CodeContent from './CodeContentType'
const leetcode48 = {
  topic: '48.Rotate Image',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:雙迴圈',
      '  題目給定一組二層陣列，可以組成n*n方陣，答案要求某種轉置矩陣。\n  題目要求不能使用額外的矩陣，要直接操作輸入矩陣。',
      '<script src="https://gist.github.com/katievin/8937c85bfe994233463a6328ca584d43.js"></script>',
      '  我先reverse目標矩陣，將答案經過雙層迴圈push在目標矩陣後，最後再把題目刪除，這種方法可能符合題意，但應該不是出題者所期望的答案。'
    ),
    new CodeContent(
      '解法二:雙迴圈',
      '  題目的要求為不使用reverse，我認為是不能使用新陣列後reverse，若有任何能不使用reverse的方法歡迎迎提供給我，謝謝！',
      '<script src="https://gist.github.com/katievin/d2a85c5b5333de2b08323447367720a2.js"></script>',
      '  上面方法也是利用雙迴圈，第一次雙迴圈可以求得目標矩陣的轉置矩陣，第二個雙迴圈可以將各矩陣分別reverse。\n  第二個方法應該較符合題目的要求。'
    )
  ]
}
export default leetcode48
