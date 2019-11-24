<template>
  <div>
    <MainNavigation></MainNavigation>
    <nuxt />
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import MainNavigation from "~/components/MainNavigation"
import FooterSection from "~/components/sections/FooterSection"


export default {
  components: {
    MainNavigation,
    FooterSection,
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Cardo&display=swap');
@import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background-color: $app-main-bg;
  color: $app-gray;
  transition: all 300ms;
}
p {
  // font-family: 'Cardo', serif;
  font-family: 'Crimson Text', serif;
}
</style>
