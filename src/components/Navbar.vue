<template>
  <div class='c-navbar__container'>
    <div class='c-navbar__logo' ></div>
    <div class='c-navbar__switch' id="js-c-navbar__switch" @click="switchClick"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export const Navbar = defineComponent({
  name: 'Navbar',
  setup (_, { emit }) {
    const switchClick = () => {
      emit('sidebarSwitch')
    }
    return { switchClick }
  }
})
export default Navbar
</script>

<style lang='scss'>
@import "~susy/sass/susy";
@import "~susy/sass/plugins/svg-grid";
@import "@/assets/css/susy-set";
.c-navbar{
    &__container{
        position:absolute;
        z-index: 1;
        width:90%;
        margin-left: 5%;
        margin-top: 20px;
        @include susy-breakpoint($mobile) {
            height:40px;
        }
        @include susy-breakpoint($pad) {
            height:60px;
        }
        @include susy-breakpoint($desktop) {
            // background: susy-svg-grid() no-repeat scroll;
        }
    }
    &__logo{

    }
    &__switch{
        height: 40px;
        width: 15%;
        float:right;
        background-image: url('../assets/images/icons/switch.png');
        background-size: contain;
        background-repeat: no-repeat;
        @include susy-breakpoint($mobile) {
            display: block;
        }
        @include susy-breakpoint($pad) {
            display: none;
        }
        &--dark{
            background-image: url('../assets/images/icons/switch-dark.png');
        }
    }
}
</style>
