class CodeContent {
    subtitle:string|null;
    contentBeforeCode:string|null;
    code:string|null;
    contentAfterCode:string|null;
    constructor (subtitle:string|null, contentBeforeCode:string|null, code:string|null, contentAfterCode:string|null) {
      this.subtitle = subtitle
      this.contentBeforeCode = contentBeforeCode
      this.code = code
      this.contentAfterCode = contentAfterCode
    }
}
class sideBarContent {
    subtitle:string|null;
    contentBeforeCode:string|null;
    code:string|null;
    contentAfterCode:string|null;
    constructor (subtitle:string|null, contentBeforeCode:string|null, code:string|null, contentAfterCode:string|null) {
      this.subtitle = subtitle
      this.contentBeforeCode = contentBeforeCode
      this.code = code
      this.contentAfterCode = contentAfterCode
    }
}
const leecode1 = {
  topic: '1.Two Sum',
  type: 'Easy',
  opened: false,
  content: [
    new CodeContent(
      '解法一:遞迴',
      '  題目為給定一數字陣列，和一目標數字，找到陣列兩數相加「等於」目標數字，題目假設一定會有唯一解，不許使用同一陣列數字兩次。\n  解答回傳「索引陣列」。',
      '<script src="https://gist.github.com/katievin/19ae7a7dbfd5476f97eb62d812d5367e.js"></script>',
      null
    )
  ]
}
export default leecode1
