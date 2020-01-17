<template>
  <div>
    <transition name="fade">
      <div
        class="loader"
        v-if="isLoading"
      ></div>
    </transition>
    <MainNav />
    <nuxt />
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import MainNav from "~/components/MainNav"
import FooterSection from "~/components/sections/FooterSection"


export default {
  components: {
    MainNav,
    FooterSection,
  },
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}
.loader {
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;
  width: 100%;
  z-index: 9999999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
