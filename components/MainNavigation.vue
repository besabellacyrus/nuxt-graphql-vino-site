<template>
  <nav class="app-nav fixed w-full z-30 top-0 text-white">
    <AppLogo v-show="scrolled < 15"></AppLogo>
    <div :class="{ 'white-bar': scrolled > 15, 'p-10 md:p-0': true }">
      <div class="visible md:invisible">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="inline-block absolute h-5 mr-8 right-0"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </div>
      </div>
    </div>
    <div class="app-main-nav container mx-auto invisible md:visible">
      <AppLogo
        class="float-left left-logo"
        v-show="scrolled > 40"
      ></AppLogo>
      <ul class="flex justify-center font-semibold tracking-wide">
        <li class="mr-6">
          <a href="/">HOME</a>
        </li>
        <li class="mr-6">
          <a href="/about">ABOUT</a>
        </li>
        <li class="mr-6">
          <a href="/pairing">PAIRING</a>
        </li>
        <li class="mr-6">
          <a href="/visit">VISIT</a>
        </li>
        <li class="mr-6">
          <a href="/shop">SHOP</a>
        </li>
        <li class="mr-6">
          <a href="/events">EVENTS</a>
        </li>
        <li class="mr-6">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from "../components/AppLogo"

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      scrolled: 0
    }
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      console.log({ sss: window.scrollY })
      this.scrolled = window.scrollY
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

}
</script>

<style lang="scss">
.left-logo {
  margin: 0;
  position: absolute;
  top: 0;
  transition: all 300ms;
}
.white-bar {
  padding: 2rem;
  background-color: #fff;
  opacity: 1;
  @apply shadow;
}
.app-main-nav {
  font-size: 13px;
  a {
    color: $app-main-dark;
    &:hover {
      color: $app-main-light;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>