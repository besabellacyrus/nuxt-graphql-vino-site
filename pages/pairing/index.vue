<template>
  <div>
    <HeroImageDynamic
      class="pt-32"
      :img-url="heroImage"
    ></HeroImageDynamic>
    <CenterSectionDynamic
      subtitle="WHAT TO PAIR?"
      title="FOOD &amp; VINO ISLA"
    >
      <p class="mt-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur totam esse voluptatem, quod fugiat doloribus, error nemo culpa sequi non repellendus maiores similique?
      </p>
    </CenterSectionDynamic>
    <div class="container mx-auto text-center mt-10">
      <h3 class="app-subtitle text-2xl mb-6">CHOOSE YOUR VINO</h3>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full px-2 md:w-1/3">
          <img
            src="~/assets/img/pairing/Coconut-Wine---Image-min.png"
            alt=""
          >
          <div class="text-center mt-6">
            <h3 class="app-subtitle">TROPICAL</h3>
            <h1 class="app-title text-2xl">COCONUT WINE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis rerum delectus quod sint excepturi corporis porro veniam minima, adipisci quia, aliquam consectetur!
            </p>
          </div>
        </div>
        <div class="w-full px-2 md:w-1/3">
          <img
            src="~/assets/img/pairing/Mango-Wine---Image-min.png"
            alt=""
          >
          <div class="text-center mt-6">
            <h3 class="app-subtitle">TROPICAL</h3>
            <h1 class="app-title text-2xl">MANGO WINE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis rerum delectus quod sint excepturi corporis porro veniam minima, adipisci quia, aliquam consectetur!
            </p>
          </div>
        </div>
        <div class="w-full px-2 md:w-1/3">
          <img
            src="~/assets/img/pairing/SugarCane-Wine---Image-min.png"
            alt=""
          >
          <div class="text-center mt-6">
            <h3 class="app-subtitle">TROPICAL</h3>
            <h1 class="app-title text-2xl">SUGARCANE WINE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis rerum delectus quod sint excepturi corporis porro veniam minima, adipisci quia, aliquam consectetur!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="app-spacer">&nbsp;</div>
  </div>
</template>

<script>
const heroImage = require('~/assets/img/pairing/Pairings---Header-min.png');
import HeroImageDynamic from "../../components/dynamic/HeroImageDynamic"
import CenterSectionDynamic from "../../components/dynamic/CenterSectionDynamic"

export default {
  components: {
    HeroImageDynamic,
    CenterSectionDynamic
  },
  data () {
    return {
      heroImage
    }
  }

}
</script>

<style>
</style>