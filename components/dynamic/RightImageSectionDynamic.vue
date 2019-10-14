<template>
  <div class="container mx-auto px-4 mt-20">
    <div class="md:flex md:flex-wrap">
      <div class="w-full md:w-1/2 text-center mt-6 mb-6 md:text-left">
        <h3 class="app-h3">{{ subtitle }}</h3>
        <div class="px-0 md:px-3">
          <h1 class="app-h1">{{ title }}</h1>
          <span class="bottom-bar md:pl-3">&nbsp;</span>
          <p class="mt-6">
            {{ message }}
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2 relative">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'message']

}
</script>

<style lang="scss" scoped>
.top-right-img {
  float: right;
  height: 14rem;
  position: relative;
  z-index: 20;
}
.bottom-left-img {
  height: 11rem;
  position: absolute;
  margin-top: 8rem;
  margin-left: 6rem;
  position: relative;
  z-index: 1;
}
</style>