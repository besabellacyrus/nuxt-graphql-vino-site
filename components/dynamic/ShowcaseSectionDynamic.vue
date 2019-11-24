<template>
  <div class="container mx-auto">
    <div class="mt-32 text-center">
      <h3 class="app-subtitle">{{ subtitle }}</h3>
      <h1 class="app-title">{{ title }}</h1>
      <span class="bottom-bar md:pl-3">&nbsp;</span>
      <p class="pt-6">{{ content }}</p>
      <div class="mt-6" v-if="buttons">
        <span v-for="(btn, index) in buttons" :key="index">
          <a :href="btn.url">
            <button class="app-btn mr-3">{{ btn.label}}</button>
          </a>
        </span>
      </div>
      <div class="mt-6">
        <div class="flex flex-wrap -mx-2" v-if="items">
          <div class="w-full md:w-1/2 mb-4 md:pl-3 md:pr-3" v-for="(item, index) in items" :key="index">
            <div class="event-items relative">
              <img :src="item.image.sourceUrl" class="float-left event-image mr-5" alt="">
              <div class="event-content">
                <h1>{{ item.title }}</h1>
                <p>
                  {{ item.content }}
                </p>
                <a :href="item.link" class="absolute bottom-0 right-0">
                  <button class="app-btn mr-3">LEARN MORE</button>
                </a>
              </div>
            </div>
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
     buttons: Array,
     items: Array
  }

}
</script>

<style lang="scss" scoped>
.event-content {
  text-align: left;
  height: 8rem;
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
}
.event-image {
  height: 8rem;
}
</style>