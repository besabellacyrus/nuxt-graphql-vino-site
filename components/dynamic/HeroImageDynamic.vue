<template>
  <div class="mx-auto">
    <div
      class="header-shape-container mx-auto"
      :style="{
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPositionY: '94%' }"
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
.header-shape-container {
  mask-image: url("~assets/img/header_shape.svg");
  height: 37rem;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  margin-bottom: 10rem;

  @media screen and (max-width: 425px) {
    height: 13rem;
    margin-bottom: 0rem;
  }
}
</style>