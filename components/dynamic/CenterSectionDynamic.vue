<template>
  <div class="center-content-wrapper">
    <div class="wow fadeInDown">
      <div class="subtitle">{{ subtitle }}</div>
      <div class="title">{{ title }}</div>
    </div>
    <div v-html="content" class="bar-top-line-center">
    </div> 
    <div
      class="app-button-wrapper"
      v-if="buttons"
    >
      <div
        v-for="(btn, index) in buttons"
        :key="index"
        class="app-buttons"
      >
        <a :href="btn.buttonUrl">
          <button>{{ btn.label}}</button>
        </a>
      </div>
    </div>
    <div
      class="center-images"
      v-if="imageButtons[0].title"
    >
      <div
        class="image-btn"
        v-for="(img, index) in imageButtons"
        :key="index"
      >
        <a :href="img.routePath">
          <img
            :src="img.image ? img.image.sourceUrl : '' "
            alt=""
            v-lazy-load
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageButtons: { default: null },
    subtitle: String,
    title: String,
    content: String,
    buttons: Array
  },
  mounted () {
    console.log({ imageButtons: this.imageButtons })
  }
}
</script>

<style lang="scss">
.bar-top-line-center {
  p {
  max-width: 800px !important;
  margin: 0 auto !important;
  margin-top: 4rem !important;

  }
}
</style>