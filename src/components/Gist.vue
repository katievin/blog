<template>
  <div :id="'gist_' + props.gistArray[0] + '_' + props.gistArray[1] + '_' + props.gistArray[2]">
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, getCurrentInstance, onMounted, PropType, ref, watch } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import postscribe from 'postscribe'
export const Gist = defineComponent({
  name: 'Gist',

  props: {
    gistArray: Array as PropType<Array<number>>,
    gistUrl: String
  },

  setup (props, { emit }) {
    watch(computed(() => props.gistUrl), () => {
      setTimeout(() => {
        if (props.gistUrl) {
          if (props.gistArray) {
            const div = document.getElementById('gist_' + props.gistArray[0] + '_' + props.gistArray[1] + '_' + props.gistArray[2])
            postscribe(document.getElementById('gist_' + props.gistArray[0] + '_' + props.gistArray[1] + '_' + props.gistArray[2]), props.gistUrl, {
              beforeEnqueue: () => {
                while (div?.firstChild) {
                  div.removeChild(div.firstChild)
                }
              },
              done: () => {
                if (props.gistArray) emit('gistLoaded', props.gistArray[2])
              }
            })
          }
        } else {
        // 沒有Gist需要載入
          if (props.gistArray) emit('gistLoaded', props.gistArray[2])
        }
      }, 100)
    })
    onMounted(() => {
      if (props.gistUrl) {
        if (props.gistArray) {
          postscribe(document.getElementById('gist_' + props.gistArray[0] + '_' + props.gistArray[1] + '_' + props.gistArray[2]), props.gistUrl, {
            done: () => {
              if (props.gistArray) emit('gistLoaded', props.gistArray[2])
            }
          })
        }
      } else {
        // 沒有Gist需要載入
        if (props.gistArray) emit('gistLoaded', props.gistArray[2])
      }
    })
    return { props }
  }
})
export default Gist
</script>

<style lang='scss'>
</style>
