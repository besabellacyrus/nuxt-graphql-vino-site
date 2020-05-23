<template>
  <div class="app-wrapper-image-left">
    <div v-if="images && images.length > 1" class="images-wrapper wow fadeInLeft">
      <img
        :src="renderImage(images[0])"
        alt=""
        v-lazy-load
      >
      <img
        :src="renderImage(images[1])"
        alt=""
        v-lazy-load
      >
    </div>
    <div v-else class="image-wrapper wow fadeInLeft">
      <img
        :src="renderImage(images[0])"
        alt=""
        v-lazy-load
      >
    </div>
    <div class="content wow fadeInRight">
      <div class="header">
        <h3 class="subtitle">{{ subtitle }}</h3>
        <h1 class="title">{{ title }}</h1>
      </div>
      <div>
        <div class="bar-top-line-right" v-html="content">
        </div>
        <div class="app-button-wrapper image-section"> 
          <div
            v-for="(btn, index) in buttons"
            :key="index"
            class="app-buttons"
          >
            <a :href="btn.url">
              <button>{{ btn.label}}</button>
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'content', 'images', 'buttons'],
  methods: {
    renderImage (images) {
      if (images) {
        return images.image.sourceUrl
      }
      return ""
    }
  }
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: grid;
  justify-items: center;
}
.image-section {
  display: grid;
  justify-items: center;
}
</style>