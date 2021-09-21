import leecode1 from './Leetcode/leecode1'
export const codeSet = [
  { topic: 'Leecode', group: [leecode1] },
  { topic: 'Javascript', group: [] },
  { topic: 'Php', group: [] },
  { topic: 'Flutter', group: [] }
]
export const codeSetSideBar = codeSet.map((e, index) => {
  const sidebarGroup = e.group.map((f) => {
    return { topic: f.topic, opened: false, group: f.content.map((g) => g.subtitle) }
  })
  return { topic: e.topic, group: sidebarGroup, opened: false }
})
