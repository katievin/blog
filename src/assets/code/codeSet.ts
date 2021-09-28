import leetcode1 from './Leetcode/leetcode1'
import leetcode69 from './Leetcode/leetcode69'
import leetcode38 from './Leetcode/leetcode38'
import leetcode46 from './Leetcode/leetcode46'
import leetcode48 from './Leetcode/leetcode48'
import leetcode49 from './Leetcode/leetcode49'
import leetcode50 from './Leetcode/leetcode50'
import leetcode62 from './Leetcode/leetcode62'
export const codeSet = [
  { topic: 'Leetcode', group: [leetcode1, leetcode69, leetcode38, leetcode46, leetcode48, leetcode49, leetcode50, leetcode62] },
  { topic: 'Javascript', group: [] },
  { topic: 'Php', group: [] },
  { topic: 'Flutter', group: [] }
]
export const codeSetSideBar = codeSet.map((e, index) => {
  const sidebarGroup = e.group.map((f) => {
    return { topic: f.topic, opened: false, routeName: 'CodeInfo', group: f.content.map((g) => { return { subtitle: g.subtitle, opened: false } }) }
  })
  return { topic: e.topic, routeName: 'CodePage', group: sidebarGroup, opened: false }
})
