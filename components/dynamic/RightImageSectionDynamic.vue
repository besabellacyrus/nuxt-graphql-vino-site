<template>
  <div class="app-wrapper-image-right">
    <div class="content">
      <div class="header">
        <h3 class="subtitle">{{ subtitle }}</h3>
        <h1 class="title">{{ title }}</h1>
      </div>
      <div>
        <div class="bar-top-line-left" v-html="content"> 
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
      <div>
      </div>
    </div>
    <div v-if="images && images.length > 1" class="images-wrapper">
      <img
        :src="renderImage(images[1])"
        alt=""
      >
      <img
        :src="renderImage(images[0])"
        alt=""
      >
    </div>
    <div v-else class="image-wrapper">
      <img
        :src="renderImage(images[0])"
        alt=""
      >
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
  @media screen and (max-width: 425px) {
    justify-items: center;
  }
}

</style>