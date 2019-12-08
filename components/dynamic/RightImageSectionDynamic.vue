<template>
  <div class="container mx-auto mt-20 px-4">
    <div class="md:flex md:flex-wrap">
      <div class="w-full md:w-1/2 text-center mt-6 mb-6 md:text-left xl:px-0">
        <h3 class="app-subtitle">{{ subtitle }}</h3>
        <div class="px-0">
          <h1 class="app-title">{{ title }}</h1>
          <span
            v-show="title !== ''"
            class="bottom-bar md:pl-3"
          >&nbsp;</span>
          <p class="mt-6 px-1 md:px-0">
            {{ content }}
          </p>
          <div
            class="mt-6"
            v-if="buttons"
          >
            <span
              v-for="(btn, index) in buttons"
              :key="index"
              class="sm:w-full"
            >
              <a :href="btn.url">
                <button class="app-btn mr-3">{{ btn.label}}</button>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 relative">

        <div v-if="images.length === 1">
          <img
            class="w-full object-center"
            v-for="(img, index) in images"
            :key="index"
            :src="renderImage(img)"
            alt=""
          >
        </div>
        <div v-else>
          <div class="flex justify-center right-images md:relative h-30">
            <div>
              <img
                class="orchard-image z-10 absolute right-0 md:right-0 md:-mt-20"
                :src="renderImage(images[0])"
                alt=""
              >
            </div>
            <div>
              <img
                class="z-0 orchard-image orchard-image-two absolute left-0 md:left-0"
                :src="renderImage(images[1])"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'content', 'images', 'buttons'],
  mounted () {
    console.log({ images: this.images })
  },
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
.right-images {
  @media screen and (max-width: 425px) {
    margin-top: 5rem;
    height: 20rem;
  }
}
.orchard-image {
  height: 30rem;
  @media screen and (max-width: 425px) {
    height: 12rem;
  }
}
.orchard-image-two {
  @media screen and (min-width: 1024px) {
    height: 22rem;
    top: 16rem;
  }
}
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