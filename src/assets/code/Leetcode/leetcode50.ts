import CodeContent from './CodeContentType'
const leetcode50 = {
  topic: '50.Pow(x, n)',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:遞迴',
      '  題目為給定二數字x,n，計算x^n',
      '<script src="https://gist.github.com/katievin/286e45cbcbdc4c4e62aacef37f968040.js"></script>',
      '  此題遞迴時間複雜度為O(n)，n範圍為小於2^31，所以我第一次提交答案就因為遞迴執行次數過多被退回，後來我設定一個十萬次數的上限，就可以成功提交答案，速度排名為82%左右。'
    ),
    new CodeContent(
      '解法一:遞迴配合二分法',
      '  由於上一解法的十萬上限不精準，我就從答案去了解一下上限的設計。\n  若n=20,上限設計成2會遞迴約2+10次，為20的因數相加，想要找到最小遞迴次數，我認為使用n的平方根會能找到最小遞迴次數。\n  可以先參考Leetcode69，裡面使用二分法求解平方根，所以依照平方根為上限來計算，遞迴的時間複雜度就變成根號n。',
      '<script src="https://gist.github.com/katievin/819188b035aab30760982627bd836144.js"></script>',
      '  使用此種方法，能成功提交答案，速度為70%左右，如果有非原生更快速的方法，麻煩提供給我，謝謝。'
    )
  ]
}
export default leetcode50
