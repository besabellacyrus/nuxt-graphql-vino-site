<template>
  <div class="mx-auto">
    <div
      :class="{ 'home-header-shape': ishome }" 
      class="header-shape-container mx-auto"
      :style="{
      backgroundImage: `url(${imgUrl})` }"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl'],
  computed: {
    ishome () {
      if (location.pathname === '/') {
        return true;
      }
    }
  }, 
}
</script>

<style lang="scss" scoped>
</style>