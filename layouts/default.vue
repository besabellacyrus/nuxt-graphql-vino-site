<template>
  <div>
    <MainNavigation></MainNavigation>
    <nuxt />
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation"

export default {
  components: {
    MainNavigation
  },
  head () {
    return {
      meta: [
        { hid: 'viewport1', name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
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
