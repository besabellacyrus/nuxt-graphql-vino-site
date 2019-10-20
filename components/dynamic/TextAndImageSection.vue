<template>
  <div class="container mx-auto">
    <div class="mt-32">
      <div :class="{'pin flex flex-wrap justify-center': center}">
        <h3
          class="app-subtitle absolute align-middle"
          :class="{'ml-6': !center}"
        >{{ subtitle }}</h3>
        <h1
          class="app-title absolute align-middle"
          :class="{'ml-6': !center}"
        >{{ title }}</h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:
  {
    subtitle: String,
    title: String,
    center: {
      default: false
    }
  }

}
</script>

<style>
</style>