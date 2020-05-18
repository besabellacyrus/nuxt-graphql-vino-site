<template>
  <div class="back-to-top" @click="backToTop">
      <img src="~/assets/img/back-to-top.svg" alt="">
  </div>
</template>

<script>
export default {
  methods: {
    backToTop () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-top {
  height: 9rem;
  position: absolute; 
  right: 3rem;
  img {
    height: 100%;
  }
}
</style>