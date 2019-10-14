<template>
  <div class="container mx-auto px-4 mt-20">
    <div class="md:flex md:flex-wrap">
      <div class="w-full md:w-1/2 text-center mt-6 mb-6 md:text-left">
        <h3 class="app-h3">ABOUT</h3>
        <div class="px-0 md:px-3">
          <h1 class="app-h1">VINO ISLA</h1>
          <span class="bottom-bar md:pl-3">&nbsp;</span>
          <p class="mt-6">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos dicta corporis fugit facilis,
            hic veniam non beatae, facere totam possimus delectus
            maiores eius?
          </p>
          <div class="mt-6">
            <button class="app-btn mr-3">OUR STORY</button>
            <button class="app-btn">ORCHARDS</button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 relative">
        <div class="">
          <img
            class="shadow-md md:absolute md:h-48 md:right-0 z-10"
            src="~/assets/img/About 1-min.png"
            alt=""
          >
        </div>
        <div class="">
          <img
            class="shadow-md md:absolute md:h-48 md:left-0 md:bottom-0 z-0"
            src="~/assets/img/About 2-min.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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