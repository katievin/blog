<template>
  <div class="l-page">
    <Navbar @sidebarSwitch="sidebarSwitch"></Navbar>
    <Sidebar :focusArray="focusArray" @showCodeSubtitle="showCodeSubtitle"></Sidebar>
    <div class="l-normal__container">
      <div class="c-codepage__container" :class="{'c-codepage__container--moved':containerMoved}">
          <div class="c-codeinfo__container" id="abcaaa" @scroll="contentScroll">
            <div class="c-codeinfo__topic">{{codeContent.topic.split('.')[1]}}</div>
            <div class="c-codeinfo__type">{{codeContent.type}}</div>
            <div v-for="(t,index) in codeContent.content" :key="index" class="c-codeinfo__content">
                <div class="c-codeinfo__subtitle">{{t.subtitle}}</div>
                <div class="c-codeinfo__text">{{t.contentBeforeCode}}</div>
                <Gist @gistLoaded="gistLoaded" :gistUrl="t.code" :gistArray="[codeTypeIndex,codeListIndex,index]"></Gist>
                <div class="c-codeinfo__text">{{t.contentAfterCode}}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Gist from '../components/Gist.vue'
import { codeSet } from '../assets/code/codeSet'

export const CodeInfo = defineComponent({
  name: 'CodeInfo',

  components: ({
    Navbar,
    Sidebar,
    Gist
  }),

  setup () {
    const router = useRouter()
    const codeTypeIndex = computed(() => Number(router.currentRoute.value.params.typeIndex))
    const codeListIndex = computed(() => Number(router.currentRoute.value.params.index))
    const codeContent = computed(() => {
      return codeSet[codeTypeIndex.value].group[codeListIndex.value]
    }
    )
    const containerMoved = ref<boolean>(false)
    const subtitleIndex = ref<number>(0)
    watch(() => codeListIndex.value, () => { subtitleIndex.value = 0 })
    const focusArray = computed(() => { return [0, codeTypeIndex.value, codeListIndex.value, subtitleIndex.value] })
    const sidebarSwitch = () => {
      containerMoved.value = !containerMoved.value
    }
    const showCodeSubtitle = (indexArray:number[]) => {
      if (indexArray[indexArray.length - 1] !== subtitleIndex.value) {
        subtitleIndex.value = indexArray[indexArray.length - 1]
      }
      // 選擇滑動時
      if (!watchScroll.value) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          watchScroll.value = true
        }, 1000)
      }
      watchScroll.value = false
      document.getElementById('abcaaa')?.scrollTo({ top: subtitlePositionArray.value[subtitleIndex.value], behavior: 'smooth' })
    }
    const watchScroll = ref<boolean>(true)
    let scrollTimeout = 0
    const contentScroll = (e:Event) => {
      if (watchScroll.value) {
        const target = e.target as HTMLElement
        // 判斷區間
        let i = 0
        do {
          subtitleIndex.value = i
          i += 1
        } while (subtitlePositionArray.value[i] <= target.scrollTop)
      }
    }
    const subtitlePositionArray = ref<number[]>([])
    const gistLoadedArray = []
    const gistLoaded = (index:number) => {
      gistLoadedArray.push(index)
      if (gistLoadedArray.length === codeContent.value.content.length) {
        gistLoadedArray.length = 0
        // 確保gist皆完成
        const topicHeight = document.getElementsByClassName('c-codeinfo__topic')[0].clientHeight
        const typeHeight = document.getElementsByClassName('c-codeinfo__type')[0].clientHeight
        // 每個subtitle content查詢高度
        let increment = topicHeight + typeHeight
        subtitlePositionArray.value.length = 0
        setTimeout(() => {
          // 未使用延遲，計算高度會有誤差
          for (const item of document.getElementsByClassName('c-codeinfo__content')) {
            subtitlePositionArray.value.push(increment)
            increment += item.clientHeight
          }
          subtitlePositionArray.value[0] = 0
        }, 100)
      }
    }
    onMounted(() => {
      // 使用深色開關
      document.getElementById('js-c-navbar__switch')?.classList.add('c-navbar__switch--dark')
    })
    return { codeContent, codeTypeIndex, codeListIndex, focusArray, containerMoved, sidebarSwitch, gistLoaded, showCodeSubtitle, contentScroll }
  }
})
export default CodeInfo
</script>

<style lang='scss'>
.c-codeinfo{
    &__container{
        height:100%;
        overflow: auto;
        width: 90%;
        padding: 0 5%;
    }
    &__topic{
        font-size: 30px;
        text-align: left;
    }
    &__type{
        font-size: 22px;
        float: left;
        background-color: grey;
        color:honeydew;
        border-radius: 12px;
        padding:5px;
    }
    &__content{
        display: inline-block;
        width: 100%;
    }
    &__subtitle{
        font-size: 26px;
        text-align: left;
    }
    &__text{
        white-space: pre-wrap;
        text-align: left;
        margin-top: 5px;
    }
}
</style>
