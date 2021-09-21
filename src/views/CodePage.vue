<template>
  <div class="l-page">
    <Navbar @sidebarSwitch="sidebarSwitch"></Navbar>
    <Sidebar :focusArray="focusArray" @showCodeList="showCodeList"></Sidebar>
    <div class="l-normal__container">
      <div class="c-codepage__container" :class="{'c-codepage__container--moved':containerMoved}">
        <div v-for="(t,index) in codeSet" :key="index">
          <div class="c-codepage__tag" :class="{'c-codepage__tag--selected':listShowIndex===index}" @click="showCodeList(index)">
            <div class="c-codepage__icon">{{t.topic.split('')[0].toUpperCase()}}</div>
            <div class="c-codepage__topic">{{t.topic}}</div>
          </div>
          <CodeList v-show="listShowIndex===index" :codeObject="t" :typeIndex='index'></CodeList>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import CodeList from '../components/codepage/CodeList.vue'
import { codeSet } from '../assets/code/codeSet'

export const CodePage = defineComponent({
  name: 'CodePage',

  components: ({
    Navbar,
    Sidebar,
    CodeList
  }),

  setup () {
    const listShowIndex = ref<number|null>(null)
    const showCodeList = (index:number) => {
      listShowIndex.value = (index === listShowIndex.value) ? null : index
    }
    const containerMoved = ref<boolean>(false)
    const sidebarSwitch = () => {
      containerMoved.value = !containerMoved.value
    }
    const focusArray = computed(() => {
      if (listShowIndex.value === null) return [0]
      return [0, listShowIndex.value]
    })
    onMounted(() => {
      // 使用深色開關
      document.getElementById('js-c-navbar__switch')?.classList.add('c-navbar__switch--dark')
    })
    return { codeSet, listShowIndex, showCodeList, sidebarSwitch, containerMoved, focusArray }
  }
})
export default CodePage
</script>

<style lang='scss'>
@import "~susy/sass/susy";
@import "~susy/sass/plugins/svg-grid";
@import "@/assets/css/susy-set";
.c-codepage{
  &__container{
    margin-top:60px;
    position:relative;
    background-color: white;
    @include susy-breakpoint($mobile) {
      width: 100%;
    }
    @include susy-breakpoint($pad) {
      width: 60%;
      margin-left: 30%;
    }
    @include susy-breakpoint($desktop) {
        // background: susy-svg-grid() no-repeat scroll;
    }
    &--moved{
      @keyframes example {
        0%   {right:0%;}
        100% {right:80%;}
      }
      right:80%;
      animation-name: example;
      animation-duration: 1s;
    }
  }
  &__tag{
    background-color:peachpuff;
    border-radius: 10px;
    width: 80%;
    padding:20px 0;
    display: inline-block;
    cursor:pointer;
    &--selected{
      background-color: #a53737;
      color:white
    }
  }
  &__icon{
    line-height: 60px;
    width: 60px;
    float: left;
    margin-left: 10px;
    border-radius: 200px;
    color:white;
    background-color:rgb(142, 142, 142) ;
    box-sizing: border-box;
    padding:0 20px;
    font-size: 40px;
    font-weight: 700;
  }
  &__topic{
    float: left;
    margin-left: 5px;
    line-height: 60px;
    font-size: 30px;
  }
}
</style>
