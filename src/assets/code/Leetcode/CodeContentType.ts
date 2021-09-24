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
export default CodeContent
