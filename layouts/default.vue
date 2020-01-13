<template>
  <div>
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
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
@import url("@/assets/scss/main.scss");
@import url("@/assets/scss/theme.scss");
</style>
