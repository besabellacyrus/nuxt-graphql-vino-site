<template>
  <div :class="{'sticky-menu': scrolled > 58 }">
    <div class="main-navigation-wrapper">
      <div class="main-navigation-container text-center">
        <AppLogo
          v-if="scrolled > 15"
          class="side-logo"
          image-url="/img/logo-vino-isla.svg"
          alt="Vino Isla"
        />
        <AppLogo v-else image-url="/img/Logo.svg" alt="Vino Isla Logo V" />

        <ul :class="{'pc-menu-right ': scrolled > 15 }" class="pc-menu">
          <li v-for="(nav, index) in navItems" :key="index">
            <nuxt-link :to="nav.node.order_gql.link">{{ nav.node.title.toUpperCase() }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="mobile mobile-two">
      <div class="header">
        <div class="header-grid">
          <div class="menu-toggle" @click="toggleMenu($event)">
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <a href="/">
            <img class src="~/assets/img/logo-footer.svg" alt />
          </a>
        </div>
      </div>
      <div class="mobile-nav" ref="mobileNav">
        <!-- <h2>Navigation</h2> -->
        <ul>
          <li @click="closeMobileNav" v-for="(nav, index) in navItems" :key="index">
            <nuxt-link :to="nav.node.order_gql.link">{{ nav.node.title.toUpperCase() }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo";
import navGql from "~/apollo/queries/nav";
import _ from "lodash";

export default {
  components: {
    AppLogo
  },
  apollo: {
    vino_pages: {
      query: navGql
    }
  },
  data() {
    return {
      scrolled: 0
    };
  },
  computed: {
    navItems() {
      if (this.vino_pages && this.vino_pages.edges) {
        const items = this.vino_pages.edges.filter(
          e => e.node.order_gql.isMainPage
        );
        return _.orderBy(items, "node.order_gql.order", "asc");
      }
    }
  },
  methods: {
    handleScroll(event) {
      this.scrolled = window.scrollY;
    },
    toggleMenu(event) {
      const { mobileNav } = this.$refs;
      if (window.getComputedStyle(mobileNav, null).display === "block") {
        this.hideElem(mobileNav);
        return;
      }
      this.showElem(mobileNav);
    },
    closeMobileNav() {
      const { mobileNav } = this.$refs;
      console.log({ mobileNav });
      mobileNav.style.display = "none";
    },
    showElem(elem) {
      elem.style.display = "block";
    },
    hideElem(elem) {
      elem.style.display = "none";
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  color: #6d6662;
}
.side-logo {
  position: absolute;
  top: 8px;
  margin-bottom: 0px !important;
  margin-left: 1rem;
  height: 1.3rem !important;
}
.sticky-menu {
  position: fixed;
  z-index: 99999;
  margin: 0 auto;
  width: 100%;
  transition: all 300ms ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
}
.main-navigation-wrapper {
  @media screen and (min-width: 769px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  .main-navigation-container {
    padding: 2rem 0;
  }
  .pc-menu-right {
    text-align: right;
  }
  .pc-menu {
    font-weight: bold;
    /* color: $app-main-font-color; */
    color: #8f8f8f;
    li {
      display: inline;
      padding: 0 1rem;
      transition: all 300ms;
      &:hover {
        color: #6d6662;
      }
    }
  }
}

.mobile {
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  display: inline-block;
  @media screen and (min-width: 769px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.mobile .header {
  color: #fff;
  transition: all 300ms;
}
.sticky-menu {
  .header-grid {
    background-color: initial;
  }
}
.header-grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 2rem;
  background-color: #fff;
  & img {
    height: 4rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 1rem;
  }
}

.line {
  width: 30px;
  height: 2px;
  margin: 10px 0;
  background-color: #3c3842;
}

.menu-toggle:hover {
  cursor: pointer;
}

.mobile-nav {
  transition: all 2s;
}
.mobile-nav ul {
  height: 54rem;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.mobile-two .mobile-nav {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: none;
  text-align: center;
}

.mobile-two .mobile-nav li a {
  color: $app-main-font-color;
  display: block;
  padding: 15px 20px;
}

.mobile-two .mobile-nav li a:hover {
  background-color: #3c3842;
  color: #fff;
}
</style>