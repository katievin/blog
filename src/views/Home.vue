<template>
  <div class="l-page">
    <Navbar></Navbar>
    <div class="l-normal__container" @scroll="pageScrollEffect" id='1'>
      <div v-for="(t,index) in pages" :key="index" class="c-home__content">
        <img :src="t.backgroundImage" class="c-home__backgroundImage" :id="'js-home__backgroundImage'+index">
        <transition name="c-home__introduction" @click="changeRouter(index)">
          <div v-if="pageIndex===index" class="c-home__back">
            <div class="c-home__introduction">
              <div class="c-home__topic">{{t.topic}}</div>
              <div class="c-home__summary">{{t.summary}}</div>
            </div>
          </div>
        </transition>
        <div class="c-home__"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'

export const Home = defineComponent({
  components: ({
    Navbar
  }),
  setup () {
    const router = useRouter()
    const code = {
      topic: '程式',
      backgroundImage: require('../assets/images/code.png'),
      classModifier: 'code',
      routerName: 'CodePage',
      summary:
      '這裡是我所寫的一些程式碼，歡迎大家參考交流。'
    }
    const leather = {
      topic: '皮革',
      backgroundImage: require('../assets/images/leather.png'),
      classModifier: 'leather',
      routerName: 'leatherPage',
      summary: '裡面是我的手縫皮革作品，歡迎大家參考交流。'
    }
    const pages = [code, leather, code]
    const pageIndex = ref<number>(0)
    const windowHeight = window.innerHeight
    // 滑動區塊效果
    // 設計為滑動超過30%
    let firstPosition:number
    let lastPosition:number
    const autoScroll = ref<boolean>(false)
    let pageScrollTrigger = -1
    const pageScroll = () => {
      const container = document.getElementById('1') as HTMLElement
      const nagative = (firstPosition > lastPosition)
      autoScroll.value = true
      // 下面避免重複trigger
      setTimeout(() => {
        autoScroll.value = false
        pageScrollTrigger = -1
      }, 400)
      if (Math.abs(lastPosition - firstPosition) / windowHeight > 0.2) {
        if ((nagative && pageIndex.value === 0) || (!nagative && pageIndex.value === pages.length - 1)) {
          return container.scrollTo({ left: 0, top: pageIndex.value * windowHeight, behavior: 'smooth' })
        }
        (nagative) ? pageIndex.value-- : pageIndex.value++
      }
      return container.scrollTo({ left: 0, top: pageIndex.value * windowHeight, behavior: 'smooth' })
    }
    const pageScrollEffect = () => {
      if (autoScroll.value) return
      if (pageScrollTrigger === -1) {
        firstPosition = document.getElementById('1')?.scrollTop as number
        lastPosition = document.getElementById('1')?.scrollTop as number
        pageScrollTrigger = setTimeout(() => {
          pageScroll()
        }, 50)
      } else {
        lastPosition = document.getElementById('1')?.scrollTop as number
        clearTimeout(pageScrollTrigger)
        pageScrollTrigger = setTimeout(() => {
          pageScroll()
        }, 50)
      }
    }
    // 改動router
    const changeRouter = (index:number) => {
      router.push(pages[index].routerName)
    }
    onMounted(() => {
      // 修改backgroundImage參數
      for (const index in pages) {
        ((index) => {
          const image = document.getElementById('js-home__backgroundImage' + index)
          image?.classList.add('c-home__backgroundImage--' + pages[Number(index)].classModifier)
        })(index)
      }
      //
    })
    return { pages, pageScrollEffect, pageIndex, changeRouter }
  }
})
export default Home
</script>
<style lang='scss'>
@import "~susy/sass/susy";
@import "~susy/sass/plugins/svg-grid";
@import "@/assets/css/susy-set";
.l-normal{
  &__container{
    width:100%;
    height:100%;
    overflow: auto;
    position: relative;
  }
}
.c-home{
  &__content{
    width:100%;
    height:100%;
    overflow: hidden;
    position: relative;
    background-color: #cccaca;
  }
  &__backgroundImage{
    position:absolute;
    @include susy-breakpoint($mobile) {
    }
    @include susy-breakpoint($pad) {
    }
    @include susy-breakpoint($desktop) {
        // background: susy-svg-grid() no-repeat scroll;
    }
    &--code{
      min-width:200%;
      height:150%;
      opacity: 0.4;
      left:-50%;
      transform: rotate(45deg);
    }
    &--leather{
      min-width: 60%;
      height: 50%;
      opacity: 0.5;
      top:25%;
      left: -25%;
      @include susy-breakpoint($mobile) {
      }
      @include susy-breakpoint($pad) {
        min-width: 70%;
        height: 60%;
        left: -10%;
      }
      @include susy-breakpoint($desktop) {
          // background: susy-svg-grid() no-repeat scroll;
      }
    }
  }
  &__back{
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: #616696;
  }
  &__introduction{
    @include susy-breakpoint($mobile) {
      margin-top:200px;
    }
    @include susy-breakpoint($pad) {
    }
    @include susy-breakpoint($desktop) {
        // background: susy-svg-grid() no-repeat scroll;
    }
    &-enter-active{
      transition: all 1s ease-out 1s;
      opacity: 0;
    }
    &-enter-to{
      opacity: 1;
    }
  }
  &__topic{
    color:white;
    padding:60px;
    font-size: 40px;
  }
  &__summary{
    color:white;
    font-size: 24px;
  }
}
</style>
