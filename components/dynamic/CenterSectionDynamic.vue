<template>
  <div class="container mx-auto">
    <div class="mt-32 text-center">
      <h3 class="app-h3">{{ subtitle }}</h3>
      <h1 class="app-h1">{{ title }}</h1>
      <span class="bottom-bar md:pl-3">&nbsp;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['subtitle', 'title', 'message']

}
</script>

<style>
</style>