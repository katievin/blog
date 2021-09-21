<template>
  <div :id="'gist_'+gistArray[0]+'_'+gistArray[1]+'_'+gistArray[2]">
      <!-- <script type="application/javascript" defer src="https://gist.github.com/katievin/19ae7a7dbfd5476f97eb62d812d5367e.js"></script> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, PropType, ref } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import postscribe from 'postscribe'
export const Gist = defineComponent({
  name: 'Gist',

  props: {
    gistArray: Array as PropType<Array<number>>,
    gistUrl: String
  },

  setup (props) {
    const scriptgistjs = document.createElement('script')
    onMounted(() => {
      if (props.gistUrl) {
        scriptgistjs.setAttribute('src', 'https://gist.github.com/katievin/19ae7a7dbfd5476f97eb62d812d5367e.js')
        scriptgistjs.onload = () => {
          console.log(123)
        }
        // eslint-disable-next-line no-useless-escape
        if (props.gistArray)postscribe(document.getElementById('gist_' + props.gistArray[0] + '_' + props.gistArray[1] + '_' + props.gistArray[2]), props.gistUrl)
      }
    })
    return { props }
  }
})
export default Gist
</script>

<style lang='scss'>
</style>
