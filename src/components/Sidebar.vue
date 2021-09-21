<template>
  <div class="c-sidebar__container">
    <template class="c-sidebar__tagcontainer" v-for="(t,index) in sidebarArray" :key="index">
        <div class="c-sidebar__tag" :class="{'c-sidebar__tag--opened':t.opened}" @click="clickTag(0,index,t.routeName)">{{t.topic}}</div>
        <div v-show="t.opened" v-for="(m,index1) in t.group" :key="index1" class="c-sidebar__tagcontainer" style="overflow:hidden;margin-left:10px">
            <div class="c-sidebar__tag" :class="{'c-sidebar__tag--opened':m.opened}" @click="clickTag(1,[index1])">{{m.topic}}</div>
            <div v-show="m.opened" v-for="(n,index2) in m.group" :key="index2" style="overflow:hidden;margin-left:10px">
                <div class="c-sidebar__tag" :class="{'c-sidebar__tag--opened':n.opened}" @click="clickTag(2,[index1,index2],'CodeInfo')">{{n.topic}}</div>
                <div v-show="n.opened" class="c-sidebar__tag" v-for="(k,index4) in n.group" :key="index4" style="overflow:hidden;margin-left:10px">{{k}}</div>
            </div>
        </div>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { codeSetSideBar } from '../assets/code/codeSet'

export const Sidebar = defineComponent({
  name: 'Sidebar',
  props: {
    focusArray: Array as PropType<Array<number>>
  },
  setup (props, { emit }) {
    const router = useRouter()
    const sidebarArray = ref<{topic:string;routeName:string;group: typeof codeSetSideBar;opened:boolean}[]>(
      [
        { topic: '程式', routeName: 'CodePage', group: codeSetSideBar, opened: false },
        { topic: '皮革', routeName: 'CodePage', group: [], opened: false },
        { topic: '程式', routeName: 'CodePage', group: [], opened: false }
      ]
    )
    // 深拷貝sidebarArray初始值
    const sidebarArrayFirst = JSON.stringify(sidebarArray.value)
    // 關起所有的sidebar
    const closeSidebarArray = () => {
      sidebarArray.value = JSON.parse(sidebarArrayFirst)
    }
    // 遞迴選擇
    const sideArrayChooseRecrusion = (sidebarArray:any, focusArray:number[]):boolean => {
      if (focusArray.length === 0) {
        return false
      }
      // 每一層都先關閉
      sidebarArray.forEach((e: { opened: boolean }) => { e.opened = false })
      sidebarArray[focusArray[0]].opened = true
      if (sidebarArray[focusArray[0]].group) {
        return sideArrayChooseRecrusion(sidebarArray[0].group, focusArray.slice(1, focusArray.length))
      }
      return false
    }
    watch(() => props.focusArray as number[], () => {
      if (props.focusArray?.length === 1 && props.focusArray[0] === 0) closeSidebarArray()
      sideArrayChooseRecrusion(sidebarArray.value, props.focusArray as number[])
    }, { immediate: true })
    const clickTag = (layer:number, indexArray:number[], routeName:string) => {
      const changeRoute = (routeName:string, indexArray?:number[]) => {
        if (indexArray) {
          return router.push({ name: routeName, params: { typeIndex: indexArray[0], index: indexArray[1] } })
        }
        router.push(routeName)
      }
      const emitAction = (indexArray:number[]) => {
        emit('showCodeList', indexArray[0])
      }
      switch (layer) {
        case 0:
          changeRoute(routeName)
          break
        case 1:
          emitAction(indexArray)
          break
        case 2:
          changeRoute(routeName, indexArray)
          break
      }
    }
    return { sidebarArray, clickTag }
  }
})
export default Sidebar
</script>

<style lang='scss'>
@import "~susy/sass/susy";
@import "~susy/sass/plugins/svg-grid";
@import "@/assets/css/susy-set";
.c-sidebar{
    &__container{
        position:absolute;
        z-index: 1;
        @include susy-breakpoint($mobile) {
            top:60px;
            height:calc(100% - 60px);
            width: 80%;
            right:0;
        }
        @include susy-breakpoint($pad) {
            top:60px;
            height:calc(100% - 60px);
            width: 30%;
            left:0;
        }
        @include susy-breakpoint($desktop) {
            // background: susy-svg-grid() no-repeat scroll;
        }
    }
    &__tag{
        width: 100%;
        text-align: left;
        font-size:24px;
        border-bottom: 1px solid black;
        box-sizing: border-box;
        cursor:pointer;
        &--opened{
            border-right: 10px solid blue;
        }
    }
    &__tagcontainer{
    }
}
</style>
