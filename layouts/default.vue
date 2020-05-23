<template>
  <div>
    <transition name="fade">
      <div
        class="loader"
        v-if="isLoading"
      ></div>
      <div v-else>
        <MainNav />
        <nuxt />
        <FooterSection></FooterSection>
      </div>
    </transition>
    <BackToTop />
  </div>
</template>

<script>
import MainNav from "~/components/MainNav"
import FooterSection from "~/components/sections/FooterSection"
import BackToTop from "~/components/BackToTop";


export default {
  components: {
    MainNav,
    FooterSection,
    BackToTop
  },
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },
  created () {
    if (process.browser) {
      var html = document.querySelector('html');
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (process.browser) {
        html.style.overflow = 'initial';
      }
    }, 300);
  }
}
</script>

<style lang="scss">
@import "~/assets/css/animate.css";

html {
  font-size: 62.5%;
  height: 100%;
  overflow: hidden;
}
.loader {
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  background-size: contain;
  z-index: 9999999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
[v-cloak] {
  display: none;
}
</style>
