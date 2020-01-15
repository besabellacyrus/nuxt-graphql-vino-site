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
  font-size: 62.5%;
}
</style>
