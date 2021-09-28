import CodeContent from './CodeContentType'
const leetcode62 = {
  topic: '62.Unique Paths',
  type: 'Medium',
  opened: false,
  content: [
    new CodeContent(
      '解法一:遞迴',
      '  題目為給定二數字m,n，計算在m*n矩陣中，起始點為左上(0, 0)終點為(m, n)，方向只有往右和往下，共有幾組唯一的方法。\n  我觀察一下，發現這其實是高中所學排列組合，例如「庭院深深深幾許」共有幾組唯一的排列，答案為(7!/3!)，利用類似的算法即可求解出這個題目。',
      '<script src="https://gist.github.com/katievin/708fb82f73ca25446e39f100145a23c6.js"></script>',
      '  注意邊界條件，若m,n只要有一個為1，路線都只會有一條。'
    )
  ]
}
export default leetcode62
