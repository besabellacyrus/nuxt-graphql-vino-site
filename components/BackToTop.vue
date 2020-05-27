<template>
  <div v-if="scroll > 1151" class="back-to-top" @click="backToTop">
    <img src="~/assets/img/back-to-top.svg" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunc);
  },
  destroy() {
    window.removeEventListener("scroll", this.scrollFunc);
  },
  methods: {
    scrollFunc(e) {
      this.scroll = window.scrollY;
    },
    backToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.back-to-top {
  height: 5rem;
  position: fixed;
  right: 3rem;
  z-index: 99;
  bottom: 3rem;
  transition: all 300ms;
  img {
    height: 100%;
  }
}
</style>