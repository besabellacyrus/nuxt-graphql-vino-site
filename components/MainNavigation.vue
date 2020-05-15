<template>
  <div>
    <nav class="app-nav fixed w-full z-30 top-0 text-white">
      <AppLogo v-show="scrolled < 15"></AppLogo>
      <div :class="{ 'white-bar': scrolled > 15, 'p-10 md:p-0': true }">
        <div class="visible z-50 md:invisible">
          <div @click="openSidebar">

            <svg
              v-show="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="inline-block absolute h-5 mr-8 right-0"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            <svg
              v-show="isOpen"
              class="inline-block absolute h-5 mr-8 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
          </div>
        </div>
        <div class="app-main-nav container mx-auto invisible md:visible">
          <AppLogo
            class="float-left left-logo"
            v-show="scrolled > 40"
          ></AppLogo>
          <!-- {{ navItems }} -->
          <ul class="flex justify-center font-semibold tracking-wide">
            <li
              class="mr-6 mt-1"
              v-for="(nav, index) in navItems"
              :key="index"
            >
              <a :href="nav.node.order_gql.link">
                {{ nav.node.title.toUpperCase() }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      v-show="isOpen"
      class="w-full bg-white side-bar"
    >
      <div class="relative mt-32">
        <div class="text-center flex flex-col">
          <a
            class="mb-6 font-semibold text-lg"
            href="/"
          >Home</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/about"
          >About</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/pairing"
          >Pairing</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/visit"
          >Visit</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/shop"
          >Shop</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/events"
          >Events</a>
          <a
            class="mb-6 font-semibold text-lg"
            href="/contact"
          >Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo"
import navGql from "~/apollo/queries/nav"
import _ from "lodash"

export default {
  components: {
    AppLogo
  },
  apollo: {
    vino_pages: {
      query: navGql
    },
  },
  computed: {
    navItems () {
      const items = this.vino_pages.edges.filter(e => e.node.order_gql.isMainPage);
      return _.orderBy(items, 'node.order_gql.order', 'asc');
    }
  },
  data () {
    return {
      scrolled: 0,
      isOpen: false
    }
  },
  mounted () {
    console.log({ vino_pages: this.vino_pages.edges })
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      this.scrolled = window.scrollY
    },
    openSidebar () {
      this.isOpen = !this.isOpen
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
.side-bar {
  height: 100vh;
  position: fixed;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.open-menu-enter-active,
.open-menu-leave-active {
  transition: all 300ms ease-out;
}
</style>