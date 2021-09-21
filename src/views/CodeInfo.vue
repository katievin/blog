<template>
  <div class="l-page">
    <Navbar></Navbar>
    <div class="l-normal__container">
      <div class="c-codeinfo__container">
        <div class="c-codeinfo__topic">{{codeContent.topic.split('.')[1]}}</div>
        <div class="c-codeinfo__type">{{codeContent.type}}</div>
        <div v-for="(t,index) in codeContent.content" :key="index" class="c-codeinfo__content">
            <div class="c-codeinfo__subtitle">{{t.subtitle}}</div>
            <div class="c-codeinfo__text">{{t.contentBeforeCode}}</div>
            <Gist :gistUrl="t.code" :gistArray="[codeTypeIndex,codeListIndex,index]"></Gist>
            <div class="c-codeinfo__text">{{t.contentAfterCode}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Gist from '../components/Gist.vue'
import { codeSet } from '../assets/code/codeSet'

export const CodeInfo = defineComponent({
  name: 'CodeInfo',

  components: ({
    Navbar,
    Gist
  }),

  setup () {
    const router = useRouter()
    const codeTypeIndex = Number(router.currentRoute.value.params.typeIndex)
    const codeListIndex = Number(router.currentRoute.value.params.index)
    const codeContent = codeSet[codeTypeIndex].group[codeListIndex]
    onMounted(() => {
      // 使用深色開關
      document.getElementById('js-c-navbar__switch')?.classList.add('c-navbar__switch--dark')
    })
    return { codeContent, codeTypeIndex, codeListIndex }
  }
})
export default CodeInfo
</script>

<style lang='scss'>
.c-codeinfo{
    &__container{
        margin-top: 60px;
        height:calc(100% - 60px) ;
        overflow: auto;
        width: 90%;
        margin-left: 5%;
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
