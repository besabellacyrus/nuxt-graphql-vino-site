<template>
  <div class="container mx-auto mt-10">
    <div class="w-full">
      <img
        :src="imageUrl"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String
  }
}
</script>

<style>
</style>