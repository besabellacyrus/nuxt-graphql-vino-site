<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h3 class="app-subtitle">{{ subtitle }}</h3>
      <h1 class="app-title">{{ title }}</h1>
      <span class="bottom-bar md:pl-3">&nbsp;</span>
      <p class="pt-6 lg:px-56">{{ content }}</p>
      <div
        class="mt-6"
        v-if="buttons"
      >
        <span
          v-for="(btn, index) in buttons"
          :key="index"
        >
          <a :href="btn.url">
            <button class="app-btn mr-3">{{ btn.label}}</button>
          </a>
        </span>
      </div>
      <div
        class="pt-6"
        v-if="imageButtons"
      >
        <div class="flex flex-wrap ">
          <div
            class="w-full mx-6 pb-4 md:pb-0 md:w-1/3 md:px-4 md:mx-0"
            v-for="(img, index) in imageButtons"
            :key="index"
          >
            <a :href="img.routePath">
              <img
                :src="img.image ? img.image.sourceUrl : '' "
                alt=""
              >
            </a>
            <h3
              class="app-subtitle mt-3"
              v-if="img.subTitle"
            >{{ img.subTitle }}</h3>
            <h1
              class="app-title mt-0"
              v-if="img.title"
            >{{ img.title }}</h1>
            <p
              v-if="img.content"
              class="text-center"
            >
              {{ img.content}}
            </p>
          </div>
        </div>
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
  }

}
</script>

<style>
</style>