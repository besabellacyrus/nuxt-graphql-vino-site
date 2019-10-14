<template>
  <div class="mx-auto">
    <img
      class="app-hero-img"
      :src="imgUrl"
      alt=""
    >
  </div>
</template>

<script>
export default {
  props: ['imgUrl']
}
</script>

<style lang="scss" scoped>
.app-hero-img {
  // height: 60vh;
}
</style>