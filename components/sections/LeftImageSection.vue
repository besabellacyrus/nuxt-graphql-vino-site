<template>
  <div class="container mx-auto px-4 mt-20 relative">
    <div class="md:flex mx-10 md:flex-wrap">
      <div class="w-full md:w-1/2 relative">
        <div class="">
          <img
            class="shadow-md md:absolute left-image-one md:left-0 z-10"
            src="~/assets/img/Visit 1-min.jpg"
            alt=""
          >
        </div>
        <div class="">
          <img
            class="shadow-md right-image-one z-0"
            src="~/assets/img/visitt.png"
            alt=""
          >
        </div>
      </div>
      <div class="w-full md:w-1/2 text-center mt-32 mb-6 md:mt-6 md:text-left">
        <h3 class="app-h3 text-center md:text-right">CARE FOR A VISIT?</h3>
        <div class="px-0 md:px-3">
          <h1 class="app-h1 text-center md:text-right">TASTE OUR WINES</h1>
          <span class="bottom-bar float-none md:float-right mt-6">&nbsp;</span>
          <p class="mt-12 text-center md:text-right">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos dicta corporis fugit facilis,
            hic veniam non beatae, facere totam possimus delectus
            maiores eius?
          </p>
          <div class="mt-6 text-center md:text-right">
            <button class="app-btn">SCHEDULE YOUR VISIT</button>
          </div>
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
.left-image-one {
  height: 23rem;
  @media screen and (max-width: 1024px) {
    height: 15rem;
    margin-left: 5rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 768px) {
    height: 15rem;
    margin-left: 0rem;
    margin-top: 2rem;
  }
}
.right-image-one {
  height: 23rem;
  position: absolute;
  right: 0;
  top: 8rem;
  left: 15rem;
  @media screen and (max-width: 1024px) {
    height: 12rem;
  }
  @media screen and (max-width: 768px) {
    height: 12rem;
    top: 9rem;
    left: 10rem;
  }
  @media screen and (max-width: 375px) {
    img {
      position: absolute;
      right: 0;
      top: 135px;
    }
    height: 12rem;
    position: initial;
    right: initial;
    top: initial;
    left: initial;
  }
}
</style>