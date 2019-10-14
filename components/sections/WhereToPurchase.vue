<template>
  <div class="container mx-auto px-4 mt-20">
    <div class="md:flex md:flex-wrap">
      <div class="w-full md:w-1/2 text-center mt-6 mb-6 md:text-left">
        <h3 class="app-h3">WHERE TO PURCHASE?</h3>
        <div class="px-0 md:px-3">
          <h1 class="app-h1">SHOP VINO ISLA</h1>
          <span class="bottom-bar md:pl-3">&nbsp;</span>
          <ul class="mt-10 list">
            <li class="mb-5">
              <h3 class="app-h3 mb-1">WINES</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos veritatis non sed perspiciatis fugit veniam nemo. Quia officiis veritatis velit minima qui.
              </p>
            </li>
            <li class="mb-5">
              <h3 class="app-h3 mb-1">COLLECTIONS</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos veritatis non sed perspiciatis fugit veniam nemo. Quia officiis veritatis velit minima qui.
              </p>
            </li>
            <li class="mb-5">
              <h3 class="app-h3 mb-1">STORE LOCATOR</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos veritatis non sed perspiciatis fugit veniam nemo. Quia officiis veritatis velit minima qui.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-1/2 relative">
        <div class="">
          <img
            class="where-to-purchase-img"
            src="~/assets/img/Purchase 1-min.png"
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
.where-to-purchase-img {
  height: 25rem;
  margin: 0 auto;
  margin-top: 5rem;
}
.list {
  p {
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
  }
}
</style>