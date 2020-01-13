<template>
  <div>
    <div class="rounded overflow-hidden shadow-md">
      <img
        class="w-full"
        :src="require('~/assets/img/events/Image-1-min.png')"
        alt="Sunset in the mountains"
      >
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-6">
          <h3 class="app-subtitle">LOCATION NAME</h3>
        </div>
        <div class="mb-4">
          <svg class="fill-current text-secondary inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>
          <span class="text-sm font-semibold">Monday, 01 January 2019</span>
        </div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.icon-color-cal {
  color: $app-brown;
}
</style>