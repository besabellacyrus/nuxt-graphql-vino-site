<template>
  <div class="mx-auto">
    <div
      class="header-shape-container home-header-shape mx-auto"
      :style="{
      backgroundImage: `url(${imgUrl})` }"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl']
}
</script>

<style lang="scss" scoped>
</style>