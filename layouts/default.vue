<template>
  <div>
    <MainNavigation></MainNavigation>
    <nuxt />
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation"
import FooterSection from "../components/sections/FooterSection"

export default {
  components: {
    MainNavigation,
    FooterSection
  }
}
</script>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background-color: $app-main-bg;
  color: $app-gray;
  transition: all 300ms;
}
</style>
