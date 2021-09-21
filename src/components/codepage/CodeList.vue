<template>
  <div>
      <div v-for="(t,index) in props.codeObject.group" :key="index" class="c-codelist__container">
          <div class="c-codelist__tag"><span class="c-codelist__type">{{t.type}}</span><router-link :to="{ name: 'CodeInfo', params:{typeIndex:props.typeIndex,index:index}}"><span class="c-codelist__topic">{{t.topic}}</span></router-link></div>
      </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export const CodeList = defineComponent({
  name: 'CodeList',

  props: {
    codeObject: Object,
    typeIndex: Number
  },

  setup (props) {
    return { props }
  }

})
export default CodeList
</script>

<style lang='scss'>
.c-codelist{
    &__container{
        width:100%;
        padding:5px;

    }
    &__tag{
        overflow:hidden;
        margin-left: 10%;
    }
    &__type{
        float: left;
        background-color: grey;
        color:honeydew;
        border-radius: 5px;
        padding:3px;
    }
    &__topic{
        float: left;
        margin-left: 3px;
    }
}
</style>
